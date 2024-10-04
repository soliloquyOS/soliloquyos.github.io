document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });

  document.addEventListener('click', function (event) {
    const isClickInside =
      sidebar.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  });
});
