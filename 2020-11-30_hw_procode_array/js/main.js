console.log("Задача №1");

let arr = [1,2,3,4,5,6,7,8,9];
console.log("Массив до провоерки", arr);

for(let i = 2; i < 8; i++) {
    if(i === 2 || i === 5 || i === 7) {
        if(arr[i] !== (arr[i - 1] + arr[i + 1])) {
            arr[i] = arr[i - 1] + arr[i + 1]
        }
    }
}

console.log("Массив после провоерки", arr);

//Задача №2
console.log("\nЗадача №2");

let arrNumderQuantity = 8;
let randomArr = [arrNumderQuantity];
let min = -1;   //нижняя граница интервала выборки числа
let max = 22;   //верхняя граница интервала выборки числа
let minArrNumber = null;

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

console.log("Заполненный массив ", randomArr);
console.log("Минимально число массива = ", minArrNumber);
console.log("randomArr[0] - minArrNumber = " + randomArr[0] + " - " + minArrNumber + " = ", randomArr[0]- minArrNumber);
console.log("randomArr[8] - minArrNumber = " + randomArr[8] + " - " + minArrNumber + " = ", randomArr[8]- minArrNumber);
console.log("arrNumderQuantity ", arrNumderQuantity);

//Задача №3
console.log("\nЗадача №3");

//для третьей задачи взяты переменные (данные) второй: arrNumderQuantity, min, max и функция "selfRandom"
randomArr = [arrNumderQuantity];

//Наполняем массив
for(let i = 0; i <= arrNumderQuantity; i++) {
    randomArr[i] = selfRandom(min, max);
}

console.log("Заполненный массив ", randomArr);

for(let i = 0; i <= arrNumderQuantity; i++) {
    randomArr[i] = randomArr[i] * 3 - 5;
}

console.log("Измененный массив ", randomArr);

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
        findNumber(start, end, count, temp);
    }
    else {
        console.log("Количество итераций = ", count);
        console.log("Ближайшее число Фибоначи перед числом 9991999 = ", temp);
    }
}

fibonachiNumber = findNumber(startNumber, limit, iterСounter, previousValue);
