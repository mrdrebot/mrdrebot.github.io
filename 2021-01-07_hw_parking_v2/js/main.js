
let places = 13;                                                        //  Кол-во парковочных мест
let placesInRow = 10;                                                  //  Кол-во парковочных мест в ряду
let parkingArr = new Array(places);
let parkingRow = null;
let parkingCol = null;
let infoBoard = document.querySelector(".info-board");
let placeHeight = null;
let placeWidth = null;
let freeCount = 0;
let busyCount = 0;
let freeSpaces = document.querySelector(".free-spaces");
let busyPlaces = document.querySelector(".occupied-spaces");
let curTime = document.querySelector(".current-time");

//  Функция определения размеров (рядов и мест в ряду) оптимальной стоянки
const createParkingSize = () => {
    let tempFrPlRow = null;                                             //  временное кол-во пустого пространства в ряду
    let frPlRow = null;                                                 //  кол-во пустого простанста (могли бы быть парковочные места)
    let tempRowNum = null;                                              //  временное кол-во столбцов в ряду

    for(let tempPlInRow = 1; tempPlInRow < placesInRow; tempPlInRow++) {
        tempFrPlRow = places % tempPlInRow;                             //  кол-во пустого простанства оставшиеся после создания парковочных мест
        tempRowNum = Math.ceil(places / tempPlInRow);

        if((tempFrPlRow === 0) || (frPlRow <= tempFrPlRow && parkingRow > tempRowNum) || (frPlRow === null && parkingRow === null)) {
            parkingCol = tempPlInRow;
            parkingRow = tempRowNum;
            frPlRow = tempFrPlRow;
        }                     
    }
}
//  Функция подсчета свободных и занятых парковочных мест
const countPlaces = () => {
    parkingArr.forEach(place => {
        (place.occupied) ? busyCount++ : freeCount++;
    });

    freeSpaces.innerHTML = `Свободных мест = ${freeCount}`;
    busyPlaces.innerHTML = `Занятых мест = ${busyCount}`;
}

//  Функция отслеживания текущего времени
const showCurTime = () => {
    setInterval(() => {
        curTime.innerHTML = `Текущее время ${moment().format("HH:mm:ss")}`;
    }, 10);
  }

//  Создание размеров стоянки
createParkingSize();

//  Создание поля для разметки парковки в html, задание размеров
let parking = document.querySelector(".main");
parking.style.height = `${document.documentElement.clientHeight - infoBoard.clientHeight}px`;
parking.style.width = `${document.documentElement.clientWidth}px`;

//  Создание объектов со свойствами в массиве и добавление их в html-разметку
for(let i = 0; i < parkingArr.length; i++) {
    parkingArr[i] = new Object();
    parkingArr[i].id = i + 1;
    parkingArr[i].occupied = false;
    parkingArr[i].time = "00:00:00";
    parking.innerHTML += `<div id="place-${i + 1}" class="place"></div>`;

    if((i + 1) % parkingCol === 0 && i !== 0) {
        parking.innerHTML += "<br>";
    }
}

// Создание массива парковочных мест
let parkingPlacesArr = parking.querySelectorAll(".place");

//  Определение размеров парковочного места
placeHeight = (document.documentElement.clientHeight - infoBoard.clientHeight) / parkingRow;
// placeHeight = document.documentElement.clientHeight / parkingRow;
placeWidth = document.documentElement.clientWidth / parkingCol;

//  Отрисовка парковочных мест на поле
for(let i = 0; i < parkingPlacesArr.length; i++) {
    parkingPlacesArr[i].style.height = `${placeHeight}px`;
    parkingPlacesArr[i].style.width = `${placeWidth}px`;
    parkingPlacesArr[i].style.border = "1px solid black";
    parkingPlacesArr[i].style.boxSizing = "border-box";
    parkingPlacesArr[i].classList.add("center", "free");
    parkingPlacesArr[i].innerHTML = `<div>ID = ${parkingArr[i].id}</div><div class="status">${(parkingArr[i].occupied) ? "Busy" : "Free"}</div><div class="timer">Place taken ${parkingArr[i].time}</div>`;
}

countPlaces();
showCurTime();

//   Отслеживаем нажатия на парковочные места
parking.addEventListener("click", (clickEvent) => {
    // console.dir(clickEvent);
    // console.log(clickEvent.target.id);
    let placeId = `#${clickEvent.target.id}`;
    
    if(clickEvent.target.classList.contains("free")) {
        clickEvent.target.classList.remove("free");
        clickEvent.target.classList.add("center", "busy");
        clickEvent.target.occupied = "true";
    }
    
    //  Блокируем возможность нажатия других парковочных мест, до окончания ввода времени бронирования места
    let inputTime = document.querySelector(".car-in");
    inputTime.classList.add("car-in-on");
    
    //  Остлеживания ввода времени в появившемся окне
    let parkingTime = document.querySelector(".from-time");
    parkingTime.value = moment().format("HH:mm:ss");
    
    parkingTime.addEventListener("keydown", (keyEvent) => {
        console.dir(keyEvent);
        if(keyEvent.code === "Enter" || keyEvent.code === "NumpadEnter") {
            inputTime.style.display = "none";
            let place = document.querySelector(placeId);
            // console.dir(divId);
            let status = place.querySelector(".status");
            status.innerHTML = "Busy";

            let timer = place.querySelector(".timer");
            timer.innerHTML = "Busy";
        }
    });

});
