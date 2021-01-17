/*
Задание: сделать игру наподобие Каркассона. На игровом поле отображается колода карточек, игровое поле, а также написано,
сколько карточек осталось в колоде. В колоде, вначале игры, лежат в случайном порядке типовкарточекколичествокаждоготипа
карточек. Размер игрового поля ширинаполявысота_поля. При клике на игровое поле, в ячейке появляется верхняя карта из колоды.
На её месте, в колоде, появляется следующая случайная карта. При следующих кликах на ячейке поля с картой, карта вращается.

По-умолчанию: 
типов карточек: 3
штук каждого типа: 10
высота игрового поля: 8
ширина игрового поля: 8

А) Проверить, есть ли возможность так уложить карточку на игровое поле. (Выполнил только А)!!!!!!!
Если такой возможности нет, ячейка на поле подсвечивается красным контуром;
Б) ЛКМ перетягивать карточку между полями, ПКМ вращать её. Проверка из задания "А)" актуальна;
В) Пока карточку не уложить правильно вращением, другую карточку с колоды взять нельзя;
Г) Игра начинается при первом клике на поле. Предоставляется 1 минута, отсчет вести под игровым полем.
По истечению этого времени вывести окно по центру, написать "Время вышло! Использовано карт: <кол-во карт на поле>";
*/

let pathFolderImg = "./images/";                    // путь рассположения изображения карточек
let card1 = {
                position: [0, 1, 1, 0],             //  top, right, bottom, left
                path: `${pathFolderImg}corner.png`,
                rotate: 0
            };
let card2 = {
                position: [0, 1, 0, 0],             //  top, right, bottom, left
                path: `${pathFolderImg}impasse.png`,
                rotate: 0
            };
let card3 = {
                position: [0, 1, 0, 1],             //  top, right, bottom, left
                path: `${pathFolderImg}stick.png`,
                rotate: 0
            };

let carTypeNum = 6;                                 //  Кол-во карточек одного вида в колоде
let arrCardTypes = [card1, card2, card3];
let arrMixCards = [];                               //  Перемещаная колода                 
let playFieldHeight = 8;                            //  Высота поля в ячейках
let playFieldWidth = playFieldHeight;               //  Ширина поля в ячейках
let cellWidth = 10;                                 //  Ширина ячейки поля
let cellRotateDeg = 90;                             //  Угол поворота изображения ячейки

//  Поиск элементов html
let mainEl = document.querySelector(".main");
let fieldEl = document.querySelector(".field");
let deckEl = document.querySelector(".deck");
let cardsLeftEl = document.querySelector(".number-cards-deck");

//  Генератор типа карточки
const generCardType = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция создания и перемешивания карточек в колоде
const mixDeckCards = () => {
    let arrTempCardsLength = arrCardTypes.length * carTypeNum;
    let arrTempCards = [];                          //  временный массив для перемешиванмя карт
    let index = null;
    let count = 0;
    let cardType = 0;

    //  Наполнение временного массива, нужным кол-вом карт
    for (i = 0; i < arrTempCardsLength; i++) {
        if (count % carTypeNum === 0 && count !== 0) cardType += 1;

        arrTempCards.push(arrCardTypes[cardType]);
        count++;
    }

    //  Создание массива перемещаной колоды
    for (i = 0; i < arrTempCardsLength; i++) {
        index = generCardType(0, arrTempCards.length - 1);
        arrMixCards.push(arrTempCards[index]);
        arrTempCards.splice(index, 1);
    }
}

//  Вызов функции создания и тасования колоды
mixDeckCards();

//  Задание размеров элемнта html отображающего колоду
deckEl.style.height = `${cellWidth}vh`;
deckEl.style.width = `${cellWidth}vh`;
deckEl.style.margin = `${cellWidth}vh`;

//   Получение общей длины элемента deckEl
let deckElWidth = Number(deckEl.style.height.slice(0, 2)) +  Number(deckEl.style.width.slice(0, 2)) + 2 * Number(deckEl.style.margin.slice(0, 2));

//  Расчет ширины main блока
mainEl.style.width = `${(playFieldWidth * cellWidth) + deckElWidth}vh`;

//  Создаем разметку игрового поля для свойств grid
fieldEl.style.gridTemplateRows = `repeat(${playFieldHeight}, ${cellWidth}vh)`;
fieldEl.style.gridTemplateColumns += `repeat(${playFieldWidth}, ${cellWidth}vh)`;

//  Наполнение html разметкой поля
for (i = 0; i < playFieldHeight; i++) {
    for (j = 0; j < playFieldWidth; j++) {
        fieldEl.innerHTML += `<div class="cell xy-${j}${i} free"></div>`;
    }
}

//  Создание массива ячеек
let cellsElArr = fieldEl.querySelectorAll(".cell");

//  Отображение игрокам остатка карт
cardsLeftEl.innerHTML = `Cards left: ${arrMixCards.length}`;

// Отображения верхней карты
deckEl.style.backgroundImage = `url(${arrMixCards[arrMixCards.length - 1].path})`;

//  Отслеживание нажатия на поле
fieldEl.addEventListener("click", (clickEvent) => {
    let cellCount = null;                               //  Счетчик определяющий цвет рамки во круг ячейки
    
    //  Выбор действия в ячейке
    if (clickEvent.target.classList.contains("free")) {
        clickEvent.target.classList.remove("free");

        if (arrMixCards.length > 0) {
            clickEvent.target.style.backgroundImage = deckEl.style.backgroundImage;                             //  перенос карточки на поле
            clickEvent.target.classList.add(`pos-${arrMixCards[arrMixCards.length - 1].position.join("-")}`);   //  добавление класса положения дороги
            arrMixCards.pop();                                                                                  //  удаление использованой карточки
            
            //  Показывание новой карточки в колоде или что все карточки закончились
            if (arrMixCards.length > 0) {
                deckEl.style.backgroundImage = `url(${arrMixCards[arrMixCards.length - 1].path})`;
            } else {
                deckEl.style.backgroundImage = "";
                deckEl.style.backgroundColor = "red";
            }
            
            cardsLeftEl.innerHTML = `Cards left: ${arrMixCards.length}`;                                         // отображение оставшегося кол-ва карточек
        }
    } else {
        let rotate;
        
        //  Определение угла поворота ячейки
        if (!clickEvent.target.style.transform.slice(7,10).indexOf("d", 0)) {
            clickEvent.target.style.transform = `rotate(${rotate}deg)`;
        }
        else if (clickEvent.target.style.transform.slice(7, 10).indexOf("d", 0) >= 0) {
            rotate = Number(clickEvent.target.style.transform.slice(7, 9));
        }
        else {
            rotate = Number(clickEvent.target.style.transform.slice(7, 10));

            if (rotate === 360) rotate = 0;                                                                       //  обнуление угла
        }
        
        //  увеличение угла, при повторном нажатии на карточку
        rotate += cellRotateDeg;                                                                                  
        clickEvent.target.style.transform = `rotate(${rotate}deg)`;

        //  Получение класса расположения дороги ячейки, создание массива из класса для сравнения и удаление класса расположения дороги ячейки
        let getClassName = clickEvent.target.classList[2];                                                        
        let changeClassArr = getClassName.slice(4,).split("-");
        clickEvent.target.classList.remove(getClassName); 

        //  Изменение массива положения дороги для ячейки и добавление измененного класса в ячейку
        let changeWayVal = changeClassArr[changeClassArr.length - 1];
        changeClassArr.unshift(changeWayVal);
        changeClassArr.pop();
        let changeClassStr = changeClassArr.join("-");
        clickEvent.target.classList.add(`pos-${changeClassStr}`);
    }

    //  Определение координат размещения ячейки на поле
    let x = Number(clickEvent.target.classList[1].slice(3,4));
    let y = Number(clickEvent.target.classList[1].slice(4,));
    
    //  Получение класса расположения дороги ячейки, создание массива из класса для сравнения
    let centerElClassName = clickEvent.target.classList[2];
    let centerEleClassArr = centerElClassName.slice(4,).split("-");

    //  Сравнение рассположения дорог для верхней ячейки
    if (y - 1 >= 0) {
        let topCell = fieldEl.querySelector(`.xy-${x}${y - 1}`);
        let topElClassName = topCell.classList[2];
        let topEleClassArr = topElClassName.slice(4,).split("-");

        if (!topCell.classList.contains("free") && centerEleClassArr[0] !== topEleClassArr[2]) {
            cellCount++;
        }
    }

    //  Сравнение рассположения дорог для правой ячейки
    if (x + 1 < playFieldWidth) {
        let rightCell = fieldEl.querySelector(`.xy-${x + 1}${y}`);
        let rightElClassName = rightCell.classList[2];
        let rightEleClassArr = rightElClassName.slice(4,).split("-");

        if (!rightCell.classList.contains("free") && centerEleClassArr[1] !== rightEleClassArr[3]) {
            cellCount++;
        }
    }

    //  Сравнение рассположения дорог для нижней ячейки
    if (y + 1 < playFieldHeight) {
        let bottomCell = fieldEl.querySelector(`.xy-${x}${y + 1}`);
        let bottomElClassName = bottomCell.classList[2];
        let bottomEleClassArr = bottomElClassName.slice(4,).split("-");

        if (!bottomCell.classList.contains("free") && centerEleClassArr[2] !== bottomEleClassArr[0]) {
            cellCount++;
        }
    }

    //  Сравнение рассположения дорог для левой ячейки
    if (x - 1 >= 0) {
        let leftCell = fieldEl.querySelector(`.xy-${x - 1}${y}`);
        let leftElClassName = leftCell.classList[2];
        let leftEleClassArr = leftElClassName.slice(4,).split("-");

        if (!leftCell.classList.contains("free") && centerEleClassArr[3] !== leftEleClassArr[1]) {
            cellCount++;
        }
    }

    //  Определение цвета рамки ячейки
    if(cellCount > 0) {
        clickEvent.target.style.border = "1px solid red";
    }
    else {
        clickEvent.target.style.border = "1px solid black";
    }
});
