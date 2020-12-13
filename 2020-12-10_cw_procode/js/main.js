// const randomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const getArray = (rows, columns, minVal, maxVal) => {
//     let tempArr = [];
//     for(let i = 0; i < rows; i++) {
//         tempArr[i] = [];
//         for(let j = 0; j < columns; j++) {
//             tempArr[i][j] = randomInt(minVal, maxVal);
//         }
//     }

//     return tempArr;
// }

// let arr = getArray(5, 5, 0, 12);
// console.table(arr);


const randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const getArray = (rows, columns, min, max, minCol, maxCol) => {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++) {
            arr[i][j] = new Object();
            arr[i][j].id = `${i}${j}`;
            arr[i][j].value = randomInt(min, max);
            arr[i][j].color = `rgb(${randomInt(minCol, maxCol)}, ${randomInt(minCol, maxCol)}, ${randomInt(minCol, maxCol)})`;
        };
    };

    return arr;
};

let newArr = getArray(5, 5, 0, 12, 0, 255);

console.table(newArr);

// const copy2DArr = (arrIn) => {
//     let arr = [];
//     for (let i = 0; i < arrIn.length; i++) {
//         arr[i] = [];
//         for (let j = 0; j < arrIn[i].length; j++) {
//             arr[i][j] = arrIn[i][j];
//         };
//     };
//     return arr;
// };