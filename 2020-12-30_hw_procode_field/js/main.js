/*
Задания на понедельник 28-12-2020:
1) cгенерируй 2м массив, константа сторона поля, например, равна 5;
2) напиши функцию очистки массива, заполнить null;
3) напиши функцию подсчета ненулевых(непустых) клеток во всём массиве;
4) отобрази на странице игровое поле(клетки массива) и строку статуса, в которой будет написано количество ненулевых клеток. Нулевые клетки закрашены белым цветом (render);
5) покажи на странице 4 html кнопки-стрелки: "вверх", "вниз", "влево", "вправо";
6) сделай управление мышкой и клавиатурой, там где находится курсор (курсор- это любая клетка поля), закрашиваем клетку синим цветом;
7) на игровом поле сделать отображение следа на клетках после курсора оранжевым цветом. В соответствующих ячейках массива где след писать "2". След весь от начала игры;
8) сделай отключение соответствующих кнопок управления, если курсор с краю поля или наступает на свой след;
9) сделай обработку ситуации GAME OVER, когда нет куда ходить, отобразить на странице надпись GAME OVER;
10) добавь таймер на 10 секунд, если не сделал ход, GAME OVER.
Первоначальное положение курсора в левом верхнем углу. В массиве, в соответствующую ячейку писать "1". Уход с клетки возвращает значение null;
*/

let arr = [];
arr.length = 5;
let coordX = 0;                                         //  Начальное положение синей ячейки, ось х
let coordY = 0;                                         //  Начальное положение синей ячейки, ось у
let coordXPrev = null;                                  //  Предыдущее положение  положение синей ячейки, ось х
let coordYPrev = null;
let cellHeight = 50;
let cellWidth = 50;
let celBordThick = 1;                                    //  Толщина рамки ячеек
let moveCellColor = "blue";
let prevCellColor = "orange";
let field = document.querySelector(".field");

field.style.height = `${cellHeight * arr.length}px`;
field.style.width = `${cellWidth * arr.length}px`;
field.style.boxSizing = "border-box";

let allCell;                                             //  Массив ячеек поля
let message = document.querySelector(".message");
let arrows = document.querySelector(".arrows");
let btns = Array.from(arrows.querySelectorAll(".btn"));
let arrowUp = document.querySelector(".btn.up");
let arrowLeft = document.querySelector(".btn.left");
let arrowRight = document.querySelector(".btn.right");
let arrowDown = document.querySelector(".btn.down");
let gameOverTimer;

//  Функция создания массива (квадратной матрицы)
const createMatrix = (x, y) => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = new Array;
        
        for(let j = 0; j < arr.length; j++) {
            (i === y && j === x) ? arr[i][j] = 1 : arr[i][j] = null;
        }
    }
}

//  Функция обновления массива (квадратной матрицы)
const updateMatrix = (x1, y1, x2, y2) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i === y1 && j === x1) arr[i][j] = 1;

            if(i === y2 && j === x2) arr[i][j] = 2;
        }
    }
}

//  Функция создания и наполнение html-кодом поля
const renderField = () => {
    let count = 0;
    let indX = null;
    let indY = null;

    // Обнуление поля
    field.innerHTML = "";
    message.innerHTML = "";

    arr.forEach(firstInd => {
        indY++;
        firstInd.forEach(secondInd => {
            if(indX % 5 === 0) indX = 0;
            
            indX++;

            if(secondInd === 1) {
                count++;
                field.innerHTML += `<div class="indX${indX} indY${indY} ${moveCellColor}"></div>`;
            }
            else if(secondInd === 2) {
                count++;
                field.innerHTML += `<div class="indX${indX} indY${indY} ${prevCellColor}"></div>`;
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
        elem.style.boxSizing = "inherit";

        if(elem.classList.contains(`${moveCellColor}`)) {
            elem.style.backgroundColor = `${moveCellColor}`;
        }
        else if(elem.classList.contains(`${prevCellColor}`)) {
            elem.style.backgroundColor = `${prevCellColor}`;
        }
    })
}

//  Функция вызова трех функций "updateMatrix", "renderField" и "colour"
const updateField = (a1, b1, a2, b2) => {
    updateMatrix(a1, b1, a2, b2);
    renderField();
    colour();
}

//  Функция блокировки кнопок перемещения
const btnBlock = (x, y) => {

    if(y - 1 < 0) {
        arrowUp.disabled = true;
    }
    else {
        if(arr[y - 1][x] === 2) {
            arrowUp.disabled = true;
        }
        else {
            arrowUp.disabled = false;
        }
    }

    if(x - 1 < 0) {
        arrowLeft.disabled = true;
    }
    else {
        if(arr[y][x - 1] === 2) {
            arrowLeft.disabled = true;
        }
        else {
            arrowLeft.disabled = false;
        }
    }

    if(x + 1 > arr.length - 1) {
        arrowRight.disabled = true;
    }
    else {
        if(arr[y][x + 1] === 2) {
            arrowRight.disabled = true;
        }
        else {
            arrowRight.disabled = false;
        }
    }

    if(y + 1 > arr.length - 1) {
        arrowDown.disabled = true;
    }
    else {
        if(arr[y + 1][x] === 2) {
            arrowDown.disabled = true;
        }
        else {
            arrowDown.disabled = false;
        }
    }
}

//  Создание начального состояния поля
createMatrix(coordX, coordY);
renderField();
colour();
btnBlock(coordX, coordY);
gameOverTimer = setTimeout(() => {
    btns.forEach(arrow => arrow.disabled = true);
    field.innerHTML += "<div class=\"game-over\">Game over!</div>";

}, 10000);

//  Обработчик нажатия кнопок на экране
arrows.addEventListener ("click", (event) => {
    //  Сброс таймера окончания игры
    clearTimeout(gameOverTimer);                    
    //  Входящие координаты
    coordXPrev = coordX;
    coordYPrev = coordY;
    
    //  Перемещение синей ячейки
    if(event.target.classList.contains("up")) {
        if(coordY - 1 >= 0) {
            coordY = coordY - 1;
            updateField(coordX, coordY, coordXPrev, coordYPrev);
        }
    }
    else if(event.target.classList.contains("left")) {
        if(coordX - 1 >= 0) {
            coordX = coordX - 1;
            updateField(coordX, coordY, coordXPrev, coordYPrev);
        }
    }
    else if(event.target.classList.contains("right")) {
        if(coordX + 1 < arr.length) {
            coordX = coordX + 1;
            updateField(coordX, coordY, coordXPrev, coordYPrev);
        }
    }
    else if(event.target.classList.contains("down")){
        if(coordY + 1 < arr.length) {
            coordY = coordY + 1;
            updateField(coordX, coordY, coordXPrev, coordYPrev);
        }
    }
    
    btnBlock(coordX, coordY);

    //  Проверка возможности продолжения игры 
    if(btns.every(arrow => arrow.disabled === true)) {
        field.innerHTML += "<div class=\"game-over\">Game over!</div>";
    }

    gameOverTimer = setTimeout(() => {
        btns.forEach(arrow => arrow.disabled = true);
        field.innerHTML += "<div class=\"game-over\">Game over!</div>";

    }, 10000);
});

//  Обработчик нажатия кнопок на клавиатуре, движение синей ячейки
document.addEventListener ("keydown", (event) => {
    clearTimeout(gameOverTimer);
    coordXPrev = coordX;
    coordYPrev = coordY;
    
    //  Перемещение ячейки по полю
    switch(event.code){
        case "ArrowUp":
            if(!arrowUp.disabled) {
                if(coordY - 1 >= 0) {
                    coordY = coordY - 1;
                    updateField(coordX, coordY, coordXPrev, coordYPrev);
                }
            }
            break;
        case "ArrowLeft":
            if(!arrowLeft.disabled) {
                if(coordX - 1 >= 0) {
                    coordX = coordX - 1;
                    updateField(coordX, coordY, coordXPrev, coordYPrev);
                }
            }
            break;
        case "ArrowRight":
            if(!arrowRight.disabled) {
                if(coordX + 1 < arr.length) {
                    coordX = coordX + 1;
                    updateField(coordX, coordY, coordXPrev, coordYPrev);
                }
            }
            break;
        case "ArrowDown":
            if(!arrowDown.disabled) {
                if(coordY + 1 < arr.length) {
                    coordY = coordY + 1;
                    updateField(coordX, coordY, coordXPrev, coordYPrev);
                }
            }
    }

    btnBlock(coordX, coordY);

    //  Проверка возможности продолжения игры 
    if(btns.every(arrow => arrow.disabled === true)) {
        field.innerHTML += "<div class=\"game-over\">Game over!</div>";
    }

    gameOverTimer = setTimeout(() => {
        btns.forEach(arrow => arrow.disabled = true);
        field.innerHTML += "<div class=\"game-over\">Game over!</div>";

    }, 10000);
});