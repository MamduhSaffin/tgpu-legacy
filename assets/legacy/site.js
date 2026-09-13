(() => {
  const isLegacyHome = ['/', '/index.html', '/en.html', '/ar.html'].includes(location.pathname) || /\/(index|en|ar)\.html$/.test(location.pathname);

  const applyOfficialBrand = () => {
    if (!isLegacyHome) return;

    document.title = 'TGPU Legacy | Tok Guru Pulau Ubi';
    document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]').forEach(link => {
      link.href = 'assets/favicon-512.png?v=20260913-heritage';
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
          width:54px;
          height:54px;
          flex:0 0 54px;
          object-fit:contain;
          border-radius:50%;
          background:#faf7ef;
          box-shadow:0 2px 8px rgba(20,61,45,.10);
        }
        footer .tgpu-official-emblem {
          width:60px;
          height:60px;
          flex-basis:60px;
        }
        @media (max-width:700px) {
          .site-header .brand.tgpu-official-brand { gap:7px; }
          .site-header .tgpu-official-emblem {
            width:42px;
            height:42px;
            flex-basis:42px;
          }
          .site-header .brand-name { font-size:24px; }
          .site-header .brand-name small {
            font-size:11px;
            letter-spacing:1px;
            margin-top:4px;
          }
          footer .tgpu-official-emblem {
            width:52px;
            height:52px;
            flex-basis:52px;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const attach = brand => {
      if (!brand || brand.querySelector('.tgpu-official-emblem')) return;
      const emblem = document.createElement('img');
      emblem.className = 'tgpu-official-emblem';
      emblem.src = 'assets/favicon-512.png?v=20260913-heritage';
      emblem.alt = 'TGPU Legacy — Tok Guru Pulau Ubi';
      emblem.width = 64;
      emblem.height = 64;
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
