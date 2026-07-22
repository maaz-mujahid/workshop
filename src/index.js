/* Cloudflare Worker entry point.
 * - Static app requests (index.html, app.js, data/*, icons/*, ...) are served
 *   from the assets binding, exactly as before.
 * - Requests to /api/ai are proxied to OpenRouter, with the API key kept in
 *   an encrypted Worker secret (OPENROUTER_KEY) — the key never reaches the
 *   browser.
 *
 * Set the secret once via the Cloudflare dashboard:
 *   Workers & Pages -> workshop -> Settings -> Variables and Secrets -> Add secret
 *   Name: OPENROUTER_KEY   Value: <your OpenRouter key>
 */

const DEFAULT_MODEL = 'nvidia/nemotron-3-ultra-550b-a55b:free';
const ALLOWED_MODELS = new Set([
 'nvidia/nemotron-3-ultra-550b-a55b:free',
 'poolside/laguna-m.1:free',
 'cohere/north-mini-code:free'
]);

function json(data, status = 200) {
 return new Response(JSON.stringify(data), {
  status,
  headers: { 'content-type': 'application/json' }
 });
}

async function handleAI(request, env) {
 if (request.method !== 'POST') return json({ error: 'POST only' }, 405);
 if (!env.OPENROUTER_KEY) return json({ error: 'OPENROUTER_KEY not configured' }, 500);

 let body;
 try {
  body = await request.json();
 } catch (e) {
  return json({ error: 'Invalid JSON body' }, 400);
 }

 const { system, prompt, model } = body || {};
 if (!prompt || typeof prompt !== 'string') return json({ error: 'Missing "prompt" string' }, 400);

 const chosenModel = ALLOWED_MODELS.has(model) ? model : DEFAULT_MODEL;

 const messages = [];
 if (system && typeof system === 'string') messages.push({ role: 'system', content: system });
 messages.push({ role: 'user', content: prompt });

 const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
   'content-type': 'application/json',
   'authorization': `Bearer ${env.OPENROUTER_KEY}`,
   'HTTP-Referer': 'https://workshop.maazmujahid.workers.dev',
   'X-Title': 'Workshop'
  },
  body: JSON.stringify({ model: chosenModel, messages })
 });

 if (!upstream.ok) {
  const errText = await upstream.text();
  return json({ error: 'OpenRouter request failed', detail: errText }, upstream.status);
 }

 const data = await upstream.json();
 const text = data?.choices?.[0]?.message?.content ?? '';
 return json({ text, model: chosenModel });
}

export default {
 async fetch(request, env) {
  const url = new URL(request.url);

  if (url.pathname === '/api/ai') {
   return handleAI(request, env);
  }

  // everything else: serve the static app
  return env.ASSETS.fetch(request);
 }
};
