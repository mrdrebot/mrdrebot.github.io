//Задача №1
// let arr = [12, 5, 2, 77, 14, 9];
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2;
// }

// console.log(arr);

//Задача №2
// let arr = [12, 5, 2, 77, 14, 9];
// let sum = null;

// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);

//Задача№3
// let arr = [[1, 2], [4, 5], [3, 87], [1, 34], [98, 12], [0, 33]];
// let index = 0;
// console.log(arr[3].length);
// console.table(arr);

// for(let i = 0; i < arr.length; i++) {
//     arr[i][index] *= 3;
// }

// console.table(arr);

//Задача№4
// let arr = [
//     [20,  2,   7,   19,  4],
//     [16,  14,  12,  17,  15],
//     [15,  19,  2,   14,  6],
//     [7,   3,   15,  7,   14],
//     [9,   0,   20,  1,   12],
// ];

// for (let i = 0; i < arr.length; i++) {
//     arr[i][i] *= 3;
// };

// console.table(arr);

//Задача№5
let arr = [
    [20,  2,   7,   19,  4],
    [16,  14,  12,  17,  15],
    [15,  19,  2,   14,  6],
    [7,   3,   15,  7,   14],
    [9,   0,   20,  1,   12],
];

for (let i = 0; i < arr.length; i++) {
        arr[i][arr.length - i - 1] *= 3;
};

console.table(arr);