(() => {
  const form = document.getElementById('downloadForm');
  if (!form) return;
  const status = document.getElementById('formStatus');
  const button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    button.disabled = true;
    status.textContent = 'Inscription en cours…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { Accept: 'application/json' }, signal: controller.signal
      });
      if (!response.ok) throw new Error('Envoi non confirmé');
      status.textContent = 'Votre inscription est confirmée. Vous recevrez les nouvelles de la parution.';
      form.reset();
    } catch (error) {
      status.textContent = 'L’inscription n’a pas pu être confirmée. Vous pouvez réessayer ; l’extrait reste accessible ci-contre.';
    } finally {
      clearTimeout(timeout);
      button.disabled = false;
    }
  });
})();
