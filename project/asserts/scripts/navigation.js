document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const menuIcon = document.querySelector('.menu-icon');

  // Toggle the navigation menu
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
  });

  // Highlight the active page in the navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});