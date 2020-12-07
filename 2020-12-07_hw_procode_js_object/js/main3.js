let carsCatalog = new Object();
let carArr = new Array();
let commonCarVariant = null;
let carsColorArr = ["yellow", "green", "red", "blue", "orange"];
let transmArr = ["manual", "auto"];
let airСondArr = ["set", "not set"];
let inteTrimArr = ["leather", "fabric", "combined"];
let carsColVariant = null;
let carCount = 0;

const addColor = (color, modelsNum, count) => {

    for(let i = 0; i < modelsNum; i++) {
        carArr[count].color = color;
        count++;
    }

    return count;
}

const addTransm = (transm, modelsNum, count) => {

    for(let i = 0; i < modelsNum; i++) {
        carArr[count].transmission = transm;
        count++;
    }

    return count;
}

const addCond = (cond, modelsNum, count) => {

    for(let i = 0; i < modelsNum; i++) {
        carArr[count].airСonditioning  = cond;
        count++;
    }

    return count;
}

const addTrim = (trim, modelsNum, count) => {

    for(let i = 0; i < modelsNum; i++) {
        carArr[count].interiorTrim = trim;
        count++;
    }

    return count;
}

//Cчитаем кол-во возможных моделей автомобилей
carsColVariant = transmArr.length * airСondArr.length * inteTrimArr.length;

// //считаем кол-во возможных моделей автомобилей
commonCarVariant = carsColorArr.length * transmArr.length * airСondArr.length * inteTrimArr.length;

for(let i = 0; i < commonCarVariant; i++) {
    carArr[i] = new Object();
}

for(let i = 0; i < carsColorArr.length; i++) {
    carCount = addColor(carsColorArr[i], carsColVariant, carCount);
}

carCount = 0;
for(let i = 0; i < transmArr.length; i++) {
    carCount = addTransm(transmArr[i], carsColVariant / transmArr.length, carCount);
}

carCount = 0;
for(let i = 0; i < airСondArr.length; i++) {
    carCount = addCond(airСondArr[i], carsColVariant / airСondArr.length, carCount);
}

carCount = 0;
for(let i = 0; i < inteTrimArr.length; i++) {
    carCount = addTrim(inteTrimArr[i], carsColVariant / inteTrimArr.length, carCount);
}

console.log(carArr);

// for(let i = 0; i < commonCarVariant; i++) {
//     if(carArr[i].color === "red") console.log(carArr[i]);
// }