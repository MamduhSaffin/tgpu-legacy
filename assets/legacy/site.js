(() => {
  // Load the original TGPU Legacy homepage behaviour without replacing
  // the Legacy hero with a Learning Hub/social-sharing banner.
  const original = document.createElement('script');
  original.src = 'assets/legacy/site-original.js?v=20260923-banner-fix';
  original.async = false;
  document.head.appendChild(original);
})();
