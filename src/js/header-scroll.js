window.onscroll = function () {
  if (window.screen.width >= 768) {
    scrollY <= 70
      ? document.getElementById('header').classList.remove('header-scroll')
      : document.getElementById('header').classList.add('header-scroll');
  } else {
    scrollY <= 120
      ? document.getElementById('header').classList.remove('header-scroll')
      : document.getElementById('header').classList.add('header-scroll');
  }
};



document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');

  // Проверяем, есть ли сохраненное состояние в localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    if (savedTheme === 'dark-mode') {
      themeToggle.checked = true;
    }
  }

  themeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
    }
  });
});

