// Toggle Navigation Menu for Mobile View
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navbarLinks.classList.toggle('show');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Hero Animation - Logo Slide In from Top
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  heroContent.classList.add('slide-in');
});

// Scroll Animation for Sections and Cards
const scrollElements = document.querySelectorAll(".card, .about, .services, .contact");

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 150)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// Card Entrance Animation on Page Load
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    }
  });
});

// Contact Form Submission Handler
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out to UASE! We will get back to you shortly.');
  contactForm.reset();
});

// Fade in Effect for Header Background on Scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled-header');
  } else {
    header.classList.remove('scrolled-header');
  }
});
