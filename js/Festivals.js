document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-images');
    const carouselDateBtns = document.querySelectorAll('.carousel-date-btn');
    let currentIndex = 0;

    carouselDateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentIndex = parseInt(btn.dataset.index);
            updateCarousel();
        });
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        carouselDateBtns.forEach(btn => btn.classList.remove('active'));
        carouselDateBtns[currentIndex].classList.add('active');
    }
});