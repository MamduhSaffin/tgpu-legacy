(() => {
  const replaceHeroWithApprovedBanner = () => {
    const oldHero = document.querySelector('section.hero#home');
    if (!oldHero || document.querySelector('.approved-hero-banner')) return;

    if (!document.getElementById('approved-hero-banner-style')) {
      const style = document.createElement('style');
      style.id = 'approved-hero-banner-style';
      style.textContent = `
        .approved-hero-banner{padding:18px 0;background:#fff}
        .approved-hero-banner .approved-banner-wrap{width:min(1500px,calc(100% - 24px));margin:auto}
        .approved-hero-banner img{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border-radius:24px;box-shadow:0 18px 48px rgba(8,41,30,.15)}
        @media(max-width:700px){.approved-hero-banner{padding:10px 0}.approved-hero-banner .approved-banner-wrap{width:calc(100% - 16px)}.approved-hero-banner img{border-radius:16px}}
      `;
      document.head.appendChild(style);
    }

    const section = document.createElement('section');
    section.className = 'approved-hero-banner';
    section.id = 'home';
    section.setAttribute('aria-label', 'TGPU Learning Hub');
    section.innerHTML = `<div class="approved-banner-wrap"><img src="assets/tgpu-learning-hub-approved-banner.webp?v=20260922-final" width="1200" height="675" alt="TGPU Learning Hub — Knowledge, Education and Community" fetchpriority="high" decoding="async"></div>`;
    oldHero.replaceWith(section);
  };

  const original = document.createElement('script');
  original.src = 'assets/legacy/site-original.js?v=20260922-final';
  original.defer = true;
  original.addEventListener('load', () => requestAnimationFrame(replaceHeroWithApprovedBanner));
  document.head.appendChild(original);
})();
