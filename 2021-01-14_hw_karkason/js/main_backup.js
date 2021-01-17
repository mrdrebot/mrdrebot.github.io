let pathFolderImg = "./images/"; 
let card1 = {
                // top: false,
                // right: true,
                // bottom: true,
                // left: false,
                position: [0, 1, 1, 0],
                path: `${pathFolderImg}corner.png`,
                rotate: 0
            };
let card2 = {
                // top: false,
                // right: true,
                // bottom: false,
                // left: false,
                position: [0, 1, 0, 0],
                path: `${pathFolderImg}impasse.png`,
                rotate: 0
            };
let card3 = {
                // top: false,
                // right: true,
                // bottom: false,
                // left: true,
                position: [0, 1, 0, 1],
                path: `${pathFolderImg}stick.png`,
                rotate: 0
            };
let carTypeNum = 6;
let arrCardTypes = [card1, card2, card3];
let arrMixCards = [];
let playFieldHeigth = 8;
let playFieldWidth = playFieldHeigth;
let cellWidth = 10;
let rotateDeg = 90;

let mainEl = document.querySelector(".main");
let fieldEl = document.querySelector(".field");
let deckEl = document.querySelector(".deck");
let cardsLeft = document.querySelector(".number-cards-deck");

// console.dir(mainEl);
// console.log(card2.path);

//  Генератор типа карточки
const generCardType = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// createArrCards();
// console.log(arrCards);

// Функция создания и перемешивания карточек
const mixDeckCards = () => {
    let arrLength = arrCardTypes.length * carTypeNum;
    let arrCards = [];
    let index = null;
    let count = 0;
    let type = 0;

    for(let i = 0; i < arrLength; i++) {
        if(count % carTypeNum === 0 && count !== 0) type += 1;

        arrCards.push(arrCardTypes[type]);
        count++;
    }

    for(let i = 0; i < arrLength; i++) {
        index = generCardType(0, arrCards.length - 1);
        arrMixCards.push(arrCards[index]);
        arrCards.splice(index, 1);
    }
}

mixDeckCards();
// console.log(getComputedStyle(deckEl).width);
// console.dir(deckEl);

//  Расчет ширины main блока
mainEl.style.width = `${(playFieldWidth * cellWidth) + 40}vh`;

// console.log(arrCards);
// console.log(arrMixCards);
// console.dir(fieldEl);

// fieldEl.style.gridTemplateRows = `repeat(${playFieldHeigth}, 1fr)`;
// fieldEl.style.gridTemplateColumns += `repeat(${playFieldWidth}, 1fr)`;
fieldEl.style.gridTemplateRows = `repeat(${playFieldHeigth}, ${cellWidth}vh)`;
fieldEl.style.gridTemplateColumns += `repeat(${playFieldWidth}, ${cellWidth}vh)`;

// let cellCount = 0;

for(let i = 0; i < playFieldHeigth; i++) {
    for(let j = 0; j < playFieldWidth; j++) {
        // cellCount++;
        // fieldEl.innerHTML += `<div class="cell cell-${cellCount} free x=${j} y=${i}"></div>`;
        // fieldEl.innerHTML += `<div class="cell cell-${cellCount} xy-${j}${i} free"></div>`;
        fieldEl.innerHTML += `<div class="cell xy-${j}${i} free"></div>`;
        // fieldEl.innerHTML += `<div class="cell cell-${j}${i} free x=${j} y=${i}"></div>`;
        // fieldEl.innerHTML += `<div class="cell cell-${j}${i} free"></div>`;
    }
}

//  Создание массива ячеек
let cellsElArr = fieldEl.querySelectorAll(".cell");
// console.log(cellsElArr);
console.dir(cellsElArr);

//  Отображение игрокам остатка карт
cardsLeft.innerHTML = `Cards left: ${arrMixCards.length}`;

// Отображения верхней карты
deckEl.style.backgroundImage = `url(${arrMixCards[arrMixCards.length - 1].path})`;

//  Отслеживание нажатия на поле
fieldEl.addEventListener("click", (clickEvent) => {
    let cellCount = null;
    // console.log(clickEvent);
    // console.log(clickEvent.target.classList[1]);
    
    if(clickEvent.target.classList.contains("free")) {
        clickEvent.target.classList.remove("free");

        if(arrMixCards.length > 0) {
            clickEvent.target.style.backgroundImage = deckEl.style.backgroundImage;
            // console.log(Number(clickEvent.target.classList[1].slice(5,)));
            clickEvent.target.classList.add(`pos-${arrMixCards[arrMixCards.length - 1].position.join("-")}`);
            // console.dir(deckEl);
            console.log(clickEvent.target.classList);
            arrMixCards.pop();
            
            if(arrMixCards.length > 0) {
                deckEl.style.backgroundImage = `url(${arrMixCards[arrMixCards.length - 1].path})`;
            }
            else {
                deckEl.style.backgroundImage = "";
                deckEl.style.backgroundColor = "red";
            }
            
            cardsLeft.innerHTML = `Cards left: ${arrMixCards.length}`;
            // console.log(arrMixCards);
        }
    }
    else {
        let rotate;
        // console.log("slice(7,10) = ", clickEvent.target.style.transform.slice(7,10));
        // console.log("indexOf(\"d\", 0) = ", clickEvent.target.style.transform.slice(7, 10).indexOf("d", 0));
    
        if(!clickEvent.target.style.transform.slice(7,10).indexOf("d", 0)) {
            clickEvent.target.style.transform = `rotate(${rotate}deg)`;
        }
        else if(clickEvent.target.style.transform.slice(7, 10).indexOf("d", 0) >= 0) {
            rotate = Number(clickEvent.target.style.transform.slice(7, 9));
        }
        else {
            rotate = Number(clickEvent.target.style.transform.slice(7, 10));

            if(rotate === 360) rotate = 0;
        }
    
    
        // console.log("rotate = ", rotate);
        // console.log(clickEvent);
        // let rotate = arrMixCards[arrMixCards.length - 1].rotate;
        rotate += rotateDeg;
        clickEvent.target.style.transform = `rotate(${rotate}deg)`;
        // console.log(clickEvent.target.style.transform);
        
        let getClassName = clickEvent.target.classList[2];
        // console.log(getClassName);
        
        let changeClassArr = getClassName.slice(4,).split("-");
        clickEvent.target.classList.remove(getClassName);
        // console.log(clickEvent.target.classList);

        let changeWayVal = changeClassArr[changeClassArr.length - 1];
        // console.log(changeWayVal);
        changeClassArr.unshift(changeWayVal);
        changeClassArr.pop();
        // console.log(changeClassArr);

        let changeClassStr = changeClassArr.join("-");
        // console.log(changeClassStr);

        clickEvent.target.classList.add(`pos-${changeClassStr}`);
        // console.log(clickEvent.target.classList[2]);
        
    }

    // let x = Number(clickEvent.target.classList[2].slice(2,));
    // let y = Number(clickEvent.target.classList[3].slice(2,));
    // console.log(clickEvent.target.classList[1]);
    let x = Number(clickEvent.target.classList[1].slice(3,4));
    let y = Number(clickEvent.target.classList[1].slice(4,));
    // console.log("x = ", x);
    // console.log("y = ", y);

    // let number = Number(clickEvent.target.classList[1].slice(5,));
    // console.log("number = ", number);
    // console.dir(cellsElArr[number - 1]);

    // let topCell = fieldEl.querySelector(`.cell-${x}${y - 1}`);
    // // console.dir(topCell);
    // let bottomCell = fieldEl.querySelector(`.cell-${x}${y + 1}`);
    // let leftCell = fieldEl.querySelector(`.cell-${x - 1}${y}`);
    // let rightCell = fieldEl.querySelector(`.cell-${x + 1}${y}`);

    let topCell = fieldEl.querySelector(`.xy-${x}${y - 1}`);
    // console.dir(topCell);
    let bottomCell = fieldEl.querySelector(`.xy-${x}${y + 1}`);
    // console.dir(bottomCell);
    let leftCell = fieldEl.querySelector(`.xy-${x - 1}${y}`);
    // console.dir(leftCell);
    let rightCell = fieldEl.querySelector(`.xy-${x + 1}${y}`);
    // console.dir(rightCell);

    // let topCell = fieldEl.querySelector(`.cell-${number - playFieldWidth}`);
    // let bottomCell = fieldEl.querySelector(`.cell-${number + playFieldWidth}`);
    // let leftCell = fieldEl.querySelector(`.cell-${number - 1}`);
    // let rightCell = fieldEl.querySelector(`.cell-${number + 1}`);

    let centerElClassName = clickEvent.target.classList[2];
    let centerEleClassArr = centerElClassName.slice(4,).split("-");
    // console.log(centerEleClassArr);

    let topElClassName = topCell.classList[2];
    // console.log("topElClassName = ", topElClassName);
    let topEleClassArr = topElClassName.slice(4,).split("-");
    // console.log("topEleClassArr = ", topEleClassArr);

    let rightElClassName = rightCell.classList[2];
    // console.log("rightElClassName = ", rightElClassName);
    let rightEleClassArr = rightElClassName.slice(4,).split("-");
    // console.log("rightEleClassArr = ", rightEleClassArr);

    let bottomElClassName = bottomCell.classList[2];
    // console.log("bottomElClassName = ", bottomElClassName);
    let bottomEleClassArr = bottomElClassName.slice(4,).split("-");
    // console.log("bottomEleClassArr = ", bottomEleClassArr);

    let leftElClassName = leftCell.classList[2];
    // console.log("leftElClassName = ", leftElClassName);
    let leftEleClassArr = leftElClassName.slice(4,).split("-");
    // console.log("leftEleClassArr = ", leftEleClassArr);

    //  Сравнение рассположения дорог для верхней ячейки
    if(y - 1 >= 0 && !topCell.classList.contains("free") && centerEleClassArr[0] !== topEleClassArr[2]) {
        // clickEvent.target.style.border = "1px solid red";
        cellCount++;
    }

    //  Сравнение рассположения дорог для правой ячейки
    if(x + 1 < playFieldWidth && !rightCell.classList.contains("free") && centerEleClassArr[1] !== rightEleClassArr[3]) {
        // clickEvent.target.style.border = "1px solid red";
        cellCount++;
    }

    //  Сравнение рассположения дорог для нижней ячейки
    if(y + 1 < playFieldHeigth && !bottomCell.classList.contains("free") && centerEleClassArr[2] !== bottomEleClassArr[0]) {
        // clickEvent.target.style.border = "1px solid red";
        cellCount++;
    }

    //  Сравнение рассположения дорог для левой ячейки
    if(y + 1 < playFieldHeigth && !leftCell.classList.contains("free") && centerEleClassArr[3] !== leftEleClassArr[1]) {
        // clickEvent.target.style.border = "1px solid red";
        cellCount++;
    }


    if(cellCount > 0) {
        clickEvent.target.style.border = "1px solid red";
    }
    else {
        clickEvent.target.style.border = "1px solid black";
    }


});
