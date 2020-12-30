/*
Задания на понедельник 28-12-2020:
1) cгенерируй 2м массив, константа сторона поля, например, равна 5;
2) напиши функцию очистки массива, заполнить null;
3) напиши функцию подсчета ненулевых(непустых) клеток во всём массиве;
4) отобрази на странице игровое поле(клетки массива) и строку статуса, в которой будет написано количество ненулевых клеток. Нулевые клетки закрашены белым цветом (render);
5) покажи на странице 4 html кнопки-стрелки: "вверх", "вниз", "влево", "вправо";
6) сделай управление мышкой и клавиатурой, там где находится курсор (курсор- это любая клетка поля), закрашиваем клетку синим цветом.
Первоначальное положение курсора в левом верхнем углу. В массиве, в соответствующую ячейку писать "1". Уход с клетки возвращает значение null;
*/

let arr = [];
arr.length = 5;
let coordX = 0;                                         //  Начальное положение синей ячейки, ось х
let coordY = 0;                                         //  Начальное положение синей ячейки, ось у
let cellHeight = 50;
let cellWidth = 50;
let celBordThick = 1;                                    //  Толщина рамки ячеек
let notNullCellColor = "blue";
let field = document.querySelector(".field");
// console.log(window.document.width);
console.dir(window);
console.log(document.body.clientWidth);


field.style.height = `${(cellHeight + 2 * celBordThick) * arr.length}px`;
field.style.width = `${(cellWidth + 2 * celBordThick) * arr.length}px`;

let allCell;                                             //  Массив ячеек поля
let message = document.querySelector(".message");
let arrows = document.querySelector(".arrows");

//  Функция создания массива (квадратной матрицы)
const createMatrix = (x, y) => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = new Array;
        
        for(let j = 0; j < arr.length; j++) {
            (i === y && j === x) ? arr[i][j] = 1 : arr[i][j] = null;
        }
    }
}

//  Функция создания и наполнение html-кодом поля
const createField = () => {
    let count = 0;
    let indX = null;
    let indY = null;

    field.innerHTML = "";
    message.innerHTML = "";

    arr.forEach(firstInd => {
        indY++;
        firstInd.forEach(secondInd => {
            if(indX % 5 === 0) indX = 0;
            
            indX++;

            if(secondInd) {
                count++;
                field.innerHTML += `<div class="indX${indX} indY${indY} ${notNullCellColor}"></div>`;
            }
            else {
                field.innerHTML += `<div class="indX${indX} indY${indY}"></div>`;
            }
        })
    });
    
    message.innerHTML += `Кол-во не нулевых ячеек = ${count}`;
}

//  Функция присвоения свойств ячейкам
const colour = () => {
    allCell = field.querySelectorAll("div");

    allCell.forEach(elem => {
        elem.style.height = `${cellHeight}px`;
        elem.style.width = `${cellWidth}px`;
        elem.style.border = `${celBordThick}px solid black`;

        if(elem.classList.contains(`${notNullCellColor}`)) {
            elem.style.backgroundColor = `${notNullCellColor}`;
        }
    })
}

//  Функция вызова трех функций "createMatrix", "createField" и "colour"
const updateField = (a, b) => {
    createMatrix(a, b);
    createField();
    colour();
}

//  Создание начального состояния поля
updateField(coordX, coordY);

//  Изменение положения ячейки кликом мышки по полю (в задании нет)
field.addEventListener ("click", (event) => {
    coordX = Number(event.target.className.slice(4,5)) - 1;
    coordY = Number(event.target.className.slice(10,11)) - 1;
    updateField(coordX, coordY);
});

//  Обработчик нажатия кнопок на экране, движение синей ячейки
arrows.addEventListener ("click", (event) => {
    if(event.target.classList.contains("up")) {
        if(coordY - 1 >= 0) {
            coordY = coordY - 1;
            updateField(coordX, coordY);
        }
    }
    else if(event.target.classList.contains("left")) {
        if(coordX - 1 >= 0) {
            coordX = coordX - 1;
            updateField(coordX, coordY);
        }
    }
    else if(event.target.classList.contains("right")) {
        if(coordX + 1 < arr.length) {
            coordX = coordX + 1;
            updateField(coordX, coordY);
        }
    }
    else {
        if(coordY + 1 < arr.length) {
            coordY = coordY + 1;
            updateField(coordX, coordY);
        }
    }

});

//  Обработчик нажатия кнопок на клавиатуре, движение синей ячейки
document.addEventListener ("keydown", (event) => {
    switch(event.code){
        case "ArrowUp":
            if(coordY - 1 >= 0) {
                coordY = coordY - 1;
                updateField(coordX, coordY);
            }
            break;
        case "ArrowLeft":
            if(coordX - 1 >= 0) {
                coordX = coordX - 1;
                updateField(coordX, coordY);
            }
            break;
        case "ArrowRight":
            if(coordX + 1 < arr.length) {
                coordX = coordX + 1;
                updateField(coordX, coordY);
            }
            break;
        case "ArrowDown":
            if(coordY + 1 < arr.length) {
                coordY = coordY + 1;
                updateField(coordX, coordY);
            }
    }
});