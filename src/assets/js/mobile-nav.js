// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu--mobile');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Handle dropdown toggles on mobile
    const dropdownItems = navMenu.querySelectorAll('.nav-item.has-dropdown');
    dropdownItems.forEach(function(item) {
      const link = item.querySelector('.nav-link');
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          item.classList.toggle('active');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('active') &&
          !navMenu.contains(e.target) &&
          !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when navigating (clicking a link without dropdown)
    const navLinks = navMenu.querySelectorAll('.nav-link:not(.has-dropdown .nav-link), .dropdown-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
