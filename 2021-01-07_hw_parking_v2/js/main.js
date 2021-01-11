
let PLACES = 16;                                                        //  Кол-во парковочных мест
let placesInRow = 10;                                                   //  Кол-во парковочных мест в ряду
let parkingArr = [];
let parkingRow = null;
let parkingCol = null;
let infoBoard = document.querySelector(".info-board");
let placeHeight = null;
let placeWidth = null;
let freeSpaces = document.querySelector(".free-spaces");
let occupiedSpaces = document.querySelector(".occupied-spaces");
let curTime = document.querySelector(".current-time");
let mainEl = document.querySelector(".main");
let parkingPlacesArr;             // Создание массива парковочных мест
let parFillFact = 0.9;

//  Создание объектов со свойствами в массиве и добавление их в html-разметку
const createPlaces = () => {
    for(let i = 0; i < PLACES; i++) {
        parkingArr.push({
            id: i,
            occupied: false,
            time: "--:--",
        });
    }
}

//  Функция определения размеров (рядов и мест в ряду) оптимальной стоянки
const createParkingSize = () => {
    let tempFrPlRow = null;                                              //  временное кол-во пустого пространства в ряду
    let frPlRow = null;                                                 //  кол-во пустого простанста (могли бы быть парковочные места)
    let tempRowNum = null;                                              //  временное кол-во столбцов в ряду

    for(let tempPlInRow = 1; tempPlInRow < placesInRow; tempPlInRow++) {
        tempFrPlRow = PLACES % tempPlInRow;                             //  кол-во пустого простанства оставшиеся после создания парковочных мест
        tempRowNum = Math.ceil(PLACES / tempPlInRow);

        if((tempFrPlRow === 0) || (frPlRow <= tempFrPlRow && parkingRow > tempRowNum) || (frPlRow === null && parkingRow === null)) {
            parkingCol = tempPlInRow;
            parkingRow = tempRowNum;
            frPlRow = tempFrPlRow;
        }                     
    }
}

//  Функция подсчета свободных и занятых парковочных мест
const countPlaces = () => {
    return parkingArr.reduce((sum, place) => {
        if(!place.occupied) sum += 1;
        return sum;
    }, 0);
}

//  Функция обновления информационного окна
const updateIfoBoard = () => {
    freeSpaces.innerHTML = `Free places = ${countPlaces()}`;
    occupiedSpaces.innerHTML = `Occupied places = ${PLACES - countPlaces()}`;
}

//  Функция отслеживания текущего времени
const showCurTime = () => {
    setInterval(() => {
        curTime.innerHTML = `${moment().format("HH:mm:ss")}`;
    }, 100);
}

//  Отрисовка парковочных мест на поле
const renderParkPlaces = () => {
    mainEl.innerHTML = parkingArr.reduce((str, place) => {
        return `${str}
        <div id="${place.id}" class="place">
        №${place.id}<br>
        ${place.occupied ? "occupied" : "free"}<br>
        ${place.time}<br>
        </div>
        `;
    }, "");

    // Создание массива парковочных мест
    parkingPlacesArr = mainEl.querySelectorAll(".place");
    
    //  Определение размеров одного парковочного места
    placeHeight = (document.documentElement.clientHeight - infoBoard.clientHeight) / parkingRow;
    placeWidth = document.documentElement.clientWidth / parkingCol;
    
    // Присвоенение размеров парковочному месту
    for(let i = 0; i < PLACES; i++) {
        parkingPlacesArr[i].style.height = `${placeHeight}px`;
        parkingPlacesArr[i].style.width = `${placeWidth}px`;
        parkingPlacesArr[i].classList.add("center", "free");
    }
}

//  Изменение параметров парковочного места
const changePlaceParam = (i, str1, str2) => {
    parkingArr[i].occupied = true;
    (str1 === "free") ? parkingArr[i].time = parkingTime.value : parkingArr[i].time = "--:--";
    parkingPlacesArr[i].classList.remove(str1);
    parkingPlacesArr[i].classList.add(str2);
    parkingPlacesArr[i].innerHTML = `
                                            №${i}<br>
                                            ${parkingArr[i].occupied ? "occupied" : "free"}<br>
                                            ${parkingArr[i].time}<br>
                                        `;
    countPlaces();
    updateIfoBoard();
}

//  Создание размеров стоянки
createParkingSize();
createPlaces();
countPlaces();
showCurTime();
updateIfoBoard();

//  Создание поля для разметки парковки в html
renderParkPlaces();

let startParking = document.querySelector(".car-in");
let setTimeParking = document.querySelector(".btn-ok");
let canSetTimeParking = document.querySelector(".btn-cancel");
let stopParking = document.querySelector(".car-out");
let freeParkingPlace = document.querySelector(".btn-yes");
let noFreeParkingPlace = document.querySelector(".btn-no");


//  Остлеживания ввода времени в появившемся окне
let parkingTime = document.querySelector(".from-time");

//   Отслеживаем нажатия на парковочные места
mainEl.addEventListener("click", (clickEvent) => {
    let placeId = Number(clickEvent.target.id); 
    
    //  Остлеживания ввода времени в появившемся окне
    parkingTime.value = moment().format("HH:mm");
    
    if(clickEvent.target.classList.contains("free")) {
        let frePlaces = countPlaces();
        let minTimeLim = moment("09:00", "HH:mm");
        let maxTimeLim = moment("18:00", "HH:mm");
        let curParTime = moment();

        if(frePlaces < PLACES * parFillFact && (moment(curParTime).isAfter(minTimeLim) && moment(curParTime).isBefore(maxTimeLim))) {
            let alert = startParking.querySelector(".alert");
            alert.innerHTML = "We recommend not to occupy a parking space!";
        };

        //  Блокируем возможность нажатия других парковочных мест, до окончания ввода времени бронирования места
        startParking.style.display = "flex";
        
        const clickBtnOk = () => {
            changePlaceParam(placeId, "free", "busy");
            startParking.style.display = "none";
            setTimeParking.removeEventListener("click", clickBtnOk);
        }

        setTimeParking.addEventListener("click", clickBtnOk);

        canSetTimeParking.addEventListener("click", () => {
            setTimeParking.removeEventListener("click", clickBtnOk);
            startParking.style.display = "none";
        });
    }
    else {
        let occuTime = stopParking.querySelector(".occu-time");
        let startParTime = moment(parkingArr[placeId].time, "HH:mm");
        let stopParTime = moment();
        occuTime.innerHTML = moment(stopParTime - startParTime).utc().format("HH:mm");
        stopParking.style.display = "flex";

        freeParkingPlace.addEventListener("click", () => {
            changePlaceParam(placeId, "busy", "free");
            stopParking.style.display = "none";
        });
    
        noFreeParkingPlace.addEventListener("click", () => {
            stopParking.style.display = "none";
        });
    }
});