document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  menuToggle.addEventListener('click', function () {
    mobileNav.style.display =
      mobileNav.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function (event) {
    const isClickInside =
      mobileNav.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside && mobileNav.style.display === 'block') {
      mobileNav.style.display = 'none';
    }
  });
});
