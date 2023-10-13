document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        startAnimation();
    }, 10000);

    function startAnimation() {
        const ball = document.querySelector('.ball');
        ball.style.animation = 'roll 7s linear infinite, rotate 2s linear infinite';
        setTimeout(function() {
            ball.style.animation = 'roll 7s linear infinite, rotate 2s linear infinite';
            setTimeout(startAnimation, 10000);
        }, 7000);
    }
});




