(() => {
  const html=document.documentElement;
  const path=location.pathname;
  const file=(path.split('/').pop()||'index.html');
  const currentFile=file || 'index.html';
  let lang='ms';
  if(/-en\.html$/i.test(currentFile) || currentFile==='index-en.html') lang='en';
  if(/-ar\.html$/i.test(currentFile) || currentFile==='index-ar.html') lang='ar';
  if(lang==='ar'){html.lang='ar';html.dir='rtl';}
  else if(lang==='en'){html.lang='en';html.dir='ltr';}
  else {html.lang='ms';html.dir='ltr';}

  const stem=currentFile.replace(/\.html$/i,'').replace(/-(en|ar)$/i,'') || 'index';
  const isIndex=stem==='index';
  const urls={ms:isIndex?'./':stem+'.html',en:isIndex?'index-en.html':stem+'-en.html',ar:isIndex?'index-ar.html':stem+'-ar.html'};

  if (lang !== 'ms') document.querySelectorAll('a[href="./"]').forEach(a => a.setAttribute('href', lang === 'ar' ? 'index-ar.html' : 'index-en.html'));

  const nav=document.querySelector('.nav-links') || document.querySelector('.hub-nav nav') || document.querySelector('header nav');
  if(nav){
    [...nav.querySelectorAll('a')].forEach(a=>{const t=(a.textContent||'').trim();if(['BM','MS','EN','AR','العربية'].includes(t)) a.remove();});
    const switcher=document.createElement('span');switcher.className='lang-switch';switcher.setAttribute('aria-label',lang==='ar'?'اختيار اللغة':lang==='en'?'Choose language':'Pilih bahasa');
    const labels={ms:'BM',en:'EN',ar:'العربية'};
    ['ms','en','ar'].forEach(code=>{const a=document.createElement('a');a.href=urls[code];a.textContent=labels[code];a.lang=code==='ms'?'ms':code;a.hreflang=code==='ms'?'ms-MY':code;if(code===lang)a.setAttribute('aria-current','page');a.addEventListener('click',()=>{try{localStorage.setItem('tgpu-language',code)}catch(_){}});switcher.appendChild(a);});nav.appendChild(switcher);
  }

  if(isIndex && !document.querySelector('.tgpu-approved-hero-banner')){
    const main=document.querySelector('main');const firstHero=main&&main.querySelector('.hub-hero,.hero');
    if(main&&firstHero){
      const banner=document.createElement('section');banner.className='tgpu-approved-hero-banner';banner.setAttribute('aria-label','TGPU Learning Hub');banner.innerHTML='<div class="wrap"><img src="../../assets/tgpu-learning-hub-approved-banner.webp" alt="TGPU Learning Hub — Knowledge, Education, Community" width="1200" height="675" fetchpriority="high" decoding="async"></div>';firstHero.before(banner);
      const style=document.createElement('style');style.id='tgpu-approved-hero-banner-style';style.textContent='.tgpu-approved-hero-banner{padding:18px 0 0;background:#f7faf8}.tgpu-approved-hero-banner .wrap{width:min(1500px,calc(100% - 24px));margin:auto}.tgpu-approved-hero-banner img{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border-radius:24px;box-shadow:0 18px 48px rgba(11,40,25,.14)}@media(max-width:700px){.tgpu-approved-hero-banner{padding-top:10px}.tgpu-approved-hero-banner .wrap{width:min(100% - 12px,1500px)}.tgpu-approved-hero-banner img{border-radius:16px}}';document.head.appendChild(style);
    }
  }

  if(isIndex){
    const labels={ms:{heading:'Budaya, Ilmu & Warisan',title:'🇲🇾 Sarong Music Run 2026 — Warisan Hidup',desc:'Catatan asal dari acara: sarong, Boria, tarian pelbagai budaya, keluarga & foto dari lokasi'},en:{heading:'Culture, Knowledge & Heritage',title:'🇲🇾 Sarong Music Run 2026 — Living Heritage',desc:'Original on-location feature: sarong, Boria, multicultural performances, family moments & event photos'},ar:{heading:'الثقافة والمعرفة والتراث',title:'🇲🇾 Sarong Music Run 2026 — تراث حي',desc:'تجربة أصلية من الحدث: السارونغ، Boria، عروض متعددة الثقافات، العائلة وصور من الموقع'}};
    const cfg=labels[lang];const groups=[...document.querySelectorAll('.directory-group,.dir')];const culture=groups.find(group=>{const h=group.querySelector('h2,h3');return h&&(h.textContent||'').trim()===cfg.heading;});
    if(culture&&!culture.querySelector('a[href*="sarong-music-run-2026-living-heritage.html"]')){const holder=culture.querySelector('.directory-links')||culture;const a=document.createElement('a');a.href='sarong-music-run-2026-living-heritage.html';a.className=(culture.classList.contains('directory-group')?'directory-link ':'')+'sarong-feature-link';if(culture.classList.contains('directory-group'))a.innerHTML=`<span><b>${cfg.title}</b><small>${cfg.desc}</small></span><span>→</span>`;else a.innerHTML=`<strong>${cfg.title}</strong><small>${cfg.desc}</small><span aria-hidden="true">→</span>`;holder.prepend(a);}
    if(!document.getElementById('sarong-feature-style')){const style=document.createElement('style');style.id='sarong-feature-style';style.textContent='.sarong-feature-link{background:linear-gradient(135deg,#0f5132,#174c39)!important;color:#fff!important;border:1px solid #d5b76c!important;box-shadow:0 8px 22px rgba(18,61,38,.14)!important}.sarong-feature-link b,.sarong-feature-link strong{color:#fff!important}.sarong-feature-link small{display:block;color:rgba(255,255,255,.78)!important;margin-top:.18rem;line-height:1.38}.sarong-feature-link>span:last-child{color:#efdca8!important}.dir>a.sarong-feature-link{display:grid!important;grid-template-columns:1fr auto;gap:.2rem .8rem;align-items:center;padding:.95rem 1rem!important;margin-bottom:.7rem!important;text-decoration:none}.dir>a.sarong-feature-link small{grid-column:1/2}.dir>a.sarong-feature-link>span{grid-column:2;grid-row:1/3;color:#efdca8;font-weight:900}';document.head.appendChild(style);}
  }

  if(!document.getElementById('tgpu-hub-brand-style')){const style=document.createElement('style');style.id='tgpu-hub-brand-style';style.textContent='.hub-nav .brand img[src*="tgpu-learning-hub-approved.png"]{width:112px!important;height:auto!important;max-width:42vw!important;object-fit:contain!important;object-position:left center!important;border:0!important;border-radius:0!important;background:transparent!important}.hub-nav .brand:has(img[src*="tgpu-learning-hub-approved.png"]) .brand-text{display:none!important}html[lang="ar"] .hub-nav .brand img[src*="tgpu-learning-hub-approved.png"]{object-position:right center!important}@media(max-width:620px){.hub-nav .brand img[src*="tgpu-learning-hub-approved.png"]{width:96px!important;height:auto!important;max-width:52vw!important}}';document.head.appendChild(style);}
  const menu=document.querySelector('.hub-menu');if(menu){if(lang==='ar')menu.textContent='القائمة';if(lang==='en')menu.textContent='Menu';if(lang==='ms')menu.textContent='Menu';}
})();
