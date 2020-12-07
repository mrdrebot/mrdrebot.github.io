let carsCatalog = new Object();
let carArr = new Array();
let commonCarVariant = null;
let carsColorArr =["yellow", "green", "red", "blue", "orange"];
let transmArr = ["manual", "auto"];
let airСondArr = ["set", "not set"];
let inteTrimArr = ["leather", "fabric", "combined"];


//Функция установки цвета автомобиля
const color = (index) => {
    carArr[index].color = carsColorArr[index % carsColorArr.length];
}

//Функция установки типа трансмисии
const carTransm = (index) => {
    carArr[index].transmission = transmArr[index % transmArr.length];
}

//Функция установки наличия кондиционера
const carAirСond = (index) => {
    if(index % (airСondArr.length + transmArr.length) < 2) {
        carArr[index].airСonditioning = airСondArr[0];
    }
    else {
        carArr[index].airСonditioning = airСondArr[1];
    }
}

//Функция установки отделки салона
const carInteTrim = (index) => {
    carArr[index].interiorTrim = inteTrimArr[index % inteTrimArr.length];
}

//Функция создания номера комплектации машины
const createNum = (index) => {
    carArr[index].number = "";

    if(index < 10) {
        carArr[index].number = `000${index}`;
    }
    else {
        carArr[index].number = `00${index}`;
    }

    carArr[index].number += `${carArr[index].color[0]}${(carArr[index].transmission[0])}${(carArr[index].airСonditioning[0])}${(carArr[index].interiorTrim[0])}`;
    carArr[index].number = carArr[index].number.toUpperCase();
}

//считаем кол-во возможных моделей автомобилей
commonCarVariant = carsColorArr.length * transmArr.length * airСondArr.length * inteTrimArr.length;

//Создание модельного ряда автомобилей
for(let i = 0; i < commonCarVariant; i++) {
    carArr[i] = new Object();
    color(i);
    carTransm(i);
    carAirСond(i);
    carInteTrim(i);
    createNum(i);
}

console.log(carArr);

for(let i = 0; i < commonCarVariant; i++) {
    if(carArr[i].color === "red") console.log(carArr[i]);
}