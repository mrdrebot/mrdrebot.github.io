/*
Домашнее задание на 21-12-2020:
1) Паровозик, ездит влево-вправо. Делаем 2 кнопки: влево и вправо, работает от мышки и от клавиш на клавиатуре влево-вправо.
2) +кнопка вкл/вкл ( на клавиатуре F ) фонарик на паровозе, на кнопке отображения состояние.
*/

//Задание №1
let engine = document.querySelector(".engine");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let lamp = document.querySelector(".lamp");
let fbtn = document.querySelector(".f-btn");
// let engineCoords = engine.getBoundingClientRect();
// let startPoint = null;

//Вариант 1 - ketframes в CSS
left.addEventListener("click", () => {
    if(engine.style.animationPlayState === "paused" || engine.style.animationPlayState === "") {
        engine.style.animationPlayState = "running";
        // engine.style.left = startPoint;
        engine.classList.add("left-move");
        engine.classList.remove("right-move");
    }
    else {
        engine.style.animationPlayState = "paused"
        // startPoint = `${engineCoords.left}px`;
    }
});

left.addEventListener("keydown", (event) => {
    if(event.code === "ArrowLeft") {
        if(engine.style.animationPlayState === "paused" || engine.style.animationPlayState === "") {
            engine.style.animationPlayState = "running";
            // engine.style.left = startPoint;
            engine.classList.add("left-move");
            engine.classList.remove("right-move");
        }
        else {
            engine.style.animationPlayState = "paused"
            // startPoint = `${engineCoords.left}px`;
        }
    }
}, false);

right.addEventListener("click", () => {
    if(engine.style.animationPlayState === "paused" || engine.style.animationPlayState === "") {
        engine.style.animationPlayState = "running";
        // engine.style.left = startPoint;
        engine.classList.remove("left-move");
        engine.classList.add("right-move");
    }
    else {
        engine.style.animationPlayState = "paused"
        // startPoint = `${engineCoords.left}px`;
    }
});

right.addEventListener("keydown", (event) => {
    if(event.code === "ArrowRight") {
        if(engine.style.animationPlayState === "paused" || engine.style.animationPlayState === "") {
            engine.style.animationPlayState = "running";
            // engine.style.left = startPoint;
            engine.classList.remove("left-move");
            engine.classList.add("right-move");
        }
        else {
            engine.style.animationPlayState = "paused"
            // startPoint = `${engineCoords.left}px`;
        }
    }
});

fbtn.addEventListener("keydown", (event) => {
    if(event.code === "KeyF") {
        if(lamp.style.backgroundColor === "grey" || lamp.style.backgroundColor === "") {
            lamp.style.backgroundColor = "yellow";
            fbtn.innerHTML = "On";
        }
        else {
            lamp.style.backgroundColor = "grey";
            fbtn.innerHTML = "Off";
        }
    }
}, false);

//Вариант 2 - setInterval
// left.addEventListener("click", () => {
//     let start = Date.now(); // запомнить время начала

//     let timer = setInterval(() => {
//         let timePassed = Date.now() - start;    // сколько времени прошло с начала анимации?

//         if (timePassed >= 6000) {
//             clearInterval(timer); // закончить анимацию через 2 секунды
//             return;
//         }

//         move(timePassed);   // отрисовать анимацию на момент timePassed, прошедший с начала анимации
//     }, 20);

//     // left изменяет значение от 0px до 400px
//     const move = (x) => {
//         engine.style.left = `${x / -5}px`;
//     }
// });

// right.addEventListener("click", () => {
//     let start = Date.now(); // запомнить время начала

//     let timer = setInterval(() => {
//         let timePassed = Date.now() - start;    // сколько времени прошло с начала анимации?

//         if (timePassed >= 6000) {
//             clearInterval(timer); // закончить анимацию через 2 секунды
//             return;
//         }

//         move(timePassed);   // отрисовать анимацию на момент timePassed, прошедший с начала анимации
//     }, 20);

//     // left изменяет значение от 0px до 400px
//     const move = (x) => {
//         engine.style.left = `${x / 5}px`;
//     }
// });

// //Вариант 3 - Запуск keyframws в JS
// left.addEventListener("click", () => {
//     anim = engine.animate([
//         { // from
//             left: 0
//         },
//         { // to
//             left: "-1500px"
//         }
//     ], 2000);
// });