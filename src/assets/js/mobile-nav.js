// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Handle dropdown toggles on mobile
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    dropdownItems.forEach(function(item) {
      const link = item.querySelector('.nav-link');
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          item.classList.toggle('active');
        }
      });
    });
  }
});
