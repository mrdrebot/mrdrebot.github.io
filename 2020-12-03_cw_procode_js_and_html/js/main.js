//Задача №1

// let player1 = 100; //очки первого игрока
// let player2 = 100; //очки второго игрока
// let rollMin = 1;    //минимально возможное выпадения кубика
// let rollMax = 6;    //максимально возможное выпадения кубика
// let player1Throw = null;    //результат выпадения кубика первого игрока
// let player2Throw = null;    //результат выпадения кубика первого игрока
// let mainEl = document.querySelector(".main");

// //Генератор значения кубика
// const diceRoll = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// //Условия продолжения игры
// while(player1 > 0 && player2 > 0) {
//     //Броски игроков
//     player1Throw = diceRoll(rollMin, rollMax);
//     player1 -= player1Throw;
//     player2Throw = diceRoll(rollMin, rollMax);
//     player2 -= player2Throw
//     //Вывод результатов бросков игроков
//     mainEl.innerHTML = mainEl.innerHTML + `Бросок Первого Игрока = ${player1Throw}, остаток очков = ${player1}<br>`;
//     mainEl.innerHTML = mainEl.innerHTML + `Бросок Второго Игрока = ${player2Throw}, остаток очков = ${player2}<br>`;
//     mainEl.innerHTML = mainEl.innerHTML + `<br>`;
// }

// //Вывод победителя
// (player1 > player2) ? mainEl.innerHTML = mainEl.innerHTML + "Выиграл первый Игрок!" : mainEl.innerHTML = mainEl.innerHTML + "Выиграл Второй Игрок!";

// //Задача №2
// let zodiacSign = ["&#9800", "&#9801", "&#9802", "&#9803", "&#9804", "&#9805", "&#9806", "&#9807", "&#9808", "&#9809", "&#9810", "&#9811", "&#9934"];
// let mainEl = document.querySelector(".main");
// let result = "";

// //отодвигаем знаки, для лучшей наглядности
// mainEl.style.margin = "50px";

// //Цикл сборки выводимого результата
// for(let i = 0; i < zodiacSign.length; i++) {
//     result = result + `${zodiacSign[i]}<br><br>`;
// }

// //Вывод результата
// mainEl.innerHTML = result;

//вариант 2
let zodiacSign = 13;    //С учетом Знака Змееносца
let zodiacNum = 9800;   //отсчет кодировки спецсимволов
let mainEl = document.querySelector(".main");
let result = "";

//Отодвигаем знаки, для лучшей наглядности
mainEl.style.margin = "50px";

//Цикл сборки выводимого результата
for(let i = 0; i < zodiacSign; i++) {
    if(i === 12) {
        if(i === 12) result = result + `&#9934<br><br>`;
    }
    else {
        result = result + `&#${zodiacNum}<br><br>`;
        zodiacNum++;
    }
}

//Вывод результата
mainEl.innerHTML = result;