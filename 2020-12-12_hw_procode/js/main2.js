//Вариант №3
let shipsTypes = ["destroyer", "battleship", "aircraftCarriers", "cruisers"];
let shipsTypesDam = [10, 4, 40, 8];
let shipsTypesHealth = [45, 100, 15, 60];
let shipsArr = [];
let fleetNum = 2;
let numShipFleet = 10;
let fleet1 = [];
let fleet2 = [];


//Создание корабля
const createShip = (name, health, damage) => {
    let ship = new Object();
    ship.name = name;
    ship.health = health;
    ship.damage = damage;
    return ship;
}

//Генератор попаданий корабля, выбора кораблей
const shotResult = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Изменение величины урона
const damChange = (min, max) => {
    let changeDam = Math.floor(Math.random() * (max - min + 1)) + min;
    if(changeDam === 0) {
        return 0.8;
    }
    else {
        return 1.2;
    }
}

//Функция результата выстрела и передачи хода
const shotDamage = (shipIn, shipOut, shipNum) => {
    let damСoeff = damChange(0, 1);
    let damage = shotResult(0, 1) * shipIn.damage * damСoeff;
    shipOut.health -= damage.toFixed(1);

    (shipNum === 1) ? console.log(`Выстрелил корабль ${shipNum}-го флота ${shipIn.name} и нанес урон ${damage}, у корабля ${shipOut.name} ${shipNum + 1}-го флота осталось ${shipOut.health.toFixed(1)}`) : console.log(`Выстрелил корабль ${shipNum}-го флота ${shipIn.name} и нанес урон ${damage}, у корабля ${shipNum - 1}-го ${shipOut.name} осталось ${shipOut.health.toFixed(1)}`);
}

//Клонирование объекта
function copyObject(ship) {   
    return Object.assign({}, ship);
 }

//Создание кораблей, которые могу участвовать в битве
for(let i = 0; i <shipsTypes.length; i++) {
    shipsArr[i] = createShip(shipsTypes[i], shipsTypesHealth[i], shipsTypesDam[i]);
}

//Создание флота
for(let i = 0; i < numShipFleet; i++) {
    fleet1[i] = new Object();
    fleet2[i] = new Object();
    fleet1[i] = copyObject(shipsArr[shotResult(0,shipsArr.length - 1)]);
    fleet2[i] = copyObject(shipsArr[shotResult(0,shipsArr.length - 1)]);
}

//Вывод данных по созданым кораблям и флотам
console.log(shipsArr);
console.log(fleet1);
console.log(fleet2);


// Цикл ведения боевых действий
while(fleet1.length > 0 && fleet2.length > 0) {

    if(fleet1.length > 0) {
        shotDamage(fleet1[shotResult(0, fleet1.length - 1)], fleet2[shotResult(0, fleet2.length - 1)], 1);
    
        for(let i = 0; i < fleet2.length; i++) {
            if(fleet2[i].health <= 0) {
                fleet2.splice(i, 1);
            }
        }
    
        console.log(fleet2);
    }

    if(fleet2.length > 0) {
        shotDamage(fleet2[shotResult(0, fleet2.length - 1)], fleet1[shotResult(0, fleet1.length - 1)], 2);

        for(let i = 0; i < fleet1.length; i++) {
            if(fleet1[i].health <= 0) {
                fleet1.splice(i, 1);
            }
        }

        console.log(fleet1);
    }
}

//Вывод победителя
(fleet1.length > 0) ? console.log(`Выиграл первый флот`) : console.log(`Выиграл второй флот`);