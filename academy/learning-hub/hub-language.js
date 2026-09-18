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
  const urls={
    ms:isIndex?'./':stem+'.html',
    en:isIndex?'index-en.html':stem+'-en.html',
    ar:isIndex?'index-ar.html':stem+'-ar.html'
  };

  // Keep generic Learning Hub / back-to-hub links in the visitor's current language.
  if (lang !== 'ms') {
    document.querySelectorAll('a[href="./"]').forEach(a => a.setAttribute('href', lang === 'ar' ? 'index-ar.html' : 'index-en.html'));
  }

  const nav=document.querySelector('.nav-links') || document.querySelector('.hub-nav nav') || document.querySelector('header nav');
  if(nav){
    [...nav.querySelectorAll('a')].forEach(a=>{
      const t=(a.textContent||'').trim();
      if(['BM','MS','EN','AR','العربية'].includes(t)) a.remove();
    });
    const switcher=document.createElement('span');
    switcher.className='lang-switch';
    switcher.setAttribute('aria-label', lang==='ar'?'اختيار اللغة':lang==='en'?'Choose language':'Pilih bahasa');
    const labels={ms:'BM',en:'EN',ar:'العربية'};
    ['ms','en','ar'].forEach(code=>{
      const a=document.createElement('a');
      a.href=urls[code];
      a.textContent=labels[code];
      a.lang=code==='ms'?'ms':code;
      a.hreflang=code==='ms'?'ms-MY':code;
      if(code===lang) a.setAttribute('aria-current','page');
      a.addEventListener('click',()=>{try{localStorage.setItem('tgpu-language',code)}catch(_){}});
      switcher.appendChild(a);
    });
    nav.appendChild(switcher);
  }

  const menu=document.querySelector('.hub-menu');
  if(menu){
    if(lang==='ar') menu.textContent='القائمة';
    if(lang==='en') menu.textContent='Menu';
    if(lang==='ms') menu.textContent='Menu';
  }
})();
