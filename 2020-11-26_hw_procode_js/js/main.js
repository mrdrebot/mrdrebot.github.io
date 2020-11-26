//Exersize #1
let outPutString = "";

for(let i = 1; i <= 45; i++) {
    if((i % 2 === 0 && (i >= 2 && i <= 14)) || (i % 2 !== 0 && (i >= 33 && i <= 45)))  {
        outPutString += i + ", ";
    }

}

console.log("Все четные числа от 2 до 14 и нечетные от 33 до 45: ", outPutString);

//Exersize #2
/*
Для решения задачи будет использован "Перебор делителей": Достаточно поделить n на все простые числа от 2 до округленного значения с корня "n".
*/

let startingPoint = 9991999;
let simpleNumbersArray = new Array(); //сохранение найдены ближайших двух чисел, перед и после числа 9991999
let simpleNumber = null;
let count = null;                     //счетчик результата деления на "0"
let middlePoint = null;               //квадратный корень с проверяемого числа
let simpleNumbers = "";               //массив простых чисел
let simpleNumbersCount = 0;           //счетчик получиных простых чисел


//Поиск ближайших простых чисел перед числом 9991999
while(simpleNumbersCount !== 2) {

    count = 0;
    middlePoint = Math.round(Math.sqrt(startingPoint));

    //перебор от "2" до "квадратного корня" проверяемого числа
    for(let i = 2; i <= middlePoint; i++) {
        simpleNumber = startingPoint % i;

        if  (simpleNumber === 0) {
            count++;
        }
    }

    if(count === 0) {
        simpleNumbersArray.unshift(startingPoint);
        simpleNumbersCount++;
    }

    startingPoint--;  //уменьшение числа 9991999
}

//Поиск  ближайших простых чисел после числа 9991999
simpleNumbersCount = 0;
startingPoint = 9991999;

while(simpleNumbersCount !== 2) {

    count = 0;
    middlePoint = Math.round(Math.sqrt(startingPoint));

    for(let i = 2; i <= middlePoint; i++) {
        simpleNumber = startingPoint % i;

        if  (simpleNumber === 0) {
            count++;
        }
    }

    if(count === 0) {
        simpleNumbersArray.push(startingPoint);
        simpleNumbersCount++;
    }

    startingPoint++;  //увеличение числа 9991999
}

//Сравнение найденых простых чисел между собой и определение ближайших к числу 9991999
startingPoint = 9991999;

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

//Выведение результата в консоль
console.log("Ближайшие простые числа к числу 9991999: ", simpleNumbers);