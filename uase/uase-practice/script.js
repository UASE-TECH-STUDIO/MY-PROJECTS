document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-list li');

    // Assign random positions to each project item
    projectItems.forEach(item => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - 150));
        const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
        const randomRotation = Math.floor(Math.random() * 20) - 10; // random rotation between -10 and +10 degrees

        item.style.left = `${randomX}px`;
        item.style.top = `${randomY}px`;
        item.style.transform = `rotate(${randomRotation}deg)`;
    });

    // Scroll event to trigger animations on scroll
    window.addEventListener('scroll', () => {
        projectItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Check if item is in viewport
            if (itemPosition < windowHeight - 50) {
                item.style.animationDelay = `${Math.random() * 0.5}s`;
                item.classList.add('slideIn');
            }
        });
    });
});
