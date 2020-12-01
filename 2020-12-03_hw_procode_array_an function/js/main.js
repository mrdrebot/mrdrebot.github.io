//Задача #1
console.log("Задача №1");

let n = 8; //длина массива
let bottomLimit = -12;  //нижняя граница выборки для массива
let topLimit = 12;      //верхняя граница выборки для массива
let arr1 = new Array();
let arr2 = new Array();
let arr3 = new Array();
let condition2 = null;
let condition3 = null;

//Функция генерирования случайных чисел
const selfRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция наполнения массива
const fillArr = (inArr, arrLength, limit1, limit2) => {
    for(let i = 0; i < arrLength; i++) {
        inArr[i] = selfRandom(limit1, limit2);
    }

    return inArr;
}

//Заполнение массивов
arr1 = fillArr(arr1, n, bottomLimit, topLimit);
arr2 = fillArr(arr2, n, bottomLimit, topLimit);
console.log("arr1 = ", arr1);
console.log("arr2 = ", arr2);

//Определение условий для третьего массива
condition2 = n - 1;
condition3 = Math.round(n / 2);

//Заполнение третьего массива
for(let i = 0; i < arr1.length; i++) {              
    if(i === 1 || i === condition2 || i === condition3) {
        arr3[i] = arr2[i];
    }
    else {
        arr3[i] = arr1[i];
    }
}

console.log("arr3 = ", arr3);


//Задача #2
console.log("\nЗадача №2");

// let number = Number(prompt("Ввведите число:"));
let number = 123456789;
let discharge = 0;

//Функция определения розряда числа
const findDischarge = (InNumber, InDischarge) => {
    let condition = InNumber - (InNumber % 10); // одно из условий проверки числа

    //Цикл определения разряда числа
    while(InNumber > 0 && condition >= 0) {
        InDischarge++;
        InNumber = (InNumber - InNumber % 10) / 10;
    }

    return InDischarge;
}

discharge = findDischarge(number, discharge);

console.log("Вы ввели число: ", number);
console.log("Кол-во разрядов = ", discharge);


//Задача #3
console.log("\nЗадача №3");

let x = 6; //размер матрицы
let sum = null;

//Функция подсчета суммы побочной диагонали матрицы
const calMartSum = (matrSize) => {
    let squareMatrix = new Array();
    let matrSum = null;
    let limit1 = 14;
    let limit2 = -1;
    let k = 0; //индекс определяющий элемент в многомерном массиве 

    //Цикл заполнения многомерного массива
    for(let i = 0; i < matrSize; i++) {
        squareMatrix[i] = new Array(matrSize);
    
        for(let j = 0; j < matrSize; j++) {
            squareMatrix[i][j] = selfRandom(limit1, limit2); //selfRandom функция взята из первой задачи
        }
    }
    
    //Цикл подсчета суммы побочной диагонали
    for(let i = matrSize - 1; i >= 0; i--) {
        matrSum += squareMatrix[i][k];
        k++;
    }

    console.log("Квадратная матрица", squareMatrix);
    return matrSum;
}

sum = calMartSum(x);

console.log("Cумма элементов побочной диагонали = ", sum);