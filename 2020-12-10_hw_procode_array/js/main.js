let arr1 = [];
let arr1Size = 5;
let arrMinVal = 0;
let arrMaxVal = 12;
let sum = null;
let temp = null;
let column1 = 0;    //столбец 1
let column2 = 1;    //столбец 2
let tempSum = null;
let chooseColumn = null;


//Генератор значения матрицы
const arrVal = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Заполнение матрицы значениями
for(let i = 0; i < arr1Size; i++) {
    arr1[i] = [];
    for(let j = 0; j < arr1Size; j++) {
        arr1[i][j] = arrVal(arrMinVal, arrMaxVal);
    }
}

console.table(arr1);

//Подсчет суммы основной диагонали
for(let i = 0; i < arr1.length; i++) {
    sum += arr1[i][i];
}

console.log("Cумма основной диагонали = ", sum);

//Подсчет суммы побочной диагонали
sum = 0;    //обнуления значения суммы

for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i][arr1.length - i - 1];
};

console.log("Cумма побочной диагонали = ", sum);

//Замена местами первого и второго столбца
for(let i = 0; i < arr1.length; i++) {
    temp = arr1[i][column1];
    arr1[i][column1] = arr1[i][column2];
    arr1[i][column2] = temp;
}

console.table(arr1);

//Определение столбца с максимально суммой 
sum = 0;    //обнуления значения суммы

for(let j = 0; j < arr1.length; j++) {
    tempSum = 0;

    for(let i = 0; i < arr1.length; i++) {
        tempSum += arr1[i][j];
    }

    if(tempSum > sum) {
        sum = tempSum;
        chooseColumn = j;
    }
}

console.log(`Самое большая сумма (${sum}) чисел в колонке ${chooseColumn + 1} (index ${chooseColumn})`);

//Заполнение "0" стоблцов 
for(let i = 0; i < arr1Size; i++) {
    for(let j = 0; j < arr1Size; j++) {
        if(j === chooseColumn) {
            continue;
        }
        else {
            arr1[i][j] = 0;
        }
    }
}

console.table(arr1);