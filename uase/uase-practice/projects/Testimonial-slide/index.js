const testimonials = [
    {
        name: "Ayo Monday",
        photoUrl: "images/ayo.jpg",
        text: "I was so impressed with the quality of the cleaning. My delicate fabrics looked brand new. The pickup and delivery service was super convenient. I'll definitely be a repeat customer!",
    },
    {
        name: "Elizabeth Johnson",
        photoUrl: "images/special.jpg",
        text: "The cleaners were punctual, friendly, and efficient. They paid attention to the details and left my home spotless. I'm so happy with their service."
    },
    {
        name: "O'jo Victoria",
        photoUrl: "images/vicky.jpg",
        text: "I had a deep cleaning done on my carpets and they look like new. The team was professional and thorough. I'm so glad I chose them."
    },
    {
        name: "Salaudeen Rukayat",
        photoUrl: "images/ruky.jpg",
        text: "The laundry service was fantastic! My clothes were not only clean but also beautifully folded. I'm so impressed."
    },

]
const imgEl
 = document.querySelector("img");
 const textEl = 
 document.querySelector(".text");
 const usernameEl 
 = document.querySelector(".username");

let idx = 0;

function updateTestimonial(){
    const {name, photoUrl, text} =
    testimonials[idx]
    imgEl.src = photoUrl
    textEl.innerText = text
    usernameEl.innerText = name
    idx++
    if(idx===testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
updateTestimonial();

    }, 5000);
   
}
updateTestimonial();

