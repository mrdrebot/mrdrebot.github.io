let carsCatalog = new Object();
let carArr = new Array();
let commonCarVariant = null;
let carsColorArr =["yellow", "green", "red", "blue", "orange"];
let transmArr = ["manual", "auto"];
let airСondArr = ["set", "not set"];
let airСondArrCount = 0;
let inteTrimArr = ["leather", "fabric", "combined"];
let carsColVariant = null;
// let carsColVariantObj = null;

//Cчитаем кол-во возможных моделей автомобилей
carsColVariant = transmArr.length * airСondArr.length * inteTrimArr.length;

// carsColVariantObj = new Object();

for(let i = 0; i < carsColVariant; i++) {
    carArr[i] = new Object();
    carArr[i].color = carsColorArr[0];

    // if(i % transmArr.length === 0) {
        carArr[i].transmArr = transmArr[i % transmArr.length]
    // }
    if(transmArr.length % 2 === 0) {
        if(airСondArrCount !== transmArr.length) {
            carArr[i].airСondArr = airСondArr[i % airСondArr.length];
            airСondArrCount++;
        }
    }
    else {
        carArr[i].airСondArr = airСondArr[i % airСondArr.length];
    }
}

console.log(carArr);