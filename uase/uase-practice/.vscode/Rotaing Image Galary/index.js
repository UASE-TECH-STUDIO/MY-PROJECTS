let currentAngle = 0;
let interval;
let isPaused = false;

const imageContainer = document.querySelector('.image-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const pauseBtn = document.getElementById('pause');
const playerIframe = document.getElementById('soundcloud-player');


const heartTypes = [
    '❤️', '💖', '💜', '💙', '💚', '💛', '🧡', '🤍', 
    '💗', '💓', '💕', '💞', '💘', '💝', '💟'
];


function rotateNext() {
    currentAngle -= 27.6923; 
    imageContainer.style.transform = `perspective(1000px) rotateY(${currentAngle}deg)`;
}

function rotatePrev() {
    currentAngle += 27.6923; 
    imageContainer.style.transform = `perspective(1000px) rotateY(${currentAngle}deg)`;
}


function startAutoRotate() {
    interval = setInterval(rotateNext, 3000); // Change image every 3 seconds
}


function pauseRotation() {
    if (isPaused) {
        startAutoRotate();
        pauseBtn.textContent = 'Pause';
        toggleAudio(true); 
    } else {
        clearInterval(interval);
        pauseBtn.textContent = 'Resume';
        toggleAudio(false); 
    isPaused = !isPaused;
}
}

function toggleAudio(play) {
    const message = play ? '{"method":"play"}' : '{"method":"pause"}';
    playerIframe.contentWindow.postMessage(message, '*');
}


nextBtn.addEventListener('click', rotateNext);
prevBtn.addEventListener('click', rotatePrev);
pauseBtn.addEventListener('click', pauseRotation);


startAutoRotate();
toggleAudio(true); 

setInterval(() => {
    const heart = document.createElement('span');
    const size = Math.random() * 60 + 30; // Random heart size
    const heartContainer = document.querySelector('.heart-container');
    
   
    const randomHeart = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    heart.textContent = randomHeart;
    
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.position = 'absolute';
    heart.style.animation = `animate ${Math.random() * 3 + 7}s linear infinite`;
    heart.style.color = 'rgba(255, 0, 0, 0.8)'; // Adjust color as needed

    heartContainer.appendChild(heart);

    
    setTimeout(() => {
        heart.remove();
    }, 10000); 
}, 500); 
