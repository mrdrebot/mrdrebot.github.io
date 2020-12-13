//Вариант №3
let health1 = 100;
let damage1 = 4;
let health2 = 40;
let damage2 = 15;

//Создание корабля
const createShip = (health, damage) => {
    let ship = new Object();
    ship.health = health;
    ship.damage = damage;
    return ship;
}

//Генератор попаданий корабля
const shotResult = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// //Функция результата выстрела и передачи хода
const shotDamage = (shipIn, shipOut, shipNum) => {
    let damage = shotResult(0, 1) * shipIn.damage;
    shipOut.health -= damage;

    (shipNum === 0) ? console.log(`Выстрелил первый корабль и нанес урон ${damage}, у второго корабля осталось ${shipOut.health}`) : console.log(`Выстрелил второго корабль и нанес урон ${damage}, у первого корабля осталось ${shipOut.health}`);
}

//Создание кораблей
let ship1 = createShip(health1, damage1);
let ship2 = createShip(health2, damage2);

//Вывод данных по созданым кораблям
console.log(ship1);
console.log(ship2);

//Цикл ведения боевых действий
while(ship1.health > 0 && ship2.health > 0) {
    shotDamage(ship1, ship2, 0);
    shotDamage(ship2, ship1, 1);
}

//Вывод победителя
(ship1.health > 0) ? console.log(`Выиграл первый корабль`) : console.log(`Выиграл второй корабль`);


//Вариант №1 (без оптимизации, рабочий)
// //Создание корабля
// const createShip = (health, damage) => {
//     let ship = new Object();
//     ship.health = health;
//     ship.damage = damage;
//     return ship;
// }

// //Генератор попаданий корабля
// const shotResult = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let health1 = 100;
// let damage1 = 4;
// let shot1 = null;
// let health2 = 40;
// let damage2 = 15;
// let shot2 = null;
// let shotResult1 = 0;    //Не попал
// let shotResult2 = 1;    //Попал
// let count = 0;

//Создание кораблей
// let ship1 = createShip(health1, damage1);
// let ship2 = createShip(health2, damage2);

//Вывод данных по созданым кораблям
// console.log(ship1);
// console.log(ship2);

//Цикл ведения боевых действий
// do {
//     if(ship1.health === 100 && ship2.health === 40 && count === 0) {
//         if(shotResult(shotResult1, shotResult2) === 0) {
//             count++;
//             shot1 = 1;
//             console.log(`Начинает бой корабль №1`);
//         }
//         else {
//             count++;
//             shot2 = 1;
//             console.log(`Начинает бой корабль №2`);
//         }
//     }

//     if(shot1 === 1) {
//         damage1 = shotResult(shotResult1, shotResult2) * ship1.damage;
//         ship2.health -= damage1;
//         shot1 = 0;
//         shot2 = 1;
//         console.log(`Выстрелил первый корабль и нанес урон ${damage1}, у второго корабля осталось ${ship2.health}`);
//     }
//     else {
//         // ship1.health -= shotResult(shotResult1, shotResult2) * ship2.damage;
//         damage2 = shotResult(shotResult1, shotResult2) * ship2.damage;
//         ship1.health -= damage2;
//         shot2 = 0;
//         shot1 = 1;
//         console.log(`Выстрелил второй корабль и нанес урон ${damage2}, у первого корабля осталось ${ship1.health}`);
//     }
// }
// while(ship1.health > 0 && ship2.health > 0);

//Вывод победителя
// (ship1.health > 0) ? console.log(`Выиграл первый корабль`) : console.log(`Выиграл второй корабль`);

// //Вариант №2 (с оптимизацией)
// let health1 = 100;
// let damage1 = 4;
// let health2 = 40;
// let damage2 = 15;
// let shot = null;
// let count = 0;

// //Создание корабля
// const createShip = (health, damage) => {
//     let ship = new Object();
//     ship.health = health;
//     ship.damage = damage;
//     return ship;
// }

// //Генератор попаданий корабля
// const shotResult = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// //Генератор первого хода
// const firstMove = () => {
//     let move = null;
//     (shotResult(0, 1) === 0) ? move = 1 : move = 2; 
//     console.log(`Начинает бой корабль №${move}`);
//     return move;
// }

// //Функция результата выстрела и передачи хода
// const shotDamage = (shotIn, shipIn, shipOut) => {
//     let damage = shotResult(0, 1) * shipIn.damage;
//     shipOut.health -= damage;
//     console.log(`Выстрелил ${shotIn} корабль и нанес урон ${damage}, у 2 корабля осталось ${shipOut.health}`);
    
//     if(shotIn === 1) {
//         return 2;
//     }
//     else {
//         return 1;
//     }
// }

// //Создание кораблей
// let ship1 = createShip(health1, damage1);
// let ship2 = createShip(health2, damage2);

// //Вывод данных по созданым кораблям
// console.log(ship1);
// console.log(ship2);

// //Цикл ведения боевых действий
// do {
//     if(ship1.health === 100 && ship2.health === 40 && count === 0) {
//         count++;
//         shot = firstMove();
//     }

//     (shot === 1) ? shot = shotDamage(shot, ship1, ship2) : shot = shotDamage(shot, ship2, ship1);
// }
// while(ship1.health > 0 && ship2.health > 0);

// //Вывод победителя
// (ship1.health > 0) ? console.log(`Выиграл первый корабль`) : console.log(`Выиграл второй корабль`);