document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var logoContainer = document.querySelector('.logo-container');
        logoContainer.style.display = 'none';
    }, 3000);

    setTimeout(function() {
        var body = document.querySelector('body');
        body.style.backgroundColor = 'white'; // Устанавливаем основной цвет фона
    }, 6000);
});
