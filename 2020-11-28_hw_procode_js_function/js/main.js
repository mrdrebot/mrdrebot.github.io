/*
Для решения задачи будет использован "Перебор делителей": Достаточно поделить n на все простые числа от 2 до округленного значения с корня "n".
*/

let startingPoint = 9991999;
let simpleNumbersArray = new Array(); //сохранение найдены ближайших двух чисел, перед и после числа 9991999
let simpleNumbers = "";               //массив простых чисел

//Объявление функции поиска простых чисел
const getSimpleNumbers = (point, estimation) => {
    let count = null;                     //счетчик результата деления на "0"
    let simpleNumbersCount = 0;           //счетчик получиных простых чисел
    let middlePoint = null;               //квадратный корень с проверяемого числа
    let simpleNumber = null;

    
    while(simpleNumbersCount !== 2) {

        count = 0;
        middlePoint = Math.round(Math.sqrt(point));
    
        //перебор от "2" до "квадратного корня" проверяемого числа
        for(let i = 2; i <= middlePoint; i++) {
            simpleNumber = point % i;
    
            if  (simpleNumber === 0) {
                count++;
            }
        }
    
        if(count === 0) {
            if(estimation === "down") {
                simpleNumbersArray.unshift(point);
            }
            else {
                simpleNumbersArray.push(point);
            }
            simpleNumbersCount++;
        }

        if(estimation === "down") {
            point--;  //уменьшение числа 9991999
        }
        else {
            point++;  //увеличение числа 9991999
        }
    
    }
};


//Поиск ближайших простых чисел перед числом 9991999
getSimpleNumbers(startingPoint, "down");

//Поиск  ближайших простых чисел после числа 9991999
getSimpleNumbers(startingPoint, "up");

//Сравнение найденых простых чисел между собой и определение ближайших к числу 9991999
while(simpleNumbersArray.length !== 2) {

    if((startingPoint - simpleNumbersArray[0]) > (simpleNumbersArray[simpleNumbersArray.length - 1] - startingPoint)) {
        simpleNumbersArray.shift();
    }
    else {
        simpleNumbersArray.pop();
    }
}

//Занесение данных в одну строку
for(let i = 0; i < simpleNumbersArray.length; i++) {
    simpleNumbers = `${simpleNumbers} ${simpleNumbersArray[i]}`;
}

// //Выведение результата в консоль
console.log("Ближайшие простые числа к числу 9991999: ", simpleNumbers);