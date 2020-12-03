let secretValue = 501;              //Искомое число
let searchValue = null;             //Числа, которые мы находим
let bottomLimit = -2147483647;      //Начальный нижний предел выборки
let topLimit = 2147483647;          //Начальный верхний предел выборки
let searchIteration = 1;            //Кол-во итераций поиска
let mainEl = document.querySelector(".main");
let results = "";

//Функция генерирования случайных чисел
const number = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Старт поиска
searchValue = number(bottomLimit, topLimit);

//Цикл поиска решения
while(secretValue !== searchValue) {
    results += `<div>Итерация №${searchIteration}</div>`;
    console.log("Кол-во шагов поиска = ", searchIteration);
    
    if(searchValue > secretValue) {
        results += `<div>Найденое число ${searchValue} больше искомого!</div><br>`;
        console.log("Число которое получили = ", searchValue);//Вывод в консоль, на всякий случай
        topLimit = searchValue;     //Сохранение значения верхнего предела для результата сравнения false
        searchValue = number(bottomLimit, searchValue);
    }
    else {
        results += `<div>Найденое число ${searchValue} меньше искомого!</div><br>`;
        console.log("Число которое получили = ", searchValue);//Вывод в консоль, на всякий случай
        bottomLimit = searchValue;  //Сохранение значения нижнего предела для результата сравнения true
        searchValue = number(searchValue, topLimit);
    }

    searchIteration++;              //Подсчет итераций поиска
}

//Вывод результата в консоль, на всякий случай
console.log("\nЧисло которое искали = ", secretValue);
console.log("Число которое нашли = ", searchValue);
console.log("Кол-во шагов поиска = ", searchIteration);

//Запись результата в общую строку
results += `<div>Число ${secretValue} найдено! Кол-во итераций для поиска ${searchIteration} </div>`

//Вывод результатов вычеслений
mainEl.innerHTML = results;