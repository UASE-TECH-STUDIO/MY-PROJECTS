const animationContainer = document.querySelector(".animation-container");

function createHeart() {
  const newHeart = document.createElement("span");
  newHeart.classList.add("animated-heart");

  const heartProps = getRandomHeartProps();
  Object.assign(newHeart.style, heartProps);

  animationContainer.appendChild(newHeart);

  newHeart.style.animation = "shrinkFade 3s ease-in-out forwards";
}

function getRandomHeartProps() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const xPos = Math.random() * viewportWidth;
  const yPos = Math.random() * viewportHeight;
  const size = Math.random() * 50 + 10; // Random size between 10px and 60px

  return {
    left: xPos + "px",
    top: yPos + "px",
    width: size + "px",
    height: size + "px",
  };
}

setInterval(createHeart, 2000); // Create a new heart every 2 seconds