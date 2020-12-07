// const cat = {
//     species: "bomj",
//     name: "Jora",
//     color: "black",
//     age: 15,
//     weight: 5,
//     behavior: (state) => {
//         switch(state) {
//             case "hungre":
//                 console.log("Myau! Myau! Myau!");
//                 break;
//             case "satisfied":
//                 console.log("Mur ......");
//                 break;
//             case "angry":
//                 console.log("Sh...............!!!!");
//         }
//     },

// };

// cat.behavior("angry");

//Задача №2

// const userNames = ['Peter', 'Victor', 'Alex', 'Maks', 'Andrii', 'Eugene'];
// let ageStart = 10;
// let ageEnd = 80;
// let nameStart = 0;
// let nameEnd = userNames.length - 1;
// let userNumber = 10;
// const usersArr = [];

// //Генератор данных
// const addValue = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// //Заполнение массива объектов
// for(let i = 0; i < userNumber; i++) {
//     usersArr[i] = new Object();
//     usersArr[i].name = userNames[addValue(nameStart,nameEnd)];
//     usersArr[i].age = addValue(ageStart,ageEnd);
// }

// console.log(usersArr);

//Задача №3

const userNames = ['Peter', 'Victor', 'Alex', 'Maks', 'Andrii', 'Eugene'];
let ageStart = 10;
let ageEnd = 80;
let nameStart = 0;
let nameEnd = userNames.length - 1;
let userNumber = 10;
const usersArr = [];

//Конструктор создания пользователей
function NewUser() {
    this.name = userNames[addValue(nameStart,nameEnd)];
    this.age = addValue(ageStart,ageEnd);
};

//Генератор данных
const addValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Заполнение массива объектов
for(let i = 0; i < userNumber; i++) {
    usersArr[i] = new NewUser();
}

console.log(usersArr);