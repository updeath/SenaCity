// Animación para las cards al hacer scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },
    { threshold: 0.1 }
);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', () => {
    const othersLink = document.getElementById('others');
    const submenu = othersLink.nextElementSibling;

    othersLink.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado
        submenu.classList.toggle('menu-visible');
    });
});