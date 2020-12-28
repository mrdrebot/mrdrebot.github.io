let btn = document.querySelector(".btn");
let enterTime = document.querySelector("#enter-time");
let timer = document.querySelector(".timer");
let destPoint;
let curPoint;
let checker = null;
btn.disabled = true;

console.log(enterTime.attributes);

//  Получения доступа к псевдоэлементу и его свойствам
let pseudElAtrr = document.head.appendChild(document.createElement("style"));  //   Создание тэга "style" в тэге "head"
pseudElAtrr.innerHTML = ".timer:after {animation-play-state: paused;}";        //  Изменение свойств псевдоэлемента

//  Функция запуска или остановки таймера
const runTimer = () => {
    checker++;                                                              //  Отслеживание нажатия кнопки старт\стоп

    if(checker < 2) {
        curPoint = moment();                                                //  Полученние текущего времени
        destPoint = moment(`${destPoint}`, "HH:mm:ss");                     //  Полученние введенного времени
    
        if(moment(destPoint).isBefore(curPoint)) destPoint.add(1, "d");     //  Добавление 1 дня, если введенное время меньше текущего

        //  Таймер отсчета времени
        let timerCount = setInterval(() => {
            timer.innerHTML = moment((destPoint).diff(curPoint)).utc().format("HH:mm:ss");  //  Выведение времени на экран
            
            pseudElAtrr.innerHTML = ".timer:after {animation-play-state: running;} .btn::before {content: '\\e803';}";           //  Запуск вращения стрелок и play на stop
            enterTime.setAttribute("readonly", "readonly");                                 //  Блокировка ввода в поле тэга "input"

            if(timer.innerHTML === "00:00:00" || checker > 1) {             //  Сброс таймера и обнуление данных
                checker = 0;
                clearTimeout(timerCount);
                timer.innerHTML = "00:00:00";
                enterTime.value = "";
                btn.disabled = true;
                pseudElAtrr.innerHTML = ".timer:after {animation-play-state: paused;} .btn::before {content: '\\e802';}";
                enterTime.removeAttribute('readonly');
            } 
            else {
                destPoint.subtract(1, 'seconds');                            //  Уменьшение времени на 1с
            }
        }, 1000);
    }
}

enterTime.addEventListener("input", (event) => {
    destPoint = event.target.value;

    if(event.target.value) {
        btn.disabled = false;
        // enterTime.setAttribute("enterTime");
        btn.addEventListener("click", runTimer, );
    }    
    else {
        btn.disabled = true;
    } 
});