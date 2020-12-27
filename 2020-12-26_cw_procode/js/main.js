//Задание 1
// let arr = [];
// let arrSize = 5;

//решение Задачи 1
// const createMatrix = (size) => {
//     for(let i = 0; i < size; i++) {
//         arr[i] = new Array;

//         for(let j = 0; j < size; j++) {
//             arr[i][j] = j;
//         }
//     }
// }
// console.log(arr);

//решение Задачи 2
// const createMatrix = (size) => {
//     for(let i = 0; i < size; i++) {
//         arr[i] = new Array;

//         for(let j = 0; j < size; j++) {
//             arr[i][j] = null;
//         }
//     }
// }
// console.log(arr);

//решение Задачи 3
// let count = null;

// const createMatrix = (size) => {
//     for(let i = 0; i < size; i++) {
//         arr[i] = new Array;

//         for(let j = 0; j < size; j++) {
//             (j % 2 === 0) ? arr[i][j] = j : arr[i][j] = null;
//         }
//     }
// }

// const calNotEmptCell = (array) => {
//     array.forEach(firstInd => {
//         firstInd.forEach(secondInd => {
//             if(!(secondInd === null || secondInd === "")) {
//                 count++;
//             }
//         })
//     });
// }



// createMatrix(arrSize);
// arr[2][4] = "";
// calNotEmptCell(arr);
// console.log(count);
// console.table(arr);

//решение Задачи 4
// let arr = [];
// arr.length = 5;
// let count = null;
// let cellHeight = 50;
// let cellWidth = 50;
// let field = document.querySelector(".field");
// field.style.height = `${cellHeight * arr.length}px`;
// field.style.width = `${cellWidth * arr.length}px`;
// let allCell;

// const createMatrix = () => {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = new Array;

//         for(let j = 0; j < arr.length; j++) {
//             (j % 2 === 0) ? arr[i][j] = j : arr[i][j] = null;
//         }
//     }
// }

// const createField = () => {
//     arr.forEach(firstInd => {
//         firstInd.forEach(secondInd => {
//             if(!(secondInd === null || secondInd === "")) {
//                 count++;
//                 field.innerHTML += `<div></div>`;
//             }
//             else {
//                 field.innerHTML += `<div class="white"></div>`;
//             }

//         })
//     });

//     field.innerHTML += `<br>Кол-во не нулевых ячеек = ${count}`;
// }

// const colour = () => {
//     allCell.forEach(elem => {
//         elem.style.height = "50px";
//         elem.style.width = "50px";

//         if(elem.className === "white") elem.style.backgroundColor = "white";
//     })
// }


// createMatrix();
// // arr[2][4] = "";
// console.table(arr);
// createField();
// allCell = field.querySelectorAll("div");
// colour();

let arrowArr = ["&larr;", "&uarr;", "&rarr;", "&darr;"];
let arrows = document.querySelector(".arrows");

const createArrows = () => {
    let count = 0;

    arr.forEach(elem => {
        arrows.innerHTML += `<div class="${arrowArr[count]}"></div>`;
        count++
    });

    // field.innerHTML += `<br>Кол-во не нулевых ячеек = ${count}`;
}