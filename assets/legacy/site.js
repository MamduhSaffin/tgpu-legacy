(() => {
  const isLegacyHome = ['/', '/index.html', '/en.html', '/ar.html'].includes(location.pathname) || /\/(index|en|ar)\.html$/.test(location.pathname);

  const applyOfficialBrand = () => {
    if (!isLegacyHome) return;

    document.title = 'TGPU Legacy | Tok Guru Pulau Ubi';
    document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]').forEach(link => {
      link.href = 'assets/tgpu-logo.png?v=20260913-mainbrand';
    });

    if (!document.getElementById('tgpu-official-brand-style')) {
      const style = document.createElement('style');
      style.id = 'tgpu-official-brand-style';
      style.textContent = `
        .site-header .brand.tgpu-official-brand,
        footer .footer-brand.tgpu-official-brand {
          display:flex !important;
          align-items:center;
          gap:10px;
        }
        .tgpu-official-emblem {
          width:62px;
          height:62px;
          flex:0 0 62px;
          object-fit:contain;
          object-position:center;
          border-radius:0;
          background:transparent;
          box-shadow:none;
        }
        footer .tgpu-official-emblem {
          width:68px;
          height:68px;
          flex-basis:68px;
        }
        @media (max-width:700px) {
          .site-header .brand.tgpu-official-brand { gap:7px; }
          .site-header .tgpu-official-emblem {
            width:52px;
            height:52px;
            flex-basis:52px;
          }
          .site-header .brand-name { font-size:24px; }
          .site-header .brand-name small {
            font-size:11px;
            letter-spacing:1px;
            margin-top:4px;
          }
          footer .tgpu-official-emblem {
            width:58px;
            height:58px;
            flex-basis:58px;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const attach = brand => {
      if (!brand) return;
      const existing = brand.querySelector('.tgpu-official-emblem');
      if (existing) existing.remove();

      const emblem = document.createElement('img');
      emblem.className = 'tgpu-official-emblem';
      emblem.src = 'assets/tgpu-logo.png?v=20260913-mainbrand';
      emblem.alt = 'TGPU Legacy — Tok Guru Pulau Ubi';
      emblem.width = 900;
      emblem.height = 900;
      brand.prepend(emblem);
      brand.classList.add('tgpu-official-brand');
    };

    attach(document.querySelector('.site-header .brand'));
    attach(document.querySelector('footer .footer-brand'));
  };

  const core = document.createElement('script');
  core.src = 'assets/legacy/site-core.js?v=20260913-academy';
  core.defer = true;
  core.addEventListener('load', applyOfficialBrand);
  document.head.appendChild(core);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyOfficialBrand, { once: true });
  } else {
    applyOfficialBrand();
  }
})();
