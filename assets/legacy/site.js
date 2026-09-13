(() => {
  const isLegacyHome = ['/', '/index.html', '/en.html', '/ar.html'].includes(location.pathname) || /\/(index|en|ar)\.html$/.test(location.pathname);
  if (isLegacyHome) {
    document.title = 'TGPU Legacy | Tok Guru Pulau Ubi';
    document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]').forEach(link => {
      link.href = 'assets/favicon-512.png?v=20260913-heritage';
    });
  }
  const core = document.createElement('script');
  core.src = 'assets/legacy/site-core.js?v=20260913-academy';
  core.defer = true;
  document.head.appendChild(core);
})();
