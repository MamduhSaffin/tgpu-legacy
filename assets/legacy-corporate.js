const classSectionBookmarks = new Set(['#register', '#pricing', '#faq', '#international', '#ssm']);

function openClassSection() {
  if (classSectionBookmarks.has(location.hash)) {
    location.replace(document.body.dataset.classes + location.hash);
  }
}

openClassSection();
window.addEventListener('hashchange', openClassSection);
