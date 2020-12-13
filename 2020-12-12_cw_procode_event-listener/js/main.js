// let mainDiv = document.querySelector(".main");
// let divNumber = 144;
// let divCount = 0;

// for(let i = 0; i < divNumber; i++) {
//     let div =  document.createElement('div');
//     mainDiv.appendChild(div);
//     div.style.height = "30px";
//     div.style.width = "30px";
//     div.style.backgroundColor = "yellow";
//     div.style.border = "2px solid black";
//     div.style.display = "inline-block";
//     divCount++;

//     if(divCount === 12) {
//         let br =  document.createElement('br');
//         mainDiv.appendChild(br);
//         divCount = 0;
//     }
// }

// mainDiv.addEventListener('click', (e) => {
//     console.log(e);
//     // mainDiv.target.style.backgroundColor = "green";
//     // mainDiv.target.style.backgroundColor = "green";
// })


// let mainDiv = document.querySelector(".main");
// let divNumber = 144;
// let divCount = 0;
// let addElString = "";

// //Генератор попаданий корабля
// const randomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for(let i = 0; i < divNumber; i++) {
//     addElString += "<div style=\"height: 30px; width: 30px; background-color: yellow; border: 2px solid black; display: inline-block;\"></div>";
//     divCount++;

//     if(divCount === 12) {
//         addElString += "<br>";
//         divCount = 0;
//     }
// }

// mainDiv.innerHTML = addElString;

// let allDiv = mainDiv.querySelectorAll("div");

// for(let i = 0; i < allDiv.length; i++) {
//     allDiv[i].innerHTML = randomInt(1, 144);
// }

// mainDiv.addEventListener('click', (e) => {
//     console.log(e);
//     if(e.target.className !== "main") e.target.style.backgroundColor = "green";
// })

let mainDiv = document.querySelector(".main");
let divNumber = 144;
let divCount = 0;
let addElString = "";

//Генератор попаданий корабля
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 0; i < divNumber; i++) {
    addElString += "<div style=\"height: 30px; width: 30px; background-color: yellow; border: 2px solid black; display: inline-block;\"></div>";
    divCount++;

    if(divCount === 12) {
        addElString += "<br>";
        divCount = 0;
    }
}

mainDiv.innerHTML = addElString;

document.addEventListener('click', (e) => {
    console.log(e);
    e.target.style.backgroundColor = "red";
    e.target.innerText = randomInt(1, 144);
    // e.target.outerText = randomInt(1, 144);
})