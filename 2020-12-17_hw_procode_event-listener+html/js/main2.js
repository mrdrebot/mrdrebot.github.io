let base = document.querySelector(".container");
let insideBase = "";
let rowNum = 10;
let colNum = 10;
let frameAround = 30;
let squaresInside = 70;
// let border = 0;

//Создаем HTML разметку доски, с учетом краев
for(let i = 0; i < rowNum; i++) {
    let insideRow = "";

    for(let j = 0; j < colNum; j++) {                               //клетки доски в каждой строке
        insideRow += `<div class="column column-${j + 1}"></div>`;
    }
    
    insideBase += `<div class="row row-${i + 1}">${insideRow}</div>`;//сформированная строка доски
}

//Вывод HTML разметки в контейнер
base.innerHTML = insideBase;

//Создание массива строк для обработки
let rows = document.querySelectorAll(".row");

//Создание шахматной доски, стилистика
for(let i = 0; i < rowNum; i++) {
    if( i === 0 || i === rowNum - 1) {
        rows[i].style.height = `${frameAround}px`;
        rows[i].style.backgroundColor = "#C8924A";
    }
    else {
        rows[i].style.height = `${squaresInside}px`;
        rows[i].style.backgroundColor = "#F2D19D";
    }
    
    rows[i].style.width = "auto";
    
    //Создание массива клеток в одной строке для обработки
    let columns = rows[i].querySelectorAll(".column");
    let newBaseWidth = null;                                            //Новая ширина доски после обработки

    for(let j = 0; j < colNum; j++) {
        if(j === 0 || j === colNum - 1) {
            // columns[j].style.width = `${frameAround}px`;
            columns[j].style.width = `${frameAround}px`;
            columns[j].style.backgroundColor = "#C8924A";
            newBaseWidth += frameAround;
        }
        else {
            // columns[j].style.width = `${squaresInside - border * 2}px`;
            columns[j].style.width = `${squaresInside}px`;
            newBaseWidth += squaresInside; 
        }
        
        columns[j].style.height = "inherit";
        columns[j].style.display = "inline-block";
    }
 
    for(let j = 1; j < colNum - 1; j++) {
        if(i === 1 && j < colNum / 2) {
            columns[j].innerHTML = "&#9812";
        } 

        if(i % 2 === 0 && j % 2 === 0) {
            columns[j].style.backgroundColor = "#C8924A";
            // columns[j].innerHTML = "&#9812";
            // columns[j].style.border = `${border}px solid black`;
        }
        else if (i % 2 !== 0 && j % 2 !== 0) {
            columns[j].style.backgroundColor = "#C8924A";
        }

        // columns[j].style.border = `${border}px solid black`;
    }
    
    base.style.width = `${newBaseWidth}px`;

    // if(i === 1) {
    //     for(let j = 1; j < colNum - 1; j++) {
    //         if(j < colNum / 2) {
    //             columns[j].innerHTML = "&#9812";
    //         }  
    //     }
    // }
}
