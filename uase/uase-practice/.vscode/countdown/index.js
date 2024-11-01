const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const yearEl = document.querySelector(".year");
const newYear = new Date
("Jan 1, 2025 00:00:00").getTime()

updateCountDown();

function updateCountDown(){


const now = new Date().getTime();
const year = new Date()

const countDown = newYear - now

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const day = hours * 24;


let d = Math.floor(countDown / day);
let h = Math.floor((countDown % day) /hours);
let m = Math.floor((countDown % hours) / minutes);
let s = Math.floor((countDown % minutes) / seconds);

s = s<10  ? "0" + s : s;
h = h<10  ? "0" + h : h;
m = m<10  ? "0" + m : m;
d = d<10  ? "0" + d : d;

hourEl.innerText = h;
minuteEl.innerText = m;
dayEl.innerText = d;
secondEl.innerText = s;
yearEl.innerText = year.getFullYear()

setTimeout(updateCountDown, 1000);
}
