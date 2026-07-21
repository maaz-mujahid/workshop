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
chevright:'<path d="m9 18 6-6-6-6"/>',chevleft:'<path d="m15 18-6-6 6-6"/>'};
const ic=n=>'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+IC[n]+'</svg>';
const PICS={
esp32:'<svg viewBox="0 0 64 64"><rect x="12" y="4" width="40" height="56" rx="3" fill="#1a1a2e"/><g fill="#d4af37"><rect x="8" y="8" width="4" height="3"/><rect x="8" y="14" width="4" height="3"/><rect x="8" y="20" width="4" height="3"/><rect x="8" y="26" width="4" height="3"/><rect x="8" y="32" width="4" height="3"/><rect x="8" y="38" width="4" height="3"/><rect x="8" y="44" width="4" height="3"/><rect x="52" y="8" width="4" height="3"/><rect x="52" y="14" width="4" height="3"/><rect x="52" y="20" width="4" height="3"/><rect x="52" y="26" width="4" height="3"/><rect x="52" y="32" width="4" height="3"/><rect x="52" y="38" width="4" height="3"/><rect x="52" y="44" width="4" height="3"/></g><rect x="18" y="6" width="28" height="24" rx="2" fill="#b8bfc6"/><rect x="20" y="8" width="24" height="20" fill="#9aa3ab"/><path d="M22 6 v-3 h20" stroke="#c8a848" fill="none"/><rect x="26" y="52" width="12" height="8" rx="1" fill="#8f969c"/><rect x="16" y="36" width="8" height="6" rx="1" fill="#333"/><rect x="40" y="36" width="8" height="6" rx="1" fill="#333"/><circle cx="32" cy="44" r="2" fill="#e74c3c"/></svg>',
mini560:'<svg viewBox="0 0 64 64"><rect x="10" y="16" width="44" height="32" rx="3" fill="#14532d"/><circle cx="24" cy="32" r="9" fill="#4b5563"/><circle cx="24" cy="32" r="5" fill="#6b7280"/><rect x="38" y="24" width="12" height="10" rx="1" fill="#111"/><rect x="38" y="38" width="10" height="5" rx="1" fill="#b45309"/><g fill="#d4af37"><circle cx="14" cy="20" r="2"/><circle cx="50" cy="20" r="2"/><circle cx="14" cy="44" r="2"/><circle cx="50" cy="44" r="2"/></g></svg>',
b0505s:'<svg viewBox="0 0 64 64"><rect x="10" y="18" width="44" height="28" rx="3" fill="#1e5aa8"/><rect x="10" y="18" width="44" height="10" rx="3" fill="#2469c2"/><text x="32" y="36" font-size="7" text-anchor="middle" fill="#fff" font-family="sans-serif" font-weight="bold">HLK-B0505S</text><text x="32" y="43" font-size="5" text-anchor="middle" fill="#bcd6f2" font-family="sans-serif">2WR3</text><g fill="#c0c0c0"><rect x="16" y="46" width="2" height="8"/><rect x="24" y="46" width="2" height="8"/><rect x="40" y="46" width="2" height="8"/><rect x="46" y="46" width="2" height="8"/></g></svg>',
adum:'<svg viewBox="0 0 64 64"><rect x="14" y="20" width="36" height="24" rx="2" fill="#111827"/><circle cx="20" cy="26" r="2" fill="#6b7280"/><text x="32" y="34" font-size="6" text-anchor="middle" fill="#d1d5db" font-family="sans-serif">ADuM</text><text x="32" y="41" font-size="6" text-anchor="middle" fill="#d1d5db" font-family="sans-serif">1201</text><g fill="#c0c0c0"><rect x="18" y="14" width="4" height="6"/><rect x="27" y="14" width="4" height="6"/><rect x="36" y="14" width="4" height="6"/><rect x="45" y="14" width="4" height="6"/><rect x="18" y="44" width="4" height="6"/><rect x="27" y="44" width="4" height="6"/><rect x="36" y="44" width="4" height="6"/><rect x="45" y="44" width="4" height="6"/></g></svg>',
sop8:'<svg viewBox="0 0 64 64"><rect x="14" y="12" width="36" height="40" rx="3" fill="#166534"/><g fill="#d4af37"><circle cx="20" cy="18" r="2"/><circle cx="28" cy="18" r="2"/><circle cx="36" cy="18" r="2"/><circle cx="44" cy="18" r="2"/><circle cx="20" cy="46" r="2"/><circle cx="28" cy="46" r="2"/><circle cx="36" cy="46" r="2"/><circle cx="44" cy="46" r="2"/><rect x="18" y="26" width="6" height="3"/><rect x="18" y="32" width="6" height="3"/><rect x="40" y="26" width="6" height="3"/><rect x="40" y="32" width="6" height="3"/></g></svg>',
tvs:'<svg viewBox="0 0 64 64"><rect x="18" y="24" width="28" height="16" rx="2" fill="#111"/><rect x="12" y="27" width="6" height="10" fill="#c0c0c0"/><rect x="46" y="27" width="6" height="10" fill="#c0c0c0"/><rect x="20" y="26" width="5" height="12" fill="#444"/><text x="34" y="35" font-size="6" text-anchor="middle" fill="#aaa" font-family="sans-serif">SMBJ</text></svg>',
schottky:'<svg viewBox="0 0 64 64"><line x1="4" y1="32" x2="60" y2="32" stroke="#888" stroke-width="3"/><rect x="20" y="24" width="24" height="16" rx="3" fill="#111"/><rect x="24" y="24" width="4" height="16" fill="#e5e7eb"/></svg>',
polyfuse:'<svg viewBox="0 0 64 64"><ellipse cx="32" cy="28" rx="16" ry="14" fill="#facc15" stroke="#ca8a04" stroke-width="2"/><text x="32" y="31" font-size="7" text-anchor="middle" fill="#713f12" font-family="sans-serif">020</text><line x1="26" y1="42" x2="26" y2="58" stroke="#888" stroke-width="2.5"/><line x1="38" y1="42" x2="38" y2="58" stroke="#888" stroke-width="2.5"/></svg>',
cap470:'<svg viewBox="0 0 64 64"><rect x="20" y="10" width="24" height="38" rx="4" fill="#1f2937"/><rect x="20" y="10" width="24" height="8" rx="4" fill="#374151"/><rect x="30" y="12" width="4" height="34" fill="#f5c518" opacity=".25"/><text x="32" y="32" font-size="7" text-anchor="middle" fill="#f5c518" font-family="sans-serif">470µ</text><line x1="27" y1="48" x2="27" y2="60" stroke="#888" stroke-width="2.5"/><line x1="37" y1="48" x2="37" y2="56" stroke="#888" stroke-width="2.5"/></svg>',
mlcc:'<svg viewBox="0 0 64 64"><rect x="18" y="26" width="28" height="14" rx="2" fill="#c8a165"/><rect x="14" y="25" width="7" height="16" fill="#c0c0c0"/><rect x="43" y="25" width="7" height="16" fill="#c0c0c0"/></svg>',
r1k:'<svg viewBox="0 0 64 64"><line x1="2" y1="32" x2="62" y2="32" stroke="#888" stroke-width="2.5"/><rect x="18" y="24" width="28" height="16" rx="7" fill="#e8d5b0"/><rect x="23" y="24" width="3" height="16" fill="#8b4513"/><rect x="29" y="24" width="3" height="16" fill="#111"/><rect x="35" y="24" width="3" height="16" fill="#e63c2f"/><rect x="41" y="24" width="3" height="16" fill="#d4af37"/></svg>',
led3mm:'<svg viewBox="0 0 64 64"><path d="M24 26 a8 8 0 0 1 16 0 v10 h-16 z" fill="#ef4444" opacity=".85"/><rect x="22" y="36" width="20" height="3" fill="#fca5a5"/><line x1="28" y1="39" x2="28" y2="58" stroke="#888" stroke-width="2"/><line x1="36" y1="39" x2="36" y2="52" stroke="#888" stroke-width="2"/><circle cx="30" cy="24" r="2.5" fill="#fff" opacity=".7"/></svg>',
header:'<svg viewBox="0 0 64 64"><rect x="8" y="28" width="48" height="10" fill="#111"/><g fill="#d4af37"><rect x="11" y="16" width="3" height="34"/><rect x="19" y="16" width="3" height="34"/><rect x="27" y="16" width="3" height="34"/><rect x="35" y="16" width="3" height="34"/><rect x="43" y="16" width="3" height="34"/><rect x="51" y="16" width="3" height="34"/></g></svg>',
jst10:'<svg viewBox="0 0 64 64"><rect x="8" y="22" width="48" height="16" rx="2" fill="#f3f4f6" stroke="#9ca3af"/><g><rect x="11" y="26" width="3" height="8" fill="#d4af37"/><rect x="16" y="26" width="3" height="8" fill="#d4af37"/><rect x="21" y="26" width="3" height="8" fill="#d4af37"/><rect x="26" y="26" width="3" height="8" fill="#d4af37"/><rect x="31" y="26" width="3" height="8" fill="#d4af37"/><rect x="36" y="26" width="3" height="8" fill="#d4af37"/><rect x="41" y="26" width="3" height="8" fill="#d4af37"/><rect x="46" y="26" width="3" height="8" fill="#d4af37"/></g><g stroke-width="2.5" fill="none"><path d="M12 38 q0 12 4 18" stroke="#e63c2f"/><path d="M20 38 q0 12 2 18" stroke="#f59e0b"/><path d="M28 38 q0 12 0 18" stroke="#16a34a"/><path d="M36 38 q0 12 -2 18" stroke="#2563eb"/><path d="M44 38 q0 12 -4 18" stroke="#111"/></g></svg>',
protopcb:'<svg viewBox="0 0 64 64"><rect x="8" y="10" width="48" height="44" rx="3" fill="#15803d"/><g fill="#d4af37">'+Array.from({length:5},(_,r)=>Array.from({length:6},(_,c)=>`<circle cx="${15+c*7}" cy="${17+r*7}" r="1.6"/>`).join('')).join('')+'</g></svg>',
ipbox:'<svg viewBox="0 0 64 64"><rect x="8" y="14" width="48" height="36" rx="5" fill="#d1d5db" stroke="#9ca3af" stroke-width="2"/><rect x="14" y="20" width="36" height="24" rx="3" fill="#e5e7eb"/><circle cx="13" cy="19" r="2" fill="#6b7280"/><circle cx="51" cy="19" r="2" fill="#6b7280"/><circle cx="13" cy="45" r="2" fill="#6b7280"/><circle cx="51" cy="45" r="2" fill="#6b7280"/></svg>',
vs1838:'<svg viewBox="0 0 64 64"><rect x="18" y="14" width="28" height="24" rx="4" fill="#111"/><circle cx="32" cy="26" r="8" fill="#2d1b4e"/><circle cx="30" cy="24" r="2.5" fill="#6d4aa8" opacity=".8"/><line x1="24" y1="38" x2="24" y2="58" stroke="#888" stroke-width="2"/><line x1="32" y1="38" x2="32" y2="54" stroke="#888" stroke-width="2"/><line x1="40" y1="38" x2="40" y2="58" stroke="#888" stroke-width="2"/></svg>',
irtx:'<svg viewBox="0 0 64 64"><rect x="12" y="24" width="40" height="26" rx="3" fill="#1e5aa8"/><path d="M28 18 a6 6 0 0 1 12 0 v6 h-12 z" fill="#dbeafe" opacity=".9" stroke="#93c5fd"/><g fill="#d4af37"><rect x="18" y="52" width="3" height="8"/><rect x="30" y="52" width="3" height="8"/><rect x="42" y="52" width="3" height="8"/></g><g stroke="#f87171" stroke-width="2"><line x1="44" y1="14" x2="48" y2="10"/><line x1="46" y1="20" x2="52" y2="18"/></g></svg>',
'2n2222':'<svg viewBox="0 0 64 64"><path d="M18 14 h28 v18 a14 14 0 0 1 -28 0 z" fill="#1f2937"/><rect x="18" y="14" width="28" height="6" fill="#111"/><line x1="24" y1="44" x2="22" y2="60" stroke="#888" stroke-width="2"/><line x1="32" y1="46" x2="32" y2="60" stroke="#888" stroke-width="2"/><line x1="40" y1="44" x2="42" y2="60" stroke="#888" stroke-width="2"/></svg>',
am312:'<svg viewBox="0 0 64 64"><rect x="14" y="34" width="36" height="16" rx="2" fill="#166534"/><g fill="#d4af37"><rect x="20" y="50" width="2" height="8"/><rect x="31" y="50" width="2" height="8"/><rect x="42" y="50" width="2" height="8"/></g><circle cx="32" cy="26" r="14" fill="#fdfdfb" stroke="#d6d3c8"/><circle cx="32" cy="26" r="10" fill="#f4f2ea"/><circle cx="28" cy="22" r="3" fill="#fff" opacity=".8"/></svg>',
tp4056:'<svg viewBox="0 0 64 64"><rect x="10" y="16" width="44" height="32" rx="3" fill="#b91c1c"/><rect x="26" y="10" width="12" height="8" rx="2" fill="#9ca3af"/><rect x="28" y="12" width="8" height="4" fill="#4b5563"/><rect x="20" y="26" width="12" height="10" rx="1" fill="#111"/><circle cx="42" cy="26" r="2.5" fill="#3b82f6"/><circle cx="42" cy="34" r="2.5" fill="#ef4444"/><g fill="#d4af37"><circle cx="14" cy="44" r="2"/><circle cx="50" cy="44" r="2"/><circle cx="14" cy="20" r="2"/><circle cx="50" cy="20" r="2"/></g></svg>',
ao3400:'<svg viewBox="0 0 64 64"><rect x="22" y="22" width="20" height="16" rx="2" fill="#111827"/><text x="32" y="32" font-size="5" text-anchor="middle" fill="#9ca3af" font-family="sans-serif">A19T</text><rect x="25" y="38" width="4" height="6" fill="#c0c0c0"/><rect x="35" y="38" width="4" height="6" fill="#c0c0c0"/><rect x="30" y="16" width="4" height="6" fill="#c0c0c0"/></svg>',
bc547:'<svg viewBox="0 0 64 64"><path d="M18 14 h28 v18 a14 14 0 0 1 -28 0 z" fill="#1f2937"/><text x="32" y="30" font-size="6" text-anchor="middle" fill="#9ca3af" font-family="sans-serif">BC547</text><line x1="24" y1="44" x2="22" y2="60" stroke="#888" stroke-width="2"/><line x1="32" y1="46" x2="32" y2="60" stroke="#888" stroke-width="2"/><line x1="40" y1="44" x2="42" y2="60" stroke="#888" stroke-width="2"/></svg>',
gl5516:'<svg viewBox="0 0 64 64"><circle cx="32" cy="28" r="15" fill="#f0d9b5" stroke="#b45309" stroke-width="2"/><path d="M20 24 h24 M20 28 h24 M20 32 h24" stroke="#b45309" stroke-width="2" fill="none"/><path d="M22 22 v12 M28 20 v16 M34 20 v16 M40 22 v12" stroke="#f0d9b5" stroke-width="1.5"/><line x1="26" y1="43" x2="26" y2="58" stroke="#888" stroke-width="2"/><line x1="38" y1="43" x2="38" y2="58" stroke="#888" stroke-width="2"/></svg>',
wled:'<svg viewBox="0 0 64 64"><path d="M20 28 a12 9 0 0 1 24 0 v6 h-24 z" fill="#fbbf24" opacity=".85"/><rect x="18" y="34" width="28" height="3" fill="#fde68a"/><circle cx="27" cy="24" r="3" fill="#fff" opacity=".8"/><line x1="27" y1="37" x2="27" y2="58" stroke="#888" stroke-width="2"/><line x1="37" y1="37" x2="37" y2="52" stroke="#888" stroke-width="2"/><g stroke="#fbbf24" stroke-width="2"><line x1="48" y1="16" x2="52" y2="12"/><line x1="50" y1="24" x2="56" y2="22"/><line x1="14" y1="16" x2="10" y2="12"/></g></svg>',
rm065:'<svg viewBox="0 0 64 64"><rect x="14" y="16" width="36" height="34" rx="4" fill="#1e5aa8"/><circle cx="32" cy="30" r="10" fill="#f3f4f6"/><path d="M26 30 h12 M32 24 v12" stroke="#6b7280" stroke-width="3"/><text x="32" y="47" font-size="6" text-anchor="middle" fill="#bcd6f2" font-family="sans-serif">104</text><g fill="#c0c0c0"><rect x="20" y="50" width="3" height="8"/><rect x="30" y="50" width="3" height="8"/><rect x="40" y="50" width="3" height="8"/></g></svg>',
slide:'<svg viewBox="0 0 64 64"><rect x="10" y="24" width="44" height="16" rx="2" fill="#c0c7ce" stroke="#8b949c"/><rect x="14" y="18" width="14" height="12" rx="1" fill="#111"/><g fill="#d4af37"><rect x="16" y="40" width="2.5" height="10"/><rect x="30" y="40" width="2.5" height="10"/><rect x="44" y="40" width="2.5" height="10"/></g></svg>',
perf28:'<svg viewBox="0 0 64 64"><rect x="6" y="20" width="52" height="24" rx="2" fill="#b45309"/><g fill="#d4af37">'+Array.from({length:3},(_,r)=>Array.from({length:8},(_,c)=>`<circle cx="${11+c*6}" cy="${26+r*6}" r="1.4"/>`).join('')).join('')+'</g></svg>',
jst2:'<svg viewBox="0 0 64 64"><rect x="20" y="18" width="24" height="18" rx="2" fill="#f3f4f6" stroke="#9ca3af"/><rect x="25" y="22" width="4" height="9" fill="#d4af37"/><rect x="35" y="22" width="4" height="9" fill="#d4af37"/><path d="M27 36 q0 12 -3 20" stroke="#e63c2f" stroke-width="3" fill="none"/><path d="M37 36 q0 12 3 20" stroke="#111" stroke-width="3" fill="none"/></svg>',
rnl:'<svg viewBox="0 0 64 64"><g transform="rotate(-15 32 32)"><line x1="4" y1="26" x2="60" y2="26" stroke="#888" stroke-width="2"/><rect x="18" y="19" width="28" height="14" rx="6" fill="#e8d5b0"/><rect x="23" y="19" width="3" height="14" fill="#2563eb"/><rect x="29" y="19" width="3" height="14" fill="#6b7280"/><rect x="35" y="19" width="3" height="14" fill="#111"/></g><g transform="rotate(10 32 44)"><line x1="4" y1="44" x2="60" y2="44" stroke="#888" stroke-width="2"/><rect x="18" y="37" width="28" height="14" rx="6" fill="#e8d5b0"/><rect x="23" y="37" width="3" height="14" fill="#facc15"/><rect x="29" y="37" width="3" height="14" fill="#7c3aed"/><rect x="35" y="37" width="3" height="14" fill="#e63c2f"/></g></svg>',
'18650':'<svg viewBox="0 0 64 64"><rect x="22" y="8" width="20" height="48" rx="5" fill="#1d4ed8"/><rect x="22" y="8" width="20" height="9" rx="5" fill="#374151"/><rect x="28" y="4" width="8" height="5" rx="2" fill="#9ca3af"/><text x="32" y="38" font-size="7" text-anchor="middle" fill="#bfdbfe" font-family="sans-serif" transform="rotate(-90 32 36)">18650</text></svg>',
ld2410:'<svg viewBox="0 0 64 64"><rect x="14" y="8" width="36" height="48" rx="3" fill="#15803d"/><rect x="18" y="12" width="28" height="10" rx="1" fill="#e5e7eb"/><rect x="18" y="26" width="28" height="10" rx="1" fill="#e5e7eb"/><rect x="22" y="40" width="20" height="10" rx="1" fill="#111"/><g fill="#d4af37"><circle cx="19" cy="53" r="1.5"/><circle cx="25" cy="53" r="1.5"/><circle cx="39" cy="53" r="1.5"/><circle cx="45" cy="53" r="1.5"/></g></svg>',
relay2:'<svg viewBox="0 0 64 64"><rect x="6" y="14" width="52" height="38" rx="3" fill="#15803d"/><rect x="10" y="18" width="18" height="22" rx="2" fill="#1e5aa8"/><rect x="34" y="18" width="18" height="22" rx="2" fill="#1e5aa8"/><text x="19" y="31" font-size="5" text-anchor="middle" fill="#fff" font-family="sans-serif">SRD-05</text><text x="43" y="31" font-size="5" text-anchor="middle" fill="#fff" font-family="sans-serif">SRD-05</text><g fill="#2dd4bf"><rect x="10" y="44" width="18" height="5" rx="1"/><rect x="34" y="44" width="18" height="5" rx="1"/></g></svg>',
pm05:'<svg viewBox="0 0 64 64"><rect x="8" y="16" width="48" height="32" rx="3" fill="#1e5aa8"/><rect x="8" y="16" width="48" height="12" rx="3" fill="#2469c2"/><text x="32" y="35" font-size="8" text-anchor="middle" fill="#fff" font-family="sans-serif" font-weight="bold">HLK-PM05</text><text x="32" y="43" font-size="5" text-anchor="middle" fill="#bcd6f2" font-family="sans-serif">220V → 5V 1A</text><g fill="#c0c0c0"><rect x="14" y="48" width="3" height="8"/><rect x="24" y="48" width="3" height="8"/><rect x="38" y="48" width="3" height="8"/><rect x="48" y="48" width="3" height="8"/></g></svg>',
esp32c3:'<svg viewBox="0 0 64 64"><rect x="18" y="10" width="28" height="44" rx="3" fill="#1a1a2e"/><g fill="#d4af37"><rect x="14" y="16" width="4" height="3"/><rect x="14" y="23" width="4" height="3"/><rect x="14" y="30" width="4" height="3"/><rect x="14" y="37" width="4" height="3"/><rect x="46" y="16" width="4" height="3"/><rect x="46" y="23" width="4" height="3"/><rect x="46" y="30" width="4" height="3"/><rect x="46" y="37" width="4" height="3"/></g><rect x="24" y="14" width="16" height="14" rx="1" fill="#b8bfc6"/><rect x="24" y="46" width="16" height="8" rx="1" fill="#8f969c"/><circle cx="32" cy="36" r="2" fill="#3b82f6"/></svg>',
fuse1a:'<svg viewBox="0 0 64 64"><rect x="8" y="26" width="10" height="12" rx="2" fill="#c0c0c0"/><rect x="46" y="26" width="10" height="12" rx="2" fill="#c0c0c0"/><rect x="18" y="27" width="28" height="10" rx="2" fill="#e0f2fe" opacity=".85" stroke="#bae6fd"/><path d="M20 32 q6 -4 12 0 t12 0" stroke="#78716c" stroke-width="1.5" fill="none"/></svg>',
usbpig:'<svg viewBox="0 0 64 64"><rect x="6" y="24" width="18" height="16" rx="2" fill="#9ca3af"/><rect x="9" y="28" width="12" height="8" fill="#4b5563"/><rect x="24" y="27" width="8" height="10" fill="#374151"/><path d="M32 32 q14 0 16 -6 t10 -4" stroke="#111" stroke-width="4" fill="none"/></svg>'
};
PICS.esp32p=PICS.esp32; PICS.jbox=PICS.ipbox; PICS.mlcc2=PICS.mlcc;

/* ================= STATE ================= */
const LS='ws-state-v1';
let S={parts:{},tools:{},projects:[],boms:{},toolBoms:{},inv:{},toolInv:{},cfg:{owner:'',repo:'',branch:'main',token:''},dirty:false,loadedFrom:''};
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

function saveLocal(){localStorage.setItem(LS,JSON.stringify({inv:S.inv,toolInv:S.toolInv,cfg:S.cfg,dirty:S.dirty,cache:{parts:S.parts,tools:S.tools,projects:S.projects,boms:S.boms,toolBoms:S.toolBoms}}))}
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
  const [parts,tools,projList]=await Promise.all([fetchJSON('data/parts.json'),fetchJSON('data/tools.json'),fetchJSON('data/projects.json')]);
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
 let n=0;const boms=BOMS(),key=IKEY();
 for(const p of S.projects){
  if(scope==='active'){if(!ACTIVE.includes(p.status))continue}
  else{if(p.id!==scope)continue}
  const item=(boms[p.id]||[]).find(b=>b[key]===pid);
  if(item)n+=item.qty;
 }
 return n;
}
const owned=pid=>INV()[pid]||0;
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
 const need=needFor(pid,scope==='active'?'active':scope), nb=Math.max(0,need-owned(pid));
 const boms=BOMS(),key=IKEY();
 const projChips=S.projects.filter(pr=>(boms[pr.id]||[]).some(b=>b[key]===pid)).map(pr=>{const q=(boms[pr.id]||[]).find(b=>b[key]===pid).qty;return `<span class="chip proj">${esc(pr.name)} ×${q}</span>`}).join('');
 return `<div class="card" data-pid="${pid}">
  <div class="thumb">${bigPic(p)}</div>
  <div class="body">
   <div class="name">${esc(p.name)}<span class="pid">${pid}</span><button class="edit-ic" data-act="edit" title="Edit">${ic('pencil')}</button></div>
   <div class="desc">${esc(p.spec||'')}${p.notes?' — '+esc(p.notes):''}</div>
   <div class="chips"><span class="chip">${CATS()[p.category]}</span>${projChips}</div>
   <div class="qtyrow"><span>Need <b>${need}</b></span><span>In stock <b>${owned(pid)}</b></span></div>
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
  v.innerHTML=(buy.length?`<div class="section-total"><span>${buy.length} items · ${esc(scopeLbl)}</span><span>expected ${rup(total)}</span></div>`:'')+
   (buy.map(pid=>partCard(pid,scope)).join('')||`<div class="empty">Nothing to buy for this scope — all ${kind} covered.</div>`);
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
 const ownedT=tid=>S.toolInv[tid]||0;
 const need=tbom.reduce((a,b)=>a+b.qty,0);
 const have=tbom.reduce((a,b)=>a+Math.min(b.qty,ownedT(b.toolId)),0);
 const missing=tbom.filter(b=>ownedT(b.toolId)<b.qty).length;
 return {tbom,need,have,missing};
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
 const {tbom}=projToolStats(pr);
 const ownedT=tid=>S.toolInv[tid]||0;
 const toolRows=tbom.map(b=>{const t=S.tools[b.toolId]||{name:b.toolId};const short=Math.max(0,b.qty-ownedT(b.toolId));
   return `<tr><td>${esc(t.name)} <span class="pid">${b.toolId}</span></td><td class="n">${b.qty}</td><td class="n">${ownedT(b.toolId)}</td><td class="n">${short>0?'<b style="color:var(--orange)">'+short+'</b>':'<span style="color:var(--green)">✓</span>'}</td></tr>`}).join('');
 const toolsSection=tbom.length?`<div class="section"><div class="section-h">Tools needed</div>
   <table class="ptable"><tr><th>Tool</th><th class="n">Need</th><th class="n">Own</th><th class="n">Buy</th></tr>${toolRows}</table>
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

/* ================= ALTERNATIVES (offline, from catalogue) ================= */
function showAlt(box,pid){
 const p=CATALOG()[pid];
 box.classList.toggle('show');
 if(!box.classList.contains('show'))return;
 let html=`<b>Alternatives for ${esc(p.name)}:</b><br>${esc(p.alternatives||'No alternatives noted yet — add some via ✎ edit, or ask in the project chat.')}`;
 if(p.sources&&p.sources.length)html+=`<br><br><b>Where to buy:</b> ${srcHtml(p)}`;
 box.innerHTML=html;
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
 $('#syncBtn').title=ready?'Push inventory + statuses to GitHub':(!on?'Offline':'Add repo + token in Setup first');
}
async function ghPut(path,obj,message){
 const base=`https://api.github.com/repos/${S.cfg.owner}/${S.cfg.repo}/contents/${path}`;
 const h={'Authorization':'Bearer '+S.cfg.token,'Accept':'application/vnd.github+json'};
 const content=b64(JSON.stringify(obj,null,2));
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
async function syncGitHub(){
 const btn=$('#syncBtn');btn.disabled=true;const old=btn.innerHTML;btn.innerHTML='<span class="spin"></span>';
 try{
  await ghPut('data/inventory.json',{schema:'inventory/v2',updated:new Date().toISOString().slice(0,10),note:'Physical stock only. App-owned file.',stock:S.inv},'Update inventory');
  await ghPut('data/tools-inventory.json',{schema:'tools-inventory/v1',updated:new Date().toISOString().slice(0,10),note:'Physical tool stock only. App-owned file.',stock:S.toolInv},'Update tools inventory');
  // push any changed statuses
  for(const pr of S.projects){
   await ghPut('projects/'+pr.id+'/project.json',pr,'Update '+pr.id+' status → '+pr.status);
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
  <label>Spec / package</label><input id="fSpec" value="${esc(p.spec||'')}">
  <label>Notes</label><input id="fNotes" value="${esc(p.notes||'')}">
  <div class="row2"><div><label>Shop</label><input id="fShop" value="${esc(src0.shop)}"></div><div><label>Price</label><input id="fSprice" value="${esc(src0.price)}"></div></div>
  <label>Buy link (URL)</label><input id="fUrl" value="${esc(src0.url)}">
  <label>Alternatives (plain text — shown offline)</label><textarea id="fAlt" rows="3">${esc(p.alternatives||'')}</textarea>
  <label>Owned in inventory</label><input id="fOwn" type="number" min="0" value="${pid?owned(pid):0}">
  <div class="note">${isNew?`New ${noun}s get the next ${PFX()}-code. To attach it to a project's needed-${noun}s list, mention it in that project's chat so I add it to the repo.`:`Edits are saved on this device; press Sync to push name/price/alt changes… note: only inventory + status sync automatically. Catalogue edits are best done in the project chat so they live in GitHub.`}</div>
  <div class="foot">${isNew?'<span></span>':`<button class="btn" id="fDel" style="color:var(--danger)">Remove</button>`}
   <span><button class="btn" id="fCancel">Cancel</button> <button class="btn primary" id="fSave">Save</button></span></div>`;
 const d=$('#dlg');d.showModal();
 $('#fCancel').onclick=()=>d.close();
 const del=$('#fDel');if(del)del.onclick=()=>{if(confirm(`Remove this ${noun} from the local catalogue?`)){delete CATALOG()[pid];delete INV()[pid];markDirty();d.close();render()}};
 $('#fSave').onclick=()=>{
  const npid=pid||nextPid();
  const src=[];const sh=$('#fShop').value.trim();if(sh)src.push({shop:sh,price:$('#fSprice').value.trim(),url:$('#fUrl').value.trim()});
  CATALOG()[npid]={name:$('#fName').value.trim()||'Unnamed',category:$('#fCat').value,categoryLabel:cat[$('#fCat').value],
   spec:$('#fSpec').value.trim(),icon:p.icon||'',expectedPrice:parseFloat($('#fPrice').value)||0,
   sources:src,alternatives:$('#fAlt').value.trim(),notes:$('#fNotes').value.trim()};
  const o=parseInt($('#fOwn').value)||0;if(o>0)INV()[npid]=o;else delete INV()[npid];
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
  txt+=`• ${p.name} — buy ${q}${p.expectedPrice?' @ ~₹'+p.expectedPrice+' = ₹'+Math.round(q*p.expectedPrice):' (salvage)'}${p.sources&&p.sources[0]?'  ['+p.sources[0].shop+']':''}\n`});
 txt+='\nTOTAL ≈ ₹'+Math.round(buy.reduce((a,pid)=>a+toBuy(pid,scope)*(CATALOG()[pid].expectedPrice||0),0)).toLocaleString('en-IN');
 (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(()=>toast('Copied shopping list')).catch(()=>{prompt('Copy your list:',txt)});
});
$('#reloadBtn').addEventListener('click',async()=>{const rb=$('#reloadBtn');const ro=rb.innerHTML;rb.innerHTML='<span class="spin"></span>';try{await loadData(true);toast('Data reloaded'+(S.loadedFrom==='cache'?' (cache)':''))}catch(e){toast('Reload failed: '+e.message)}rb.innerHTML=ro;fillProjFilter();render();updateSync()});

/* ================= INIT ================= */
function fillProjFilter(){$('#projFilter').innerHTML='<option value="">All projects</option>'+S.projects.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')}
(async()=>{
 try{await loadData()}catch(e){$('#view').innerHTML='<div class="empty">Couldn’t load data files.<br><small>'+esc(e.message)+'</small><br><br>If you opened index.html directly (file://), some browsers block loading the JSON. Use it via GitHub Pages, or a local server.</div>';updateSync();return}
 fillProjFilter();render();updateSync();
 if(S.loadedFrom==='cache')toast('Offline — showing saved data');
})();
