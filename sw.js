const C='enem-treino-v2',F='treino-enem.html';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./',F])));self.skipWaiting()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(new URL(e.request.url).origin===location.origin){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp))}return res}).catch(()=>caches.match(F))))});
