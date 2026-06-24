(function() {
  // ---------- REVEAL ON SCROLL ----------
  const reveals = document.querySelectorAll('.reveal');
  function checkReveal() {
    const trigger = 0.15;
    reveals.forEach(el => {
      const box = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (box.top < windowHeight * (1 - trigger)) {
        el.classList.add('show');
      }
    });
  }
  window.addEventListener('scroll', checkReveal);
  window.addEventListener('load', checkReveal);

  // ---------- ACTIVE NAV LINK ----------
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  function setActive() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActive);
  window.addEventListener('load', setActive);

  // also update on click (smooth)
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
})();
