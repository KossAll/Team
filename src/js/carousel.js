document.addEventListener('DOMContentLoaded', function() {
    const newsCarousel = document.getElementById('newsCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function showNews(index) {
        const newsItems = document.querySelectorAll('.news');
        newsItems.forEach(item => item.style.transform = `translateX(-${index * 100}%)`);
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = newsCarousel.children.length - 1;
        }
        showNews(currentIndex);
    }

    function nextSlide() {
        if (currentIndex < newsCarousel.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showNews(currentIndex);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    function showDetails(index) {
        const newsItems = document.querySelectorAll('.news');
        const newsItem = newsItems[index];
        const content = newsItem.innerHTML;
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-btn');
        closeBtn.innerText = 'Закрыть';
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
        overlay.appendChild(closeBtn);

        const detailsContent = document.createElement('div'); // Обертка для контента новости
        detailsContent.classList.add('details-content');
        detailsContent.innerHTML = content;
        overlay.appendChild(detailsContent);

        const detailsBtn = overlay.querySelector('.details-btn');
        detailsBtn.style.visibility = 'hidden'; // Скрываем кнопку "Детали"
    }

    window.showDetails = showDetails; // Добавляем функцию showDetails в глобальную область видимости
});
