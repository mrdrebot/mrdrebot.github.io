let btn = document.querySelector(".btn");
let enterTime = document.querySelector("#enter-time");
let timer = document.querySelector(".timer");
let destTime;
let curTime;
let day = ;
// console.log(startTime);
btn.disabled = true;

const runTimer = () => {
    // console.log(moment().format("HH:mm:ss"));

    timer.innerHTML = moment().format("HH:mm:ss");
}

enterTime.addEventListener("input", (event) => {
    console.log(event.target.value);
    destTimeTime = moment(`${event.target.value}`, "HH:mm").format("x");
    console.log(destTimetTime);

    // if(event.target.value !== "") {
    if(event.target.value) {
        btn.disabled = false;
        btn.addEventListener("click", runTimer);
    }    
    else {
        btn.disabled = true;
        btn.addEventListener("click", runTimer);
    } 
});