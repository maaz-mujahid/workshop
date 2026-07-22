const CAT={board:'Dev board',sensor:'Sensor',power:'Power',ic:'IC / semi',passive:'Passive',led:'LED / opto',connector:'Connector / wire',mech:'Mechanical',misc:'Misc'};
const TCAT={hand:'Hand tool',power:'Power tool',measure:'Measuring',safety:'Safety',consumable:'Shop consumable',misc:'Misc'};
const STATUSES=['Idea','Planned','In Progress','Completed','Cancelled'];
const ACTIVE=['Planned','In Progress'];
/* Category icons — Lucide (open, MIT), monochrome via currentColor */
const _lu=p=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';
const ICONS={
board:_lu('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M11 9h4a2 2 0 0 0 2-2V3"/><circle cx="9" cy="9" r="1.6"/><path d="M7 21v-4a2 2 0 0 1 2-2h4"/><circle cx="15" cy="15" r="1.6"/>'),
sensor:_lu('<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.86a10 10 0 0 1 14 0"/><path d="M8.5 16.43a5 5 0 0 1 7 0"/>'),
power:_lu('<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'),
ic:_lu('<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>'),
passive:_lu('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'),
led:_lu('<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>'),
connector:_lu('<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M6 8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>'),
mech:_lu('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
misc:_lu('<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>')};
/* Tool category icons — Lucide */
const TICONS={
hand:_lu('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
power:_lu('<path d="M12 2v6"/><path d="m4.93 4.93 4.24 4.24"/><circle cx="12" cy="15" r="7"/><path d="M12 12v3l2 2"/>'),
measure:_lu('<path d="M14 3 3 14a1 1 0 0 0 0 1.41l5.59 5.59a1 1 0 0 0 1.41 0L21 10"/><path d="m7.5 10.5 2 2"/><path d="m10.5 7.5 2 2"/><path d="m13.5 4.5 2 2"/><path d="m4.5 13.5 2 2"/>'),
safety:_lu('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>'),
consumable:_lu('<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>'),
misc:_lu('<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>')};
/* Interface icons — Lucide */
const IC={
plus:'<path d="M5 12h14M12 5v14"/>',minus:'<path d="M5 12h14"/>',
checks:'<path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/>',
bulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
pencil:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
book:'<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
shop:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
copy:'<rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2"/>',
chevright:'<path d="m9 18 6-6-6-6"/>',chevleft:'<path d="m15 18-6-6 6-6"/>',
upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
sparkles:'<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>'};
const ic=n=>'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+IC[n]+'</svg>';
/* Part/tool portrait icons now live in icons/parts/*.svg and icons/tools/*.svg,
   guided by icons/ICON_GUIDELINES.md. PICS is populated at load time from
   icons/manifest.json (see loadIconLibrary below) instead of being hardcoded here. */
const PICS={};
let ICON_MANIFEST=null;
let ICON_GUIDELINES_TEXT=''; // fed to the AI as the icon-gen system prompt — fetched live so it always matches whatever's currently in the repo
async function loadIconLibrary(){
 try{
  const manifest=await fetchJSON('icons/manifest.json');
  ICON_MANIFEST=manifest;
  const entries=[...Object.entries(manifest.parts||{}),...Object.entries(manifest.tools||{})];
  const uniquePaths=[...new Set(entries.map(([,path])=>path).filter(Boolean))];
  const svgByPath={};
  await Promise.all(uniquePaths.map(async path=>{
   try{const r=await fetch(path+'?t='+Date.now(),{cache:'no-store'});if(r.ok)svgByPath[path]=await r.text()}catch(e){/* icon missing — falls back to category icon */}
  }));
  for(const [key,path] of entries){if(path&&svgByPath[path])PICS[key]=svgByPath[path]}
  try{const r=await fetch('icons/ICON_GUIDELINES.md?t='+Date.now(),{cache:'no-store'});if(r.ok)ICON_GUIDELINES_TEXT=await r.text()}catch(e){/* guidelines missing — AI icon-gen falls back to a generic system prompt */}
 }catch(e){console.warn('icon library load failed, falling back to category icons',e)}
 // Reapply any AI-generated/uploaded icons not yet pushed to GitHub, so unsynced work survives a reload.
 if(!ICON_MANIFEST)ICON_MANIFEST={parts:{},tools:{}};
 for(const [key,edit] of Object.entries(S.iconEdits)){
  PICS[key]=edit.svg;
  (edit.kind==='tools'?ICON_MANIFEST.tools:ICON_MANIFEST.parts)[key]=edit.path;
 }
}
// Pull the raw SVG out of an AI response, tolerating stray prose or ```svg fences around it.
function extractSVG(text){
 if(!text)return null;
 const m=text.match(/<svg[\s\S]*?<\/svg>/i);
 return m?m[0]:null;
}

/* ================= STATE ================= */
const LS='ws-state-v1';
let S={parts:{},tools:{},projects:[],boms:{},toolBoms:{},inv:{},toolInv:{},cfg:{owner:'',repo:'',branch:'main',token:''},dirty:false,loadedFrom:'',iconEdits:{}};
// Read iconEdits synchronously up front — loadData() and loadIconLibrary() run in parallel via Promise.all,
// so iconEdits needs to be in place before loadIconLibrary's reapply step runs, not after loadData resolves.
try{const saved0=JSON.parse(localStorage.getItem(LS)||'{}');if(saved0.iconEdits)S.iconEdits=saved0.iconEdits}catch(e){}
let tab='shop',filter='',projFilter='',projSel=null,kind='parts';
/* ---- generic accessors so shop/inv/all views work for both parts (P-codes) and tools (T-codes) ---- */
const CATALOG=()=>kind==='tools'?S.tools:S.parts;
const INV=()=>kind==='tools'?S.toolInv:S.inv;
const BOMS=()=>kind==='tools'?S.toolBoms:S.boms;
const IKEY=()=>kind==='tools'?'toolId':'partId';
const CATS=()=>kind==='tools'?TCAT:CAT;
const CICONS=()=>kind==='tools'?TICONS:ICONS;
const PFX=()=>kind==='tools'?'T':'P';

const $=s=>document.querySelector(s);
const esc=s=>(s==null?'':(''+s)).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const rup=n=>'₹'+(Math.round(n*10)/10).toLocaleString('en-IN');
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2200)}

function saveLocal(){localStorage.setItem(LS,JSON.stringify({inv:S.inv,toolInv:S.toolInv,cfg:S.cfg,dirty:S.dirty,iconEdits:S.iconEdits,cache:{parts:S.parts,tools:S.tools,projects:S.projects,boms:S.boms,toolBoms:S.toolBoms}}))}
function markDirty(){S.dirty=true;saveLocal();updateSync()}

/* ================= DATA LOADING ================= */
async function fetchJSON(path){
 const r=await fetch(path+'?t='+Date.now(),{cache:'no-store'});
 if(!r.ok)throw new Error(path+' '+r.status);
 return r.json();
}
// Read a repo file preferring the GitHub API over the deployed Pages copy.
// The Pages copy only refreshes after a rebuild (~10s–2min after a push), so a
// Sync on one device would lag on another. The API reflects a commit instantly,
// which matters for the app-written files (inventory + project status). Used only
// when a token is configured (authenticated: 5000 reads/hr); otherwise, and on any
// failure, fall back to the Pages copy so anonymous/offline loads still work.
async function fetchRepoJSON(path){
 const c=S.cfg;
 if(c.owner&&c.repo&&c.token){
  try{
   const url=`https://api.github.com/repos/${c.owner}/${c.repo}/contents/${path}?ref=${c.branch}&t=`+Date.now();
   const r=await fetch(url,{headers:{'Accept':'application/vnd.github.raw+json','Authorization':'Bearer '+c.token},cache:'no-store'});
   if(r.ok)return JSON.parse(await r.text());
  }catch(e){/* fall through to the Pages copy */}
 }
 return fetchJSON(path);
}
async function loadData(force){
 const saved=JSON.parse(localStorage.getItem(LS)||'{}');
 if(saved.cfg)S.cfg=Object.assign(S.cfg,saved.cfg);
 if(saved.inv)S.inv=saved.inv;
 if(saved.toolInv)S.toolInv=saved.toolInv;
 if(saved.dirty)S.dirty=saved.dirty;
 try{
  const [parts,tools,projList]=await Promise.all([fetchRepoJSON('data/parts.json'),fetchRepoJSON('data/tools.json'),fetchJSON('data/projects.json')]);
  S.parts=parts.parts||{};
  S.tools=tools.tools||{};
  const slugs=projList.projects||[];
  const projs=[],boms={},toolBoms={};
  for(const slug of slugs){
   try{
    const [pj,bm]=await Promise.all([fetchRepoJSON('projects/'+slug+'/project.json'),fetchJSON('projects/'+slug+'/bom.json')]);
    projs.push(pj);boms[slug]=bm.items||[];
    if(pj.tools){try{const tm=await fetchJSON('projects/'+slug+'/'+pj.tools);toolBoms[slug]=tm.items||[]}catch(e){toolBoms[slug]=[]}}
    else toolBoms[slug]=[];
   }catch(e){console.warn('project load fail',slug,e)}
  }
  S.projects=projs;S.boms=boms;S.toolBoms=toolBoms;S.loadedFrom='github';
  // Inventory is app-owned and GitHub is the source of truth, so refresh it from
  // the repo on every successful load — that's how a sync on one device shows up
  // on another. The one exception: if this device has unsynced local edits
  // (dirty), keep them so a reload doesn't silently discard un-pushed stock.
  if(!S.dirty){
   try{const iv=await fetchRepoJSON('data/inventory.json');S.inv=iv.stock||{}}catch(e){if(!saved.inv)S.inv={}}
   try{const tiv=await fetchRepoJSON('data/tools-inventory.json');S.toolInv=tiv.stock||{}}catch(e){if(!saved.toolInv)S.toolInv={}}
  }
  // merge in any project-status overrides the user changed locally but hasn't synced
  if(saved.statusOverride){for(const p of S.projects){if(saved.statusOverride[p.id])p.status=saved.statusOverride[p.id]}}
  saveLocal();
  return true;
 }catch(e){
  // offline / file:// — fall back to cache
  if(saved.cache&&saved.cache.parts){
   S.parts=saved.cache.parts;S.tools=saved.cache.tools||{};S.projects=saved.cache.projects||[];S.boms=saved.cache.boms||{};S.toolBoms=saved.cache.toolBoms||{};
   S.loadedFrom='cache';return true;
  }
  throw e;
 }
}

/* ================= CALC ================= */
function needFor(pid,scope){ // scope: 'active' | slug
 const boms=BOMS(),key=IKEY();
 if(kind==='tools'){ // tools are shared equipment — needed is boolean, not summed
  for(const p of S.projects){
   if(scope==='active'){if(!ACTIVE.includes(p.status))continue}
   else{if(p.id!==scope)continue}
   if((boms[p.id]||[]).some(b=>b[key]===pid))return 1;
  }
  return 0;
 }
 let n=0;
 for(const p of S.projects){
  if(scope==='active'){if(!ACTIVE.includes(p.status))continue}
  else{if(p.id!==scope)continue}
  const item=(boms[p.id]||[]).find(b=>b[key]===pid);
  if(item)n+=item.qty;
 }
 return n;
}
const owned=pid=>kind==='tools'?(INV()[pid]?1:0):(INV()[pid]||0);
function toBuy(pid,scope){return Math.max(0,needFor(pid,scope)-owned(pid))}
function partsInScope(scope){
 const set=new Set();const boms=BOMS(),key=IKEY();
 for(const p of S.projects){
  if(scope==='active'){if(!ACTIVE.includes(p.status))continue}
  else if(scope!=='__all__'){if(p.id!==scope)continue}
  (boms[p.id]||[]).forEach(b=>set.add(b[key]));
 }
 return [...set];
}
function projName(id){const p=S.projects.find(x=>x.id===id);return p?p.name:id}

/* ================= RENDER ================= */
function stats(){
 const scope=projFilter||'active';
 const buy=partsInScope(scope).filter(pid=>toBuy(pid,scope)>0);
 $('#stBuy').textContent=buy.length;
 $('#stCost').textContent=rup(buy.reduce((a,pid)=>a+toBuy(pid,scope)*(CATALOG()[pid]?.expectedPrice||0),0));
 $('#stOwn').textContent=Object.values(INV()).reduce((a,b)=>a+b,0);
 $('#stProj').textContent=S.projects.length;
 $('#cShop').textContent=buy.length||'';
 $('#cInv').textContent=Object.keys(INV()).filter(k=>INV()[k]>0).length;
 $('#cAll').textContent=Object.keys(CATALOG()).length;
 $('#cProj').textContent=S.projects.length;
}
function bigPic(part){return PICS[part.icon]||CICONS()[part.category]||CICONS().misc}
function catIcon(part){return CICONS()[part.category]||CICONS().misc}
function srcHtml(part){
 if(!part.sources||!part.sources.length)return '';
 return part.sources.map(s=>{
  const label=esc(s.shop)+(s.price?' ₹'+esc(s.price):'');
  return s.url?`<a href="${esc(s.url)}" target="_blank" rel="noopener">${label}</a>`:label;
 }).join(' · ');
}
function matchFilter(pid){
 const p=CATALOG()[pid];if(!p)return false;
 if(!filter)return true;
 const f=filter.toLowerCase();
 return (pid+' '+p.name+' '+(p.spec||'')+' '+CATS()[p.category]+' '+(p.alternatives||'')).toLowerCase().includes(f);
}
function partCard(pid,scope){
 const p=CATALOG()[pid];if(!p)return '';
 if(kind==='tools')return toolCard(pid);
 const need=needFor(pid,scope==='active'?'active':scope), nb=Math.max(0,need-owned(pid));
 const isCatalogue=tab==='all';
 const boms=BOMS(),key=IKEY();
 const projChips=isCatalogue?'':S.projects.filter(pr=>(boms[pr.id]||[]).some(b=>b[key]===pid)).map(pr=>{const q=(boms[pr.id]||[]).find(b=>b[key]===pid).qty;return `<span class="chip proj">${esc(pr.name)} ×${q}</span>`}).join('');
 return `<div class="card" data-pid="${pid}">
  <div class="thumb">${bigPic(p)}</div>
  <div class="body">
   <div class="name">${esc(p.name)}<span class="pid">${pid}</span><button class="edit-ic" data-act="edit" title="Edit">${ic('pencil')}</button></div>
   <div class="desc">${esc(p.spec||'')}${p.notes?' — '+esc(p.notes):''}</div>
   <div class="chips"><span class="chip">${CATS()[p.category]}</span>${projChips}</div>
   ${isCatalogue?'':`<div class="qtyrow"><span>Need <b>${need}</b></span><span>In stock <b>${owned(pid)}</b></span></div>`}
   <div class="src">${srcHtml(p)}</div><div class="ai-inline" data-aibox></div>
  </div>
  <div class="card-controls"><div class="acts">
    ${owned(pid)>0?
     `<div class="qtystep"><button class="qs-btn" data-act="stepminus">${ic('minus')}</button><input class="qs-input" type="number" min="0" step="1" value="${owned(pid)}" data-act="stepinput"><button class="qs-btn" data-act="stepplus">${ic('plus')}</button></div>`
     :`<button class="btn small primary" data-act="add">${ic('plus')}Add</button>`}
    ${nb>0?`<button class="btn small" data-act="buyall">${ic('checks')}All ${nb}</button>`:''}
    <button class="btn small" data-act="alt">${ic('bulb')}<span class="label">Alternatives</span></button>
  </div></div>
 </div>`;
}
// Tools are shared equipment — no quantities, just "do I have this or not".
function toolCard(pid){
 const p=S.tools[pid];if(!p)return '';
 const has=owned(pid)>0;
 return `<div class="card" data-pid="${pid}">
  <div class="thumb">${bigPic(p)}</div>
  <div class="body">
   <div class="name">${esc(p.name)}<span class="pid">${pid}</span><button class="edit-ic" data-act="edit" title="Edit">${ic('pencil')}</button></div>
   <div class="desc">${esc(p.spec||'')}${p.notes?' — '+esc(p.notes):''}</div>
   <div class="chips"><span class="chip">${TCAT[p.category]}</span></div>
   <div class="src">${srcHtml(p)}</div><div class="ai-inline" data-aibox></div>
  </div>
  <div class="card-controls"><div class="acts">
    <button class="btn small ${has?'':'primary'}" data-act="toolhave">${has?ic('checks')+'Have it':ic('plus')+'Mark owned'}</button>
    <button class="btn small" data-act="alt">${ic('bulb')}<span class="label">Alternatives</span></button>
  </div></div>
 </div>`;
}
/* ============= TARGETED CARD REFRESH (avoids full re-sort/jump on qty changes) ============= */
function updateSectionTotal(scope){
 const el=document.querySelector('.section-total');if(!el)return;
 const pids=[...document.querySelectorAll('.card[data-pid]')].map(c=>c.dataset.pid);
 const total=pids.reduce((a,pid)=>a+toBuy(pid,scope)*(CATALOG()[pid].expectedPrice||0),0);
 const scopeLbl=projFilter?projName(projFilter):'all active projects';
 el.innerHTML=`<span>${pids.length} items · ${esc(scopeLbl)}</span><span>expected ${rup(total)}</span>`;
}
function refreshCard(pid){
 const card=document.querySelector(`.card[data-pid="${pid}"]`);
 if(!card)return;
 const scope=projFilter||'active';
 if(tab==='shop'&&toBuy(pid,scope)<=0){card.remove();updateSectionTotal(scope);if(!document.querySelector('.card[data-pid]'))render();return}
 if(tab==='inv'&&owned(pid)<=0){card.remove();if(!document.querySelector('.card[data-pid]'))render();return}
 const cardScope=tab==='inv'?'__all__':scope;
 const tmp=document.createElement('div');tmp.innerHTML=partCard(pid,cardScope);
 card.replaceWith(tmp.firstElementChild);
}
function render(){
 if(!Object.keys(S.parts).length&&tab!=='setup')return;
 const chrome=tab!=='setup'&&tab!=='proj';
 $('.searchwrap').style.display=chrome?'':'none';
 $('.filterrow').style.display=chrome?'':'none';
 $('.stats').style.display=tab!=='setup'?'':'none';
 $('.kindtoggle').style.display=chrome?'':'none';
 const v=$('#view');
 if(tab==='setup'){v.innerHTML=setupView();return}
 $('#addPart').textContent=kind==='tools'?'+ Tool':'+ Part';
 $('#filter').placeholder=kind==='tools'?'Search tools':'Search parts';
 stats();
 if(tab==='shop'){
  const scope=projFilter||'active';
  let buy=partsInScope(scope).filter(pid=>toBuy(pid,scope)>0&&matchFilter(pid));
  buy.sort((a,b)=>toBuy(b,scope)*(CATALOG()[b].expectedPrice||0)-toBuy(a,scope)*(CATALOG()[a].expectedPrice||0));
  const total=buy.reduce((a,pid)=>a+toBuy(pid,scope)*(CATALOG()[pid].expectedPrice||0),0);
  const scopeLbl=projFilter?projName(projFilter):'all active projects';
  v.innerHTML=buy.map(pid=>partCard(pid,scope)).join('')||`<div class="empty">Nothing to buy for this scope — all ${kind} covered.</div>`;
 }else if(tab==='inv'){
  const inv=Object.keys(CATALOG()).filter(pid=>owned(pid)>0&&matchFilter(pid));
  v.innerHTML=inv.map(pid=>partCard(pid,'__all__')).join('')||`<div class="empty">📦 ${kind==='tools'?'Tool shelf':'Inventory'} empty. Mark items “Bought” from the Shopping tab.</div>`;
 }else if(tab==='all'){
  const all=Object.keys(CATALOG()).filter(matchFilter);
  v.innerHTML=all.map(pid=>partCard(pid,'__all__')).join('')||`<div class="empty">No ${kind} match.</div>`;
 }else{
  if(projSel){const pr=S.projects.find(p=>p.id===projSel);v.innerHTML=pr?projectDetail(pr):'';}
  else v.innerHTML=S.projects.map(projSummary).join('')||'<div class="empty">No projects.</div>';
 }
}
function projStats(pr){
 const bom=S.boms[pr.id]||[];
 const ownedP=pid=>S.inv[pid]||0;
 const need=bom.reduce((a,b)=>a+b.qty,0);
 const have=bom.reduce((a,b)=>a+Math.min(b.qty,ownedP(b.partId)),0);
 const cost=bom.reduce((a,b)=>a+Math.max(0,b.qty-ownedP(b.partId))*(S.parts[b.partId]?.expectedPrice||0),0);
 return {bom,need,have,cost,pct:need?Math.round(have/need*100):0};
}
function projToolStats(pr){
 const tbom=S.toolBoms[pr.id]||[];
 const ownedT=tid=>S.toolInv[tid]?1:0;
 const have=tbom.filter(b=>ownedT(b.toolId)).length;
 const missing=tbom.length-have;
 return {tbom,have,missing};
}
function projSummary(pr){
 const {need,have,cost,pct}=projStats(pr);
 const stcls='st-'+pr.status.replace(/\s/g,'');
 return `<button class="pcard" data-projopen="${pr.id}">
  <div class="pcard-icon">${ic('book')}</div>
  <div class="pcard-body">
   <div class="pcard-top"><span class="pcard-name">${esc(pr.name)}</span><span class="stpill ${stcls}">${esc(pr.status)}</span></div>
   <div class="pcard-meta">${esc(pr.room||'')}${pr.difficulty?' · '+esc(pr.difficulty):''}${pr.estimatedCost?' · '+esc(pr.estimatedCost):''}</div>
   <div class="bar"><i style="width:${pct}%"></i></div>
   <div class="pcard-foot"><span>${pct}% in hand (${have}/${need})</span><span>${cost>0?rup(cost)+' to buy':'✓ all in hand'}</span></div>
  </div>
  <div class="pcard-chev">${ic('chevright')}</div>
 </button>`;
}
function projectDetail(pr){
 const {bom,need,have,cost,pct}=projStats(pr);
 const ownedP=pid=>S.inv[pid]||0;
 const stcls='st-'+pr.status.replace(/\s/g,'');
 const rows=bom.map(b=>{const p=S.parts[b.partId]||{name:b.partId};const short=Math.max(0,b.qty-ownedP(b.partId));
   return `<tr><td>${esc(p.name)} <span class="pid">${b.partId}</span></td><td class="n">${b.qty}</td><td class="n">${ownedP(b.partId)}</td><td class="n">${short>0?'<b style="color:var(--orange)">'+short+'</b>':'<span style="color:var(--green)">✓</span>'}</td></tr>`}).join('');
 const {tbom,have:toolsHave,missing:toolsMissing}=projToolStats(pr);
 const ownedT=tid=>S.toolInv[tid]?1:0;
 const toolCardsHtml=tbom.map(b=>{
   const t=S.tools[b.toolId]||{name:b.toolId};
   const has=ownedT(b.toolId);
   return `<div class="toolchip ${has?'have':'need'}" data-toolopen="${b.toolId}">
    <div class="toolchip-ic">${bigPic(t)}</div>
    <div class="toolchip-name">${esc(t.name)}</div>
    <div class="toolchip-status">${has?'✓ Have':'Need'}</div>
   </div>`}).join('');
 const toolsSection=tbom.length?`<div class="section"><div class="section-h">Tools needed${toolsMissing>0?` <span class="hdr-note">(${toolsMissing} missing)</span>`:''}</div>
   <div class="toolscroll">${toolCardsHtml}</div>
  </div>`:'';
 const safety=(pr.safety&&pr.safety.length)?`<div class="section warn"><div class="section-h">⚠ Safety</div><ul class="safety-list">${pr.safety.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div>`:'';
 return `<button class="backbtn" data-act="back">${ic('chevleft')}Projects</button>
  <div class="detail-hero">
   <div class="pcard-icon lg">${ic('book')}</div>
   <div><div class="detail-title">${esc(pr.name)}</div>
   <div class="detail-meta">${esc(pr.room||'')}${pr.difficulty?' · '+esc(pr.difficulty):''}${pr.estimatedCost?' · '+esc(pr.estimatedCost):''}</div></div>
  </div>
  <div class="detail-status"><span class="lbl">Status</span><select class="stsel ${stcls}" data-statusfor="${pr.id}">${STATUSES.map(s=>`<option${s===pr.status?' selected':''}>${s}</option>`).join('')}</select></div>
  <div class="section"><div class="section-h">Overview</div><p class="section-p">${esc(pr.summary||'')}</p></div>
  <div class="section"><div class="section-h">Progress</div>
   <div class="bar"><i style="width:${pct}%"></i></div>
   <div class="qtyrow"><span><b>${pct}%</b> parts in hand (${have}/${need})</span><span>≈ <b>${rup(cost)}</b> left to buy</span></div>
  </div>
  ${safety}
  <div class="section"><div class="section-h">Circuit diagram</div>
   <img class="diagram" src="projects/${pr.id}/circuit-diagram.svg" alt="Circuit diagram — tap to open full screen" onerror="this.closest('.section').remove()">
  </div>
  <div class="section"><div class="section-h">Parts</div>
   <table class="ptable"><tr><th>Part</th><th class="n">Need</th><th class="n">Own</th><th class="n">Buy</th></tr>${rows}</table>
  </div>
  ${toolsSection}
  <div class="actions-sec">
   <button class="btn primary block" data-act="opendoc" data-proj="${pr.id}">${ic('book')}Open full build guide</button>
   <button class="btn block" data-act="shopproj" data-proj="${pr.id}">${ic('shop')}Shop this project</button>
   ${tbom.length?`<button class="btn block" data-act="shoptoolsproj" data-proj="${pr.id}">${ic('shop')}Shop tools for this project</button>`:''}
  </div>`;
}

/* ================= EVENTS ================= */
document.addEventListener('click',e=>{
 const t=e.target.closest('.tab');
 if(t){document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');tab=t.dataset.tab;projSel=null;filter='';$('#filter').value='';render();window.scrollTo(0,0);return}
 const kt=e.target.closest('.kbtn');
 if(kt){kind=kt.dataset.kind;document.querySelectorAll('.kbtn').forEach(x=>x.classList.toggle('active',x===kt));filter='';$('#filter').value='';render();return}
 const tc=e.target.closest('[data-toolopen]');
 if(tc){const tid=tc.dataset.toolopen;if(S.toolInv[tid])delete S.toolInv[tid];else S.toolInv[tid]=1;markDirty();render();return}
 const po=e.target.closest('[data-projopen]');
 if(po){projSel=po.dataset.projopen;render();window.scrollTo(0,0);return}
 const dg=e.target.closest('img.diagram');
 if(dg){openZoom(dg.getAttribute('src'));return}
 const b=e.target.closest('[data-act]');if(!b)return;
 const act=b.dataset.act;
 if(act==='back'){projSel=null;render();window.scrollTo(0,0);return}
 if(act==='cfgsave'){S.cfg={owner:$('#cOwner').value.trim(),repo:$('#cRepo').value.trim(),branch:$('#cBranch').value.trim()||'main',token:$('#cToken').value.trim()};saveLocal();updateSync();toast('Setup saved');return}
 if(act==='shopproj'){kind='parts';document.querySelectorAll('.kbtn').forEach(x=>x.classList.toggle('active',x.dataset.kind==='parts'));
   projFilter=b.dataset.proj;$('#projFilter').value=projFilter;tab='shop';projSel=null;
   document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.tab==='shop'));render();return}
 if(act==='shoptoolsproj'){kind='tools';document.querySelectorAll('.kbtn').forEach(x=>x.classList.toggle('active',x.dataset.kind==='tools'));
   projFilter=b.dataset.proj;$('#projFilter').value=projFilter;tab='shop';projSel=null;
   document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.tab==='shop'));render();return}
 if(act==='opendoc'){window.open('projects/'+b.dataset.proj+'/project.html','_blank');return}
 const card=e.target.closest('[data-pid]');if(!card)return;
 const pid=card.dataset.pid;
 const scope=projFilter||'active';
 const inv=INV();
 if(act==='add'){inv[pid]=1;markDirty();refreshCard(pid);return}
 else if(act==='toolhave'){if(owned(pid)>0)delete inv[pid];else inv[pid]=1;markDirty();refreshCard(pid);return}
 else if(act==='stepplus'){inv[pid]=owned(pid)+1;markDirty();refreshCard(pid);return}
 else if(act==='stepminus'){if(owned(pid)>0){inv[pid]=owned(pid)-1;if(inv[pid]===0)delete inv[pid];markDirty();refreshCard(pid)}return}
 else if(act==='buyall'){inv[pid]=owned(pid)+toBuy(pid,tab==='shop'?scope:'__all__');markDirty();refreshCard(pid);return}
 else if(act==='alt'){showAlt(card.querySelector('[data-aibox]'),pid);return}
 else if(act==='edit'){partDialog(pid);return}
 render();
});
document.addEventListener('change',e=>{
 const qi=e.target.closest('[data-act="stepinput"]');
 if(qi){
  const card=qi.closest('[data-pid]');if(!card)return;
  const pid=card.dataset.pid;
  const inv=INV();
  const v=Math.max(0,parseInt(qi.value,10)||0);
  if(v===0)delete inv[pid];else inv[pid]=v;
  markDirty();refreshCard(pid);return;
 }
});
$('#filter').addEventListener('input',e=>{filter=e.target.value;render()});
$('#projFilter').addEventListener('change',e=>{projFilter=e.target.value;render()});
document.addEventListener('change',e=>{
 const s=e.target.closest('[data-statusfor]');if(!s)return;
 const pr=S.projects.find(x=>x.id===s.dataset.statusfor);if(!pr)return;
 const old=pr.status;pr.status=s.value;
 const st=JSON.parse(localStorage.getItem(LS)||'{}');st.statusOverride=st.statusOverride||{};st.statusOverride[pr.id]=pr.status;localStorage.setItem(LS,JSON.stringify(st));
 if(pr.status==='Completed'&&old!=='Completed'){
  if(confirm('Mark "'+pr.name+'" complete and subtract its parts from your inventory? (Cancel = keep inventory as-is)')){
   (S.boms[pr.id]||[]).forEach(bm=>{const left=(S.inv[bm.partId]||0)-bm.qty;if(left>0)S.inv[bm.partId]=left;else delete S.inv[bm.partId]});
   toast('Inventory consumed for '+pr.name);
  }
 }
 markDirty();render();
});

/* ================= FULLSCREEN DIAGRAM VIEWER (pinch / scroll zoom, pan) ================= */
const zoomEl=$('#zoomer'),zoomImg=$('#zoomImg');
const Z={w:0,x:0,y:0,fitW:0,ptrs:new Map(),lastDist:0,down:null,lastTap:0};
// Zoom by changing layout width (not CSS scale): the browser re-renders the SVG
// at each size, so vector diagrams stay razor sharp at any zoom level.
function zApply(){zoomImg.style.width=Z.w+'px';zoomImg.style.transform=`translate(${Z.x}px,${Z.y}px)`}
function zFit(){
 const vw=innerWidth,vh=innerHeight,iw=zoomImg.naturalWidth||1,ih=zoomImg.naturalHeight||1;
 Z.fitW=iw*Math.min((vw-24)/iw,(vh-24)/ih);
 Z.w=Z.fitW;Z.x=(vw-Z.w)/2;Z.y=(vh-Z.w*ih/iw)/2;zApply();
}
function zZoomAt(f,cx,cy){
 const nw=Math.min(Math.max(Z.w*f,Z.fitW*.5),Z.fitW*14);
 const r=nw/Z.w;Z.x=cx-(cx-Z.x)*r;Z.y=cy-(cy-Z.y)*r;Z.w=nw;zApply();
}
function openZoom(src){
 zoomImg.removeAttribute('style');zoomImg.src=src;
 zoomEl.classList.add('open');document.body.style.overflow='hidden';
 if(zoomImg.complete&&zoomImg.naturalWidth)zFit();else zoomImg.onload=zFit;
}
function closeZoom(){zoomEl.classList.remove('open');document.body.style.overflow='';Z.ptrs.clear();Z.lastDist=0}
$('#zoomClose').addEventListener('click',e=>{e.stopPropagation();closeZoom()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&zoomEl.classList.contains('open'))closeZoom()});
zoomEl.addEventListener('pointerdown',e=>{
 if(e.target.closest('.zoomer-close'))return;
 e.preventDefault();zoomEl.setPointerCapture(e.pointerId);
 Z.ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
 if(Z.ptrs.size===1)Z.down={x:e.clientX,y:e.clientY,t:Date.now(),moved:false};
 if(Z.ptrs.size===2){const p=[...Z.ptrs.values()];Z.lastDist=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)}
});
zoomEl.addEventListener('pointermove',e=>{
 if(!Z.ptrs.has(e.pointerId))return;
 const prev=Z.ptrs.get(e.pointerId);Z.ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
 if(Z.down&&Math.hypot(e.clientX-Z.down.x,e.clientY-Z.down.y)>10)Z.down.moved=true;
 if(Z.ptrs.size===1){Z.x+=e.clientX-prev.x;Z.y+=e.clientY-prev.y;zApply()}
 else if(Z.ptrs.size===2){
  const p=[...Z.ptrs.values()];
  const d=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);
  if(Z.lastDist>0)zZoomAt(d/Z.lastDist,(p[0].x+p[1].x)/2,(p[0].y+p[1].y)/2);
  Z.lastDist=d;
 }
});
function zEnd(e){
 Z.ptrs.delete(e.pointerId);Z.lastDist=0;
 if(e.type==='pointerup'&&Z.ptrs.size===0&&Z.down&&!Z.down.moved&&Date.now()-Z.down.t<300){
  const now=Date.now();
  if(now-Z.lastTap<300){ // double-tap: toggle between fit and 3×
   if(Z.w>Z.fitW*1.15)zFit();else zZoomAt(3,e.clientX,e.clientY);
   Z.lastTap=0;
  }else Z.lastTap=now;
 }
 if(Z.ptrs.size===0)Z.down=null;
}
zoomEl.addEventListener('pointerup',zEnd);
zoomEl.addEventListener('pointercancel',zEnd);
zoomEl.addEventListener('wheel',e=>{e.preventDefault();zZoomAt(e.deltaY<0?1.15:1/1.15,e.clientX,e.clientY)},{passive:false});
zoomEl.addEventListener('gesturestart',e=>e.preventDefault()); // stop iOS Safari page-pinch under the overlay

/* ================= ALTERNATIVES (offline catalogue text + live AI suggestions) ================= */
const AI_ENDPOINT='/api/ai';
const AI_ALT_MODEL='cohere/north-mini-code:free'; // lightest/fastest free model — this task is a short suggestion, not deep reasoning
const AI_ICON_MODEL='poolside/laguna-m.1:free'; // coding-flavored model — better at producing well-formed, structured SVG markup
const aiAltCache={}; // pid -> resolved AI text (or a pending Promise), so re-opening/prefetching a box doesn't re-hit the API
// Pull in the project(s) this part/tool is actually used in, so the AI reasons about the real build, not the part in isolation.
// Built entirely from state already in memory (S.projects + BOMS()) — no extra network round-trips, so it doesn't add latency.
function projectContextFor(pid){
 const key=IKEY(),boms=BOMS();
 const used=S.projects.filter(pr=>(boms[pr.id]||[]).some(b=>b[key]===pid));
 if(!used.length)return '';
 return used.map(pr=>{
  const bomEntry=(boms[pr.id]||[]).find(b=>b[key]===pid);
  const qty=key==='partId'&&bomEntry.qty?` (qty ${bomEntry.qty})`:'';
  const safety=pr.safety&&pr.safety.length?` Safety notes: ${pr.safety.join('; ')}.`:'';
  return `- "${pr.name}"${qty}: ${pr.summary||''}${safety}`;
 }).join('\n');
}
function aiAltPrompt(p,pid){
 const noun=kind==='tools'?'tool':'part';
 const ctx=projectContextFor(pid);
 return `Suggest 2-3 realistic substitute options for this ${noun} used in a DIY home-automation electronics build.\n`+
  `Name: ${p.name}\nCategory: ${CATS()[p.category]}\nSpec: ${p.spec||'n/a'}\n`+
  (ctx?`Used in:\n${ctx}\nConsider whether each substitute still fits that project's circuit and safety needs.\n`:'')+
  `Answer in one short paragraph, plain language, no markdown, under 50 words.`;
}
function fetchAIAlt(pid,p){
 if(aiAltCache[pid])return aiAltCache[pid];
 const req=fetch(AI_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},
   body:JSON.stringify({system:'You are a concise, practical assistant for a home-electronics hobbyist inventory app. Reply in plain text only.',prompt:aiAltPrompt(p,pid),model:AI_ALT_MODEL})})
  .then(r=>{if(!r.ok)throw new Error('request failed ('+r.status+')');return r.json()})
  .then(data=>data.text)
  .catch(e=>{delete aiAltCache[pid];throw e}); // don't cache failures — allow retry on next open
 aiAltCache[pid]=req;
 return req;
}
// Warm the cache as soon as the pointer/finger reaches the 🤖 button — often finishes before the click lands, so showAlt() opens on an already-resolved response.
function prefetchAIAlt(e){
 const b=e.target.closest('[data-act="alt"]');if(!b||!navigator.onLine)return;
 const card=b.closest('[data-pid]');if(!card)return;
 const pid=card.dataset.pid,p=CATALOG()[pid];
 if(!p||aiAltCache[pid])return;
 fetchAIAlt(pid,p).catch(()=>{});
}
document.addEventListener('mouseover',prefetchAIAlt);
document.addEventListener('touchstart',prefetchAIAlt,{passive:true});
function showAlt(box,pid){
 const p=CATALOG()[pid];
 box.classList.toggle('show');
 if(!box.classList.contains('show'))return;
 let html=`<b>Alternatives for ${esc(p.name)}:</b><br>${esc(p.alternatives||'No alternatives noted yet — add some via ✎ edit, or ask in the project chat.')}`;
 if(p.sources&&p.sources.length)html+=`<br><br><b>Where to buy:</b> ${srcHtml(p)}`;
 html+=`<div class="ai-suggest" data-aisuggest="${pid}" style="margin-top:8px">${navigator.onLine?'<span class="spin"></span> Asking AI for more options…':'<i>AI suggestions need an internet connection.</i>'}</div>`;
 box.innerHTML=html;
 if(!navigator.onLine)return;
 fetchAIAlt(pid,p).then(text=>{
  const el=box.querySelector(`[data-aisuggest="${pid}"]`);if(!el)return; // box closed/replaced since the request started
  el.innerHTML=`<b>🤖 AI suggestions:</b><br>${esc(text)}`;
 }).catch(e=>{
  const el=box.querySelector(`[data-aisuggest="${pid}"]`);if(!el)return;
  el.innerHTML=`<i>AI suggestions unavailable (${esc(e.message)}).</i>`;
 });
}

/* ================= GITHUB SYNC ================= */
function b64(str){return btoa(unescape(encodeURIComponent(str)))}
function updateSync(){
 const on=navigator.onLine;
 $('#netDot').className='dot '+(on?'on':'off');
 $('#netTxt').textContent=on?(S.loadedFrom==='cache'?'online (data from cache)':'online'):'offline — changes saved on this device';
 $('#dirtyWrap').style.display=S.dirty?'':'none';
 const ready=S.cfg.owner&&S.cfg.repo&&S.cfg.token&&on;
 $('#syncBtn').disabled=!ready;
 $('#syncBtn').title=ready?'Push inventory, catalogue + statuses to GitHub':(!on?'Offline':'Add repo + token in Setup first');
}
async function ghPutRaw(path,contentStr,message){
 const base=`https://api.github.com/repos/${S.cfg.owner}/${S.cfg.repo}/contents/${path}`;
 const h={'Authorization':'Bearer '+S.cfg.token,'Accept':'application/vnd.github+json'};
 const content=b64(contentStr);
 // cache:'no-store' — must read the *current* sha, never a stale browser-cached one,
 // or GitHub rejects the PUT with 409 "does not match".
 async function getSha(){try{const r=await fetch(base+'?ref='+S.cfg.branch,{headers:h,cache:'no-store'});if(r.ok)return (await r.json()).sha}catch(e){}return null}
 async function put(sha){const body={message,content,branch:S.cfg.branch};if(sha)body.sha=sha;return fetch(base,{method:'PUT',headers:h,body:JSON.stringify(body)})}
 let r=await put(await getSha());
 // If another device pushed between our sha read and this write, the sha is stale.
 // Re-read it and retry once so a benign cross-device race doesn't surface as an error.
 if(r.status===409||r.status===422){r=await put(await getSha())}
 if(!r.ok)throw new Error('GitHub '+r.status+' '+(await r.text()).slice(0,120));
}
async function ghPut(path,obj,message){return ghPutRaw(path,JSON.stringify(obj,null,2),message)}
async function syncGitHub(){
 const btn=$('#syncBtn');btn.disabled=true;const old=btn.innerHTML;btn.innerHTML='<span class="spin"></span>';
 try{
  await ghPut('data/inventory.json',{schema:'inventory/v2',updated:new Date().toISOString().slice(0,10),note:'Physical stock only. App-owned file.',stock:S.inv},'Update inventory');
  await ghPut('data/tools-inventory.json',{schema:'tools-inventory/v1',updated:new Date().toISOString().slice(0,10),note:'Tool ownership only (boolean — a tool is either owned or not, no quantities). App-owned file.',stock:S.toolInv},'Update tools inventory');
  await ghPut('data/parts.json',{schema:'parts-catalogue/v2',updated:new Date().toISOString().slice(0,10),note:'Master parts catalogue. Every component exists once. Projects reference these by partId. Prices in INR.',parts:S.parts},'Update parts catalogue');
  await ghPut('data/tools.json',{schema:'tools-catalogue/v1',updated:new Date().toISOString().slice(0,10),note:'Master tool catalogue (equipment, not consumed by a build — reused across projects). Every tool exists once. Projects reference these by toolId. Prices in INR.',tools:S.tools},'Update tools catalogue');
  // push any changed statuses
  for(const pr of S.projects){
   await ghPut('projects/'+pr.id+'/project.json',pr,'Update '+pr.id+' status → '+pr.status);
  }
  // push any new AI-generated/uploaded icon SVGs, then update the shared manifest once
  const iconKeys=Object.keys(S.iconEdits);
  if(iconKeys.length){
   for(const key of iconKeys){const e=S.iconEdits[key];await ghPutRaw(e.path,e.svg,'Add icon for '+key)}
   await ghPut('icons/manifest.json',ICON_MANIFEST,'Update icon manifest');
   S.iconEdits={};
  }
  S.dirty=false;saveLocal();
  const st=JSON.parse(localStorage.getItem(LS)||'{}');delete st.statusOverride;localStorage.setItem(LS,JSON.stringify(st));
  toast('✓ Synced to GitHub');
 }catch(e){toast('Sync failed: '+e.message);alert('Sync failed:\n'+e.message+'\n\nCheck the token has "repo"/"Contents: write" permission and the repo name is correct.')}
 btn.innerHTML=old;updateSync();
}
$('#syncBtn').addEventListener('click',syncGitHub);
window.addEventListener('online',updateSync);window.addEventListener('offline',updateSync);

/* ================= DIALOGS ================= */
function setupView(){
 const c=S.cfg;
 return `<div class="section setform"><div class="section-h">⚙ GitHub setup</div>
  <div class="note">All free. These let the app save your inventory back to your own repo. The token is stored only on this device, never shared.</div>
  <label>GitHub username (owner)</label><input id="cOwner" value="${esc(c.owner)}" placeholder="e.g. maazmujahid">
  <label>Repository name</label><input id="cRepo" value="${esc(c.repo)}" placeholder="e.g. Workshop">
  <div class="dlg" style="padding:0"><div class="row2"><div><label>Branch</label><input id="cBranch" value="${esc(c.branch||'main')}"></div>
  <div><label>Personal access token</label><input id="cToken" type="password" value="${esc(c.token)}" placeholder="ghp_…"></div></div></div>
  <div class="note">Token: GitHub → Settings → Developer settings → <b>Fine-grained tokens</b> → your repo → <b>Contents: Read &amp; write</b>. Free, no expiry needed for personal use.</div>
 </div>
 <div class="actions-sec"><button class="btn primary block" data-act="cfgsave">Save setup</button></div>`;
}

function partDialog(pid){
 const isNew=!pid;
 const isTool=kind==='tools';
 const cat=CATS();
 const p=pid?JSON.parse(JSON.stringify(CATALOG()[pid])):{name:'',category:'misc',spec:'',expectedPrice:0,sources:[],alternatives:'',notes:'',icon:''};
 const src0=(p.sources&&p.sources[0])||{shop:'',price:'',url:''};
 const noun=isTool?'tool':'part';
 $('#dlgBody').innerHTML=`<h3>${isNew?'Add '+noun:'Edit '+noun} ${isNew?'':'<span class="pid">'+pid+'</span>'}</h3>
  <label>Name</label><input id="fName" value="${esc(p.name)}">
  <div class="row2"><div><label>Category</label><select id="fCat">${Object.entries(cat).map(([k,v])=>`<option value="${k}"${k===p.category?' selected':''}>${v}</option>`).join('')}</select></div>
  <div><label>Expected price ₹ (each)</label><input id="fPrice" type="number" step="0.1" min="0" value="${p.expectedPrice||0}"></div></div>
  <label>Icon</label>
  <div style="display:flex;align-items:center;gap:10px">
   <div id="fIconPrev" style="width:56px;height:56px;flex:none;display:flex;align-items:center;justify-content:center;border:1px solid currentColor;border-radius:8px;overflow:hidden">${(p.icon&&PICS[p.icon])||CICONS()[p.category]||CICONS().misc}</div>
   <button type="button" class="btn small" id="fIconUpload" title="Upload SVG icon">${ic('upload')}</button>
   <button type="button" class="btn small" id="fIconGen" title="Generate icon with AI">${ic('sparkles')}</button>
   <input type="file" id="fIconFile" accept=".svg,image/svg+xml" style="display:none">
  </div>
  <label>Spec / package</label><input id="fSpec" value="${esc(p.spec||'')}">
  <label>Notes</label><input id="fNotes" value="${esc(p.notes||'')}">
  <div class="row2"><div><label>Shop</label><input id="fShop" value="${esc(src0.shop)}"></div><div><label>Price</label><input id="fSprice" value="${esc(src0.price)}"></div></div>
  <label>Buy link (URL)</label><input id="fUrl" value="${esc(src0.url)}">
  <label>Alternatives (plain text — shown offline)</label><textarea id="fAlt" rows="3">${esc(p.alternatives||'')}</textarea>
  ${isTool?
   `<label class="checkrow"><input id="fHave" type="checkbox" ${pid&&owned(pid)>0?'checked':''}> I have this tool</label>`
   :`<label>Owned in inventory</label><input id="fOwn" type="number" min="0" value="${pid?owned(pid):0}">`}
  <div class="note">${isNew?`New ${noun}s get the next ${PFX()}-code. To attach it to a project's needed-${noun}s list, mention it in that project's chat so I add it to the repo.`:`Edits are saved on this device — press Sync to push them to GitHub. To attach this ${noun} to a project's needed list, do that in the project's chat.`}</div>
  <div class="foot">${isNew?'<span></span>':`<button class="btn" id="fDel" style="color:var(--danger)">Remove</button>`}
   <span><button class="btn" id="fCancel">Cancel</button> <button class="btn primary" id="fSave">Save</button></span></div>`;
 const d=$('#dlg');d.showModal();
 $('#fCancel').onclick=()=>d.close();
 const del=$('#fDel');if(del)del.onclick=()=>{if(confirm(`Remove this ${noun} from the local catalogue?`)){delete CATALOG()[pid];delete INV()[pid];markDirty();d.close();render()}};
 // ---- icon: upload SVG or generate one with AI; either just stages iconState until Save ----
 const iconPrevEl=$('#fIconPrev');
 let iconState={svg:null,changed:false};
 $('#fIconUpload').onclick=()=>$('#fIconFile').click();
 $('#fIconFile').onchange=async e=>{
  const file=e.target.files[0];if(!file)return;
  const text=await file.text();
  if(!/<svg[\s>]/i.test(text)){toast('Not a valid SVG file');return}
  iconState={svg:text,changed:true};
  iconPrevEl.innerHTML=text;
 };
 $('#fIconGen').onclick=async()=>{
  const genBtn=$('#fIconGen');const old=genBtn.innerHTML;genBtn.innerHTML='<span class="spin"></span>';genBtn.disabled=true;
  try{
   const prompt=`Design an icon for this ${noun}.\nName: ${$('#fName').value.trim()||'Unnamed'}\nCategory: ${cat[$('#fCat').value]}\nSpec: ${$('#fSpec').value.trim()||'n/a'}\n`+
    `Follow the icon style guide exactly. Respond with ONLY the raw <svg>...</svg> markup — no explanation, no markdown code fences, no surrounding text.`;
   const r=await fetch(AI_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({system:ICON_GUIDELINES_TEXT||'Generate a clean, simple, monochrome-friendly SVG icon, viewBox "0 0 64 64".',prompt,model:AI_ICON_MODEL})});
   if(!r.ok)throw new Error('request failed ('+r.status+')');
   const data=await r.json();
   const svg=extractSVG(data.text);
   if(!svg)throw new Error("AI didn't return a valid SVG");
   iconState={svg,changed:true};
   iconPrevEl.innerHTML=svg;
   toast('Icon generated — press Save to keep it');
  }catch(e){toast('Icon generation failed: '+e.message)}
  genBtn.innerHTML=old;genBtn.disabled=false;
 };
 $('#fSave').onclick=()=>{
  const npid=pid||nextPid();
  const src=[];const sh=$('#fShop').value.trim();if(sh)src.push({shop:sh,price:$('#fSprice').value.trim(),url:$('#fUrl').value.trim()});
  let iconKey=p.icon||'';
  if(iconState.changed&&iconState.svg){
   iconKey=npid; // the part/tool code doubles as its icon manifest key — simple and guaranteed unique
   const path=`icons/${isTool?'tools':'parts'}/${npid}.svg`;
   PICS[iconKey]=iconState.svg;
   (isTool?ICON_MANIFEST.tools:ICON_MANIFEST.parts)[iconKey]=path;
   S.iconEdits[iconKey]={kind:isTool?'tools':'parts',path,svg:iconState.svg};
  }
  CATALOG()[npid]={name:$('#fName').value.trim()||'Unnamed',category:$('#fCat').value,categoryLabel:cat[$('#fCat').value],
   spec:$('#fSpec').value.trim(),icon:iconKey,expectedPrice:parseFloat($('#fPrice').value)||0,
   sources:src,alternatives:$('#fAlt').value.trim(),notes:$('#fNotes').value.trim()};
  if(isTool){if($('#fHave').checked)INV()[npid]=1;else delete INV()[npid]}
  else{const o=parseInt($('#fOwn').value)||0;if(o>0)INV()[npid]=o;else delete INV()[npid]}
  markDirty();d.close();render();
 };
}
function nextPid(){let m=0;Object.keys(CATALOG()).forEach(k=>{const n=parseInt(k.replace(/\D/g,''));if(n>m)m=n});return PFX()+String(m+1).padStart(4,'0')}
$('#addPart').addEventListener('click',()=>partDialog(null));

/* ================= EXPORT ================= */
$('#copyList').addEventListener('click',()=>{
 const scope=projFilter||'active';
 const buy=partsInScope(scope).filter(pid=>toBuy(pid,scope)>0);
 const noun=kind==='tools'?'TOOLS':'PARTS';
 let txt='🛒 '+noun+' SHOPPING LIST — '+new Date().toLocaleDateString('en-IN')+(projFilter?' ('+projName(projFilter)+')':'')+'\n';
 buy.forEach(pid=>{const p=CATALOG()[pid];const q=toBuy(pid,scope);
  txt+=kind==='tools'
   ?`• ${p.name}${p.expectedPrice?' — ~₹'+p.expectedPrice:''}${p.sources&&p.sources[0]?'  ['+p.sources[0].shop+']':''}\n`
   :`• ${p.name} — buy ${q}${p.expectedPrice?' @ ~₹'+p.expectedPrice+' = ₹'+Math.round(q*p.expectedPrice):' (salvage)'}${p.sources&&p.sources[0]?'  ['+p.sources[0].shop+']':''}\n`});
 txt+='\nTOTAL ≈ ₹'+Math.round(buy.reduce((a,pid)=>a+toBuy(pid,scope)*(CATALOG()[pid].expectedPrice||0),0)).toLocaleString('en-IN');
 (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(()=>toast('Copied shopping list')).catch(()=>{prompt('Copy your list:',txt)});
});
$('#reloadBtn').addEventListener('click',async()=>{const rb=$('#reloadBtn');const ro=rb.innerHTML;rb.innerHTML='<span class="spin"></span>';try{await loadData(true);toast('Data reloaded'+(S.loadedFrom==='cache'?' (cache)':''))}catch(e){toast('Reload failed: '+e.message)}rb.innerHTML=ro;fillProjFilter();render();updateSync()});

/* ================= INIT ================= */
function fillProjFilter(){$('#projFilter').innerHTML='<option value="">All projects</option>'+S.projects.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')}
(async()=>{
 try{await Promise.all([loadData(),loadIconLibrary()])}catch(e){$('#view').innerHTML='<div class="empty">Couldn’t load data files.<br><small>'+esc(e.message)+'</small><br><br>If you opened index.html directly (file://), some browsers block loading the JSON. Use it via GitHub Pages, or a local server.</div>';updateSync();return}
 fillProjFilter();render();updateSync();
 if(S.loadedFrom==='cache')toast('Offline — showing saved data');
})();
