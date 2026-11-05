/* Menu behavior and footer year. No dependencies. */
(function () {
  document.documentElement.classList.remove('no-js');

  var years = document.querySelectorAll('[data-year]');
  for (var i = 0; i < years.length; i++) {
    years[i].textContent = String(new Date().getFullYear());
  }

  var btn = document.querySelector('.menu-btn');
  var panel = document.getElementById('making-menu');
  if (!btn || !panel) return;
  var wrapper = btn.parentNode;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.hidden = !open;
  }
  function isOpen() {
    return btn.getAttribute('aria-expanded') === 'true';
  }

  btn.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  document.addEventListener('click', function (e) {
    if (!wrapper.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      btn.focus();
    }
  });

  wrapper.addEventListener('focusout', function (e) {
    if (e.relatedTarget && !wrapper.contains(e.relatedTarget)) setOpen(false);
  });
})();
