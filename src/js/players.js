let currentIndex = 0;
const players = document.querySelectorAll('.player');
const totalPlayers = players.length;
const visiblePlayers = 4; // Количество видимых игроков

function showPlayers(startIndex) {
    players.forEach(player => player.style.display = 'none');
    for (let i = startIndex; i < startIndex + visiblePlayers; i++) {
        players[i % totalPlayers].style.display = 'block';
    }
}

function rotatePlayers() {
    players.forEach(player => player.classList.add('rotate'));
    setTimeout(() => {
        players.forEach(player => player.classList.remove('rotate'));
    }, 300); // Время анимации в миллисекундах
}

document.getElementById('pnextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalPlayers;
    rotatePlayers();
    showPlayers(currentIndex);
});

document.getElementById('pprevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalPlayers) % totalPlayers;
    rotatePlayers();
    showPlayers(currentIndex);
});

showPlayers(currentIndex);
