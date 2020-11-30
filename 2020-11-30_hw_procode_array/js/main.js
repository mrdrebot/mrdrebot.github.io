console.log("Задача №1");

let arr = [1,2,3,4,5,6,7,8,9];
console.log("Массив до провоерки", arr);

//Функция проверки суммы числа
const checkSum = (index, getArr) => {
    if(getArr[index] !== (getArr[index - 1] + getArr[index + 1])) {
        getArr[index] = getArr[index - 1] + getArr[index + 1];
    }

    return getArr[index];
}

//Проверка сумм
arr[2] = checkSum(2, arr);
arr[5] = checkSum(5, arr);
arr[7] = checkSum(7, arr);

console.log("Массив после провоерки", arr);

//Задача №2
console.log("\nЗадача №2");

let arrNumderQuantity = 8; //указал конкретное число ,что бы не выскакивал prompt
// let arrNumderQuantity = Number(prompt("Задайте размер массива:")) - 1;
let randomArr = [arrNumderQuantity];
//указал конкретные числа max & min, что бы не выскакивал prompt
let min = -1;
let max = 21;
// let min = Number(prompt("Задайте нижнюю границу выборки числа:"));   //нижняя граница интервала выборки числа
// let max = Number(prompt("Задайте верхнюю границу выборки числа:"));   //верхняя граница интервала выборки числа
let minArrNumber = null;
let firstMinusMin = null;
let lastMinusMin = null;

//Функция генерирования случайных чисел
const selfRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Наполняем массив и находим минимальное значение
for(let i = 0; i <= arrNumderQuantity; i++) {
    randomArr[i] = selfRandom(min, max);

    if(i === 0 || randomArr[i] < minArrNumber) { //определение минимального числа массива
        minArrNumber = randomArr[i];
    }
}

firstMinusMin = randomArr[0]- minArrNumber;
lastMinusMin = randomArr[randomArr.length - 1]- minArrNumber;

console.log("Заполненный массив ", randomArr);
console.log("Минимально число массива = ", minArrNumber);
console.log(`randomArr[0] - minArrNumber = ${randomArr[0]} - ${minArrNumber} = `, firstMinusMin);
console.log(`randomArr[${randomArr.length - 1}] - minArrNumber = ${randomArr[randomArr.length - 1]} - ${minArrNumber} = `, lastMinusMin);

//Задача №3
console.log("\nЗадача №3");

//для третьей задачи взяты переменные (данные) второй: arrNumderQuantity, min, max и функция "selfRandom"
randomArr = [arrNumderQuantity];
randomArr2 = [];

//Наполняем массив
for(let i = 0; i <= arrNumderQuantity; i++) {
    randomArr[i] = selfRandom(min, max);
}

console.log("Заполненный массив ", randomArr);

for(let i = 0; i <= arrNumderQuantity; i++) {
    randomArr2[i] = randomArr[i] * 3 - 5;
}

console.log("Измененный массив ", randomArr2);

//Задача №4
console.log("\nЗадача №4");

let fibonachiNumber = null;
let startNumber = 1;        //первое число ряда Фибоначчи
let limit = 9991999;        //Предел поиска числа Фибоначчи
let previousValue = 0;      //предыдущее значение числа в ряду Фибоначчи
let iterСounter = 0;        //счетчик кол-ва итераций поиска числа Фибоначчи до достижения границы

//Рекурсивная функция поиска числа Фибоначчи
const findNumber = (start, end, count, temp) => {
    count++;
    start = start + temp;   //Подсчет следующего числа в ряду
    temp = start - temp;    //Сохранение значения предыдущего значения числа в ряду

    if(start < end) {
        [count, temp] = findNumber(start, end, count, temp);
    }

    return [count, temp];
}
    
fibonachiNumber = findNumber(startNumber, limit, iterСounter, previousValue);

console.log("Количество итераций = ", fibonachiNumber[0]);
console.log("Ближайшее число Фибоначи перед числом 9991999 = ", fibonachiNumber[1]);
