const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");
const numberEl = document.getElementById("day-number");
const yearEl = document.getElementById("day-year");
const timeEl = document.getElementById("time");

function updateTime(){
const date = new Date();
const month = date.getMonth;

monthEl.innerText = date.toLocaleDateString("en",{
    month: "long"
});

dayEl.innerText = date.toLocaleDateString("en", {
    weekday: "long"
});

numberEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();

timeEl.innerText = date.toLocaleTimeString("en", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
}
updateTime();
 
setInterval(updateTime, 1000);
