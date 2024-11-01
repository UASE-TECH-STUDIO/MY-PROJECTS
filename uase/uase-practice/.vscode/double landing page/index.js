const containerEl = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");
const buttons = document.querySelectorAll(".btn");

const phoneNumber = '2348146550674'; 
const message = 'Hello, I am interested in buying this product. Can you give me more details?';
const encodedMessage = encodeURIComponent(message);

const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

leftEl.addEventListener("mouseenter", () => {
    containerEl.classList.add("active-left");
});
leftEl.addEventListener("mouseleave", () => {
    containerEl.classList.remove("active-left");
});

rightEl.addEventListener("mouseenter", () => {
    containerEl.classList.add("active-right");
});
rightEl.addEventListener("mouseleave", () => {
    containerEl.classList.remove("active-right");
});

const whatsappLinks = document.querySelectorAll('.whatsapp-link');

whatsappLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); 
        window.location.href = whatsappURL; 
    });
});
