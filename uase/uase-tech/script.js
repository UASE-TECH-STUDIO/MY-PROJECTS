// Scroll animations for sections
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Mouse hover effect for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
    });
});
// Function to add the "visible" class when each card is in view
function revealCardsOnScroll() {
    const cards = document.querySelectorAll('.service-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        // Check if the card is in the viewport
        if (cardTop < windowHeight - 100) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
}

// Trigger the function on scroll
window.addEventListener('scroll', revealCardsOnScroll);

