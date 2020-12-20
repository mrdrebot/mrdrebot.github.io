let carsCatalog = new Object();
let carArr = new Array();
let commonCarVariant = null;
let carsColorArr =["yellow", "green", "red", "blue", "orange"];
let transmArr = ["manual", "auto"];
let transmCount = -1;
let airСondArr = ["set", "not set", "test", "test2"];
let airСondCount = -1;
let inteDecArr = ["leather", "fabric", "combined", "test"];
let inteDecCount = -1;
let oneColCarVari = null;
let countEven = null;

//Cчитаем кол-во возможных вариантов моделей автомобилей одного цвета
oneColCarVari = transmArr.length * airСondArr.length * inteDecArr.length;
console.log(oneColCarVari);

//Считаем общее кол-во возможных вариантов машин
commonCarVariant = carsColorArr.length * transmArr.length * airСondArr.length * inteDecArr.length;
console.log(commonCarVariant);

// for(let i = 0; i < commonCarVariant; i++) {
//     carArr[i] = new Object();
//     carArr[i].color = carsColorArr[i % carsColorArr.length];
// }

for(let i = 0; i < oneColCarVari; i++) {
    carArr[i] = new Object();
    carArr[i].color = carsColorArr[0];
}

// for(let i = 0; i < oneColCarVari; i++) {
//     carArr[i] = new Object();
//     carArr[i].color = carsColorArr[0];

// }

// console.log(carArr);

// for(let i = 0; i < oneColCarVari; i++) {
//     carArr[i] = new Object();
//     carArr[i].color = carsColorArr[0];
    
//     if(inteDecArr.length % 2 === 0) countEven++;
//     // if(inteDecArr.length % 2 === 0 && countEven % 2 === 0) {
//     if(inteDecArr.length % 2 === 0) {
//         if(i % (oneColCarVari / inteDecArr.length) === 0) {
//             inteDecCount++;
//         }
    
//         carArr[i].inteDec = inteDecArr[inteDecCount];
//     }
//     else {
//         carArr[i].inteDec = inteDecArr[i % inteDecArr.length];
//     }

//     if(transmArr.length % 2 === 0) countEven++;
    
//     // if(transmArr.length % 2 === 0 && countEven % 2 === 0) {
//         if(transmArr.length % 2 === 0) {
//             if(i % (oneColCarVari / transmArr.length) === 0) {
//                 transmCount++;
//         }  

//         carArr[i].transmission = transmArr[transmCount];
//     }
//     else {
//         carArr[i].transmission = transmArr[i % transmArr.length];
//     }

//     if(airСondArr.length % 2 === 0) countEven++;

//     // if(airСondArr.length % 2 === 0 && countEven % 2 === 0) {
//     if(airСondArr.length % 2 === 0) {
//         if(i % (oneColCarVari / airСondArr.length) === 0) {
//             airСondCount++;
//         }

//         carArr[i].airСond = airСondArr[airСondCount];
//     }
//     else {
//         carArr[i].airСond = airСondArr[i % airСondArr.length];
//     }

    
//     // carArr[i].transmission = transmArr[i % transmArr.length];
//     // carArr[i].airCondition = airСondArr[i % airСondArr.length];
//     // carArr[i].interiorDecoration = inteDecArr[i % inteDecArr.length];
// }

console.log(carArr);