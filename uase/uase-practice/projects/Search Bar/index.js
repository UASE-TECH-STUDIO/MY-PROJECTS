const containerEl = document.querySelector(".search-bar-container");
const searchEl = document.querySelector(".search");

searchEl.addEventListener("click",() =>{
updateSearch()
})

function updateSearch () {
    containerEl.classList.toggle("active");
}