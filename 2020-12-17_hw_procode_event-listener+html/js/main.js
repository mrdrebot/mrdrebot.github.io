let base = document.querySelector(".container");
let insideBase = "";
let rowNum = 10;
let colNum = 10;
let firstBoardCol = "#C8924A";
let secondBoardCol = "#F2D19D";
let chessRow = 3;
let numSquers = null;
let frameAround = 50;
let squaresInside = 70;
let correctBaseWidth = null;
let columnCouner = 0;
let rowCounter = 0;
let chessArr = ["&#9823;", "&#9820;", "&#9822;", "&#9821", "&#9819;", "&#9818;", "&#9821", "&#9822;", "&#9820;"];
let startPointBlack = null;
let endPointBlack = null;
let endPointWhite = null;
let charsArr = ["A", "B", "C", "D", "E", "F", "G", "H"];
let numbArr = ["1", "2", "3", "4", "5", "6", "7", "8"];

//Функция присвоения х-к квадратам доски
const squareParam = (index, height, width, color) => {
    boardSquares[index].style.height = `${height}px`;
    boardSquares[index].style.width = `${width}px`;
    boardSquares[index].style.backgroundColor = color;
}

//Задаем свойства основы и размеры
base.style.display = "flex";
base.style.flexWrap = "wrap";

//Определяем кол-во клеток доски
numSquers = rowNum * colNum;

//Создаем HTML разметку доски, с учетом краев
for(let i = 0; i < numSquers; i++) {
    insideBase += `<div></div>`;
}

//Вывод HTML разметки в контейнер
base.innerHTML = insideBase;

//Собираем все клетки в один массив
let boardSquares = base.querySelectorAll("div");

//Задаем размер клеток
rowCounter = 0;
columnCouner = 0;

for(let i = 0; i < boardSquares.length; i++) {
    if(i === 0 || i === (colNum - 1) || i === (numSquers - 1) || i === (numSquers - colNum)) {
        squareParam(i, frameAround, frameAround, firstBoardCol);
    }
    else if(i < colNum || i >= ((colNum - 1) * rowNum)) {
        squareParam(i, frameAround, squaresInside, firstBoardCol);
    }
    else if(i % rowNum === 0 || i % rowNum === 9) {
        squareParam(i, squaresInside, frameAround, firstBoardCol);
    }
    else {
        squareParam(i, squaresInside, squaresInside, secondBoardCol);
        boardSquares[i].className = `x=${columnCouner % 8} y=${rowCounter % 8}`;
        columnCouner++;
        
        if(columnCouner % 8 === 0) rowCounter++;
    }

    boardSquares[i].style.fontSize = "70px";
}

//Корректировка размера доски
for(let i = 0; i < colNum; i++) {
    correctBaseWidth += Number(boardSquares[i].style.width.slice(0,2));
}

//Изменение размера ширины доски
base.style.width = `${correctBaseWidth}px`;

//Закраска клеток
for(i = colNum; i < numSquers - colNum; i++) {
    if((i % colNum !== 0) && (i % colNum !== 9) && (i % 2 === 0) && (rowCounter % 2 === 0)) {
        boardSquares[i].style.backgroundColor = firstBoardCol;
    }
    else if((i % colNum !== 0) && (i % colNum !== 9) && (i % 2 !== 0) && (rowCounter % 2 !== 0)) {
        boardSquares[i].style.backgroundColor = firstBoardCol;
    }
        
    if(i % rowNum === 9) {
        rowCounter++;
    }
}

//Расстановка букв
for(i = 1; i < colNum - 1; i++) {
    boardSquares[i].innerHTML = charsArr[i - 1];
    boardSquares[i].style.fontSize = "50px";
    boardSquares[i].style.textAlign = "center";
}

endPointBlack = numSquers - colNum;
for(i = endPointBlack + 1; i < numSquers - 1; i++) {
    boardSquares[i].innerHTML = charsArr[i - 1 - endPointBlack];;
    boardSquares[i].style.fontSize = "50px";
    boardSquares[i].style.textAlign = "center";
}

//Расстановка цифр
rowCounter = 0;
for(i = rowNum; i < numSquers - rowNum; i++) {
    if(i % rowNum === 0 || i % rowNum === 9) {
        if(i % 2 === 0) {
            boardSquares[i].innerHTML = numbArr[rowCounter];
        }
        else {
            boardSquares[i].innerHTML = numbArr[rowCounter];
            rowCounter++;
        }

        boardSquares[i].style.fontSize = "50px";
        boardSquares[i].style.textAlign = "center";
    }
}

//Расстановка белых шахмат
endPointWhite = chessRow * colNum;
rowCounter = 0;

for(i = colNum; i <endPointWhite; i++) {
    if((i % colNum !== 0) && (i % colNum !== 9) && (rowCounter % 2 === 0)) {
        boardSquares[i].innerHTML = chessArr[i % colNum];
    }
    else if((i % colNum !== 0) && (i % colNum !== 9) && (rowCounter % 2 !== 0)) {
        boardSquares[i].innerHTML = chessArr[0];
    }
        
    if(i % rowNum === 9) {
        rowCounter++;
    }

    boardSquares[i].style.color = "#FFFFFF";
}

//Расстановка черных шахмат
startPointBlack = numSquers - (chessRow * colNum);
rowCounter = 0;

for(i = startPointBlack; i < endPointBlack; i++) {
    if((i % colNum !== 0) && (i % colNum !== 9) && (rowCounter % 2 === 0)) {
        boardSquares[i].innerHTML = chessArr[0];
    }
    else if((i % colNum !== 0) && (i % colNum !== 9) && (rowCounter % 2 !== 0)) {
        boardSquares[i].innerHTML = chessArr[i % colNum];
    }
        
    if(i % rowNum === 9) {
        rowCounter++;
    }

    boardSquares[i].style.color = "#000000";
}

//Вывод координаты нажатия клетки
base.addEventListener("click", (event) => {
    console.log(`Вы нажали на клетку ${charsArr[Number(event.target.className.slice(2,4))]}${numbArr[Number(event.target.className.slice(6))]}`);
});