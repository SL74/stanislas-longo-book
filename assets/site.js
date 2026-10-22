(() => {
  const form = document.getElementById('downloadForm');
  if (!form) return;
  const status = document.getElementById('formStatus');
  const button = form.querySelector('button[type="submit"]');
  const download = document.getElementById('excerptDownload');
  const link = document.getElementById('excerptDownloadLink');
  if (!status || !button || !download || !link) return;
  let submitting = false;
  let registered = false;
  button.disabled = false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting || registered || !form.reportValidity()) return;
    // Whitespace alone must not pass the required first-name field.
    const firstName = form.querySelector('[name="firstName"]');
    if (!firstName.value.trim()) {
      firstName.setCustomValidity('Indiquez votre prénom.');
      firstName.reportValidity();
      firstName.addEventListener('input', () => firstName.setCustomValidity(''), { once: true });
      return;
    }
    firstName.value = firstName.value.trim();
    submitting = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    status.textContent = 'Inscription en cours…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { Accept: 'application/json' }, signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error('Envoi non confirmé');
      registered = true;
      download.hidden = false;
      status.textContent = 'Inscription confirmée. Votre téléchargement démarre. Vous pouvez aussi utiliser le bouton ci-dessous.';
      button.textContent = 'Inscription confirmée';
      form.reset();
      link.focus();
      link.click();
    } catch (error) {
      status.textContent = 'Votre inscription n’a pas pu être confirmée. Vérifiez votre connexion et réessayez : le téléchargement sera disponible après confirmation.';
    } finally {
      clearTimeout(timeout);
      submitting = false;
      form.removeAttribute('aria-busy');
      button.disabled = registered;
    }
  });
})();

(() => {
  document.querySelectorAll('[data-copy-url]').forEach(button => {
    button.addEventListener('click', async () => {
      const output = button.parentElement.querySelector('.copy-status');
      try {
        await navigator.clipboard.writeText(button.dataset.copyUrl);
        output.textContent = 'Lien copié.';
      } catch (_) {
        output.textContent = 'Le lien figure dans la barre d’adresse.';
      }
    });
  });
})();

