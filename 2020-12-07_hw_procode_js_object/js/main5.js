let carsCatalog = new Object();
let carArr = new Array();
let commonCarVariant = null;
let carsColorArr = ["yellow", "green", "red", "blue", "orange", "test1"];
let inteTrimArr = ["leather", "fabric", "combined", "test2"];
let transmArr = ["manual", "auto"];
let airСondArr = ["set", "not set"];
let carsColVariant = null;
let carCount = 0;

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

const addTransm = (transm, modelsNum, count) => {

    for(let i = 0; i < modelsNum; i++) {
        carArr[count].transmission = transm;
        count++;
    }

    return count;
}

//Функция создания модельного ряда автомобилей
const createCar = (color, modelsNum, count) => {

    for(let i = 0; i < modelsNum; i++) {
        carArr.push(new Object());
        carArr[count].color = color;
        carArr[count].interiorTrim = inteTrimArr[i % inteTrimArr.length];
        carArr[count].transmission = transmArr[i % transmArr.length];
        carArr[count].airСonditioning = airСondArr[i % airСondArr.length];
        createNum(count);
        count++;
    }

    return count;
}


//Cчитаем кол-во возможных моделей автомобилей
carsColVariant = transmArr.length * airСondArr.length * inteTrimArr.length;

//считаем кол-во возможных моделей автомобилей
commonCarVariant = carsColorArr.length * transmArr.length * airСondArr.length * inteTrimArr.length;

for(let i = 0; i < carsColorArr.length; i++) {
    carCount = createCar(carsColorArr[i], carsColVariant, carCount);
}

console.log(carArr);

for(let i = 0; i < commonCarVariant; i++) {
    if(carArr[i].color === "red") console.log(carArr[i]);
}