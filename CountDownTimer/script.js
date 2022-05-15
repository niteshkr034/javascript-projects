const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secondsEl = document.getElementById("seconds");

const diwali = '24 Oct 2022';

function countdown(){
    const diwaliDate = new Date(diwali);
    const currentDate = new Date();
    
    const totalSeconds = (diwaliDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds/86400);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const min = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(min);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
// initial call
countdown();

setInterval(countdown, 1000)
