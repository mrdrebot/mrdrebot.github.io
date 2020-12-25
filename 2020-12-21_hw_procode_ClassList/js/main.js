/*
Домашнее задание на 21-12-2020:
1) Паровозик, ездит влево-вправо. Делаем 2 кнопки: влево и вправо, работает от мышки и от клавиш на клавиатуре влево-вправо.
2) +кнопка вкл/вкл ( на клавиатуре F ) фонарик на паровозе, на кнопке отображения состояние.
*/

//  Задание №1
let engine = document.querySelector(".engine");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let lamp = document.querySelector(".lamp");
let fbtn = document.querySelector(".f-btn");
let windWidth = document.documentElement.clientWidth;   //  Ширина всего окна
let animTime = 5;                                       //  время анимации, береться из правила анимации css
engine.style.left = 0;                                  //  Координата расположения паровоза
let animSpeed = windWidth / animTime;                   //  Расчет скорости анимации

//Функция расчета анимации "Вправо"
const animRight = () => {
    engine.style.animationDuration = `${(windWidth - Number(engine.style.left.slice(0, -2)) - engine.clientWidth) / animSpeed}s`;
}

//Функция расчета анимации "Влево"
const animLeft = () => {
    engine.style.animationDuration = `${Number(engine.style.left.slice(0, -2)) / animSpeed}s`;
}

//  Функция нажатия "Вправо"
const rightMove = () => {
    if((engine.style.animationPlayState === "paused" && engine.className === "engine right-move") || engine.style.animationPlayState === "") {
        engine.style.animationPlayState = "running";
        animRight();
        engine.classList.remove("left-move");
        engine.classList.add("right-move");
    }
    else if(engine.style.animationPlayState === "running" && engine.className === "engine left-move") {
        engine.style.left = getComputedStyle(engine).left;
        animRight();
        engine.classList.add("right-move");
        engine.classList.remove("left-move");
    }
    else if(engine.style.animationPlayState === "paused" && engine.className === "engine left-move") {
        engine.style.left = getComputedStyle(engine).left;
        engine.style.animationPlayState = "running";
        animRight();
        engine.classList.add("right-move");
        engine.classList.remove("left-move");
    }
    else {
        engine.style.animationPlayState = "paused";
    }
}

//Функция нажатия "Влево"
const leftMove = () => {
    if((engine.style.animationPlayState === "paused" && engine.className === "engine left-move") || engine.style.animationPlayState === "") {
        animLeft();
        engine.style.animationPlayState = "running";
        engine.classList.add("left-move");
        engine.classList.remove("right-move");
    }
    else if(engine.style.animationPlayState === "running" && engine.className === "engine right-move") {
        engine.style.left = getComputedStyle(engine).left;
        animLeft();
        engine.classList.add("left-move");
        engine.classList.remove("right-move");
    }
    else if(engine.style.animationPlayState === "paused" && engine.className === "engine right-move") {
        engine.style.left = getComputedStyle(engine).left;
        engine.style.animationPlayState = "running";
        animLeft();
        engine.classList.add("left-move");
        engine.classList.remove("right-move");
    }
    else {
        engine.style.animationPlayState = "paused";
    }
}

// Нажатие кнопки "Влево" мышкой
left.addEventListener("click", () => {
    leftMove();
});

// Нажатие кнопки "Вправо" мышкой
right.addEventListener("click", () => {
    rightMove();
});

// Нажатие кнопки "Влево" кнопкой
document.addEventListener("keydown", (event) => {
    if(event.code === "ArrowLeft") leftMove();
});

// Нажатие кнопки "Вправо" кнопкой
document.addEventListener("keydown", (event) => {
    if(event.code === "ArrowRight") rightMove();
});

//Задание №2
const lantern = (bgColor) => {
    if(bgColor === "grey" || bgColor === "") {
        lamp.style.backgroundColor = "yellow";
        fbtn.innerHTML = "On";
    }
    else {
        lamp.style.backgroundColor = "grey";
        fbtn.innerHTML = "Off";
    }
}

// Нажатие кнопки "Вкл/Выкл" фонарика мышкой
document.addEventListener("keydown", (event) => {
    if(event.code === "KeyF") {
        lantern(lamp.style.backgroundColor);
    }
});

// Нажатие кнопки "Вкл/Выкл" фонарика кнопкой "F"
fbtn.addEventListener("click", () => {
    lantern(lamp.style.backgroundColor);f
});

