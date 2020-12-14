// let question = document.querySelector(".vertical-button");

// question.addEventListener('click', () => {
//     let firstValue = document.querySelector(".input-grid-1").value;
//     let secondValue = document.querySelector(".input-grid-2").value;
//     let result = document.querySelector(".bottom");

//     result.innerHTML = Number(firstValue) + Number(secondValue);
// })

// let firstBut = document.querySelector(".small-button-1");
// firstBut.style.backgroundColor = "yellow";
// let secondBut = document.querySelector(".small-button-2");
// let thirdBut = document.querySelector(".small-button-3");
// let forthBut = document.querySelector(".small-button-4");

// firstBut.addEventListener('click', () => {
//     forthBut.style.backgroundColor = "";
//     thirdBut.style.backgroundColor = "";
//     secondBut.style.backgroundColor = "";
//     firstBut.style.backgroundColor = "yellow";
// })

// secondBut.addEventListener('click', () => {
//     forthBut.style.backgroundColor = "";
//     thirdBut.style.backgroundColor = "";
//     secondBut.style.backgroundColor = "yellow";
//     firstBut.style.backgroundColor = "";
// })

// thirdBut.addEventListener('click', () => {
//     forthBut.style.backgroundColor = "";
//     thirdBut.style.backgroundColor = "yellow";
//     secondBut.style.backgroundColor = "";
//     firstBut.style.backgroundColor = "";
// })

// forthBut.addEventListener('click', () => {
//     forthBut.style.backgroundColor = "yellow";
//     thirdBut.style.backgroundColor = "";
//     secondBut.style.backgroundColor = "";
//     firstBut.style.backgroundColor = "";
// })

let ACT = "";
let question = document.querySelector(".vertical-button");
let firstBut = document.querySelector(".small-button-1");
let secondBut = document.querySelector(".small-button-2");
let thirdBut = document.querySelector(".small-button-3");
let forthBut = document.querySelector(".small-button-4");

firstBut.addEventListener('click', (e) => {
    ACT = e.target.innerHTML;
})

secondBut.addEventListener('click', (e) => {
    ACT = e.target.innerHTML;
})

thirdBut.addEventListener('click', (e) => {
    ACT = e.target.innerHTML;
})

forthBut.addEventListener('click', (e) => {
    ACT = e.target.innerHTML;
})

question.addEventListener('click', () => {
    let firstValue = document.querySelector(".input-grid-1").value;
    let secondValue = document.querySelector(".input-grid-2").value;
    let result = document.querySelector(".bottom");

    switch(ACT){
        case "/":
            result.innerHTML = Number(firstValue) / Number(secondValue);
            break;
        case "*":
            result.innerHTML = Number(firstValue) * Number(secondValue);
            break;
        case "-":
            result.innerHTML = Number(firstValue) - Number(secondValue);
            break;
        case "+":
            result.innerHTML = Number(firstValue) + Number(secondValue);
    }
})
