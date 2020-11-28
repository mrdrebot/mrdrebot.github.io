//1

// let s1 = 10 *15;
// let s2 = 20 * 20;
// let s3 = 100 * 20;


// const square = (a1, a2, a3) => {
//     return a1 *3 + a2 * 2 + a3;
// };

// s = square(s1, s2, s3)

// console.log("s = ", s);

// let a = 10;
// let b = 15;
// let c = 20;
// let d = 100;
// let s = null;

// const square = (x, y) => {
//     return x * y;
// };

// s = square(a, b) * 3 + square(c, c) * 2 + square(c, d);

// console.log("s = ", s);

// let a1 = 10;
// let b1 = 15;
// let a2 = b2 = b3 = 20;
// let a3 = 100;
// let s = null;

// const square = (x, y, i, j) => {
//     return x * y * 3 + i * i * 2 + i * j;
// };

// s = square(a1, b1, a2, a3);

// console.log("s = ", s);

// const square = (x, y, i, j) => {
//     return x * y * 3 + i * i * 4 + i * j;
// };

// s = square(10, 15, 20, 100);

// console.log("s = ", s);

//1
//2

// const count = (start, end, multiplicity) => {
//     let sum = null;

//     for(let i = start; i <= end; i++) {
//         if( i % multiplicity === 0) {
//             sum += i * i;
//         }
//     }

//     return sum;
// }

// console.log("sum = ", count(1, 100, 7));

// const count = (start, end) => {
//     let sum = null;

//     for(let i = start; i <= end; i = i + 7) {
//         sum += i * i;
//     }

//     return sum;
// }

// console.log("sum = ", count(7, 100));

//2
//3

// const check = (limit1, limit2, number) => {
//     return (limit1 < number && limit2 > number) ? true : false;
    //вариант 2
    // if(limit1 < number && number < limit2) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
// }

// console.log("Число попадает в заданый диапазон? ", check(-20, 40, 35));

//3
//4

// let a = 9991999;
// let b = String(a);
// let arr = new Array();

// for(let i = 0; i < b.length; i++) {
//     arr[i] = b[i];
// }

// console.log(arr);

let a = 9991999;
let arr = new Array();
let number = null;
let count = 0;

do {
    arr[count] = a % 10;
    a = a - a * 10;
    console.log(arr);
    count++;


} while(count !== 7);

    
console.log(count);

//4
