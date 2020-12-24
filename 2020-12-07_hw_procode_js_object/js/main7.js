/*
На заводе выпускаются автомобили со следующими конфигурациями:
-цвет кузова: желтый, зеленый, красный, синий, оранжевый;
-коробка передач: автоматическая, ручная;
-кондиционер: установлен, отсутствует;
-отделка салона: кожа, ткань, комбинированная.
Задача: описать в объекте все возможные конфигурации автомобилей, при этом на каждой конфигурации
указать код формата: XXXXYZWV, где: XXXX- порядковый номер конфигурации, Y- цвет кузова, Z-коробка передач, W- кондиционер, V-отделка салона.
*/
let carsCatalog = new Object();
let carArr = new Array();
carsCatalog = {carArr};
let carsColorArr =["yellow", "green", "red", "blue", "orange"];
let transmArr = ["manual", "auto"];
let airСondArr = ["set", "not set"];
let inteDecArr = ["leather", "fabric", "combined"];
let carCouunt = 0;
let carCodeLength = 8;

//Конструктор создания объекта автомобиль
function Car(color, transmition, aircondition, salon) {
    this.color = color;
    this.transmition = transmition;
    this.aircondition = aircondition;
    this.salon = salon;
}

//Цикл создания возможных конфигураций автомобиля
carsColorArr.forEach(col => {
    transmArr.forEach(tra => {
        airСondArr.forEach(air => {
            inteDecArr.forEach(inte => {
                carCouunt++;
                let car = new Object();
                car.color = col;
                car.transmition = tra;
                car.aircondition = air;
                car.salon = inte;
                car.code = `${carCouunt}${col[0]}${tra[0]}${air[0]}${inte[0]}`;
                car.code = car.code.padStart(carCodeLength, "0").toUpperCase();
                carsCatalog.carArr.push(car);
            })
        })
    })
});

// carsColorArr.forEach(col => {
//     transmArr.forEach(tra => {
//         airСondArr.forEach(air => {
//             inteDecArr.forEach(inte => {
//                 carCouunt++;
//                 let car = new Car(col, tra, air, inte);
//                 car.code = `${carCouunt}${col[0]}${tra[0]}${air[0]}${inte[0]}`;
//                 car.code = car.code.padStart(carCodeLength, "0").toUpperCase();
//                 carsCatalog.carArr.push(car);
//             })
//         })
//     })
// });

console.log(carsCatalog);