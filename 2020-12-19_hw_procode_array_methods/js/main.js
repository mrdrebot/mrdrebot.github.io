/*
Домашка на  субботу  19-12-2020:  1)Исходный массив [5, 23, -110, 3, 18, 0, 14], данные в нём не менять:
a.Вывести в консоль только нечетные числа;
b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20;
c.Вывести в консоль массив, состоящий только из положительных нечетных чисел;
d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки.
e.Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5.

2)a.Получить массив без первого элемента, вывести в консоль;
b.Отсортировать массив по возрастанию, вывести в консоль;
c. Определить, есть ли в массиве числа, кратные 5.
*/

let valArr = [5, 23, -110, 3, 18, 0, 14];

//Задание 1(a)
console.log("Задание 1(a)");
valArr.forEach(elem => {
    if(elem % 2 !== 0) console.log(elem);
});

//Задание 1(b)
console.log("Задание 1(b)");
let valArrMap = valArr.map(elem => elem + 20);
console.log(valArrMap);

//Задание 1(c)
console.log("Задание 1(c)");
let valArrFilter = valArr.filter((elem) => (elem > 0 && elem % 2 !== 0));
console.log(valArrFilter);

//Задание 1(d)
console.log("Задание 1(d)");
let valArrMapRed = valArr.reduce((sum, elem) => sum + Math.round(elem / 3), 0);
console.log(valArrMapRed);

//Задание 1(e)
console.log("Задание 1(e)");
console.log(valArr.includes(5, 0));

//Задание 2(a)
console.log("Задание 2(a)");
valArr.shift();
console.log(valArr);

//Задание 2(b)
console.log("Задание 2(b)");
console.log(valArr.sort((a, b) => {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
}));

//Задание 2(c)
console.log("Задание 2(c)");
let foundElemArr = valArr.some(elem => (elem % 5 === 0 && elem !== 0));
console.log(foundElemArr);