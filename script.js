(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const toast = document.querySelector('.toast');
  let toastTimer;

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

      menuButton.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('open', !isOpen);
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('[data-accordion] button').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const panel = button
        .closest('.faq-item')
        .querySelector('.faq-panel');

      button.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });

  function showToast(message) {
    if (!toast) return;

    clearTimeout(toastTimer);

    toast.textContent = message;
    toast.classList.add('show');

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4200);
  }

  document
    .querySelectorAll('[data-placeholder-action]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();

        const kind = link.dataset.placeholderAction;

        showToast(
          kind === 'quote'
            ? 'Quote button is ready for your Jobber or future booking link.'
            : 'Add your preferred business phone/text details here when ready.'
        );
      });
    });
})();
