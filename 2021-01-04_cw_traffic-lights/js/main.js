
let buttons = document.querySelector(".buttons");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

let circleRed = document.querySelector(".circle-red");
let circleYellow = document.querySelector(".circle-yellow");
let circleGreen = document.querySelector(".circle-green");

buttons.addEventListener("click", (event) => {
    circleRed.style.backgroundColor = "";
    circleYellow.style.backgroundColor = "";
    circleGreen.style.backgroundColor = "";

    if(event.target.classList.contains("red")) {
        circleRed.style.backgroundColor = "red";
    }
    else if(event.target.classList.contains("yellow")) {
        circleYellow.style.backgroundColor = "yellow";
    }
    else if(event.target.classList.contains("green")) {
        circleGreen.style.backgroundColor = "green";
    }

});