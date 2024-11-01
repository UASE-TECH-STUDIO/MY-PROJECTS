const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("AmPm");


function updateClock (){

    let h = 
    new Date().getHours();
    let m =
    new Date().getMinutes();
    let s = 
    new Date().getSeconds();
    let ampm =
    "Am"
    if(h>=12){
        h = h - 12
        ampm = "PM"
    }
    
    
       s = s<10  ? "0" + s : s;
       h = h<10  ? "0" + h : h;
       m = m<10  ? "0" + m : m;
    
    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
}
updateClock()
setInterval(()=>{

    updateClock() 
},1000);