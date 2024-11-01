const totalEl = document.getElementById
("total-character");
const remainingEl = document.getElementById
("remaining");
const textEl = document.getElementById("text");

textEl.addEventListener("keyup", ()=>{
updateText()

})
function updateText () {

totalEl.innerText = textEl.value.length
remainingEl.innerText = textEl.getAttribute
("maxLength") - textEl.value.length
}