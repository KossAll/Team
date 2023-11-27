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
        currentIndex = (currentIndex - 3 + newsCarousel.children.length) % newsCarousel.children.length;
        showNews(currentIndex);
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 3) % newsCarousel.children.length;
        showNews(currentIndex);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    
    function showDetails(index) {
        const newsItems = document.querySelectorAll('.news');
    
        if (index >= 0 && index < newsItems.length) {
            const newsItem = newsItems[index];
    
            if (newsItem) { // Проверяем, существует ли элемент
                const content = newsItem.innerHTML;
                const overlay = document.createElement('div');
                overlay.classList.add('overlay');
                document.body.appendChild(overlay);
    
                const detailsContent = document.createElement('div');
                detailsContent.classList.add('details-content');
                detailsContent.innerHTML = content;
                overlay.appendChild(detailsContent);
    
                const closeBtn = document.createElement('button');
                closeBtn.classList.add('close-btn');
                closeBtn.innerText = 'Back';
                closeBtn.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                });
                overlay.appendChild(closeBtn);
    
                // const detailsBtn = overlay.querySelector('.details-btn');
                // detailsBtn.style.visibility = 'hidden';
    
                function closeOnEsc(event) {
                    if (event.key === 'Escape') {
                        document.body.removeChild(overlay);
                        document.removeEventListener('keydown', closeOnEsc);
                    }
                }
    
                document.addEventListener('keydown', closeOnEsc);
            } else {
                console.error(`Элемент с индексом ${index} не найден.`);
            }
        } else {
            console.error(`Элемент с индексом ${index} не найден.`);
        }
    }
    

    window.showDetails = showDetails;
});
