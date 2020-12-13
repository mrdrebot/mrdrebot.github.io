// Вариант4 (оптимизация + доработка)
let butGo = document.querySelector(".button");                  //элемент на который будет "вешатся" обработчик события
let addTexareas = document.querySelector(".add");               //место в которое будут добавляться поля ввода

//Функция очистки слова
const cleanWord = (text, inWord, string, startIn, foundP) => {
    for(let i = 0; i < string.length; i++) {
        if(inWord[0] === string[i]) {                           //проверка первого єлемента слова, что это буква
            inWord = text.slice(startIn + 1, foundP);
        }

        if(inWord[inWord.length - 1] === string[i]) {           //проверка последнего єлемента слова, что это буква
            if(foundP !== -1) {
                inWord = text.slice(startIn, foundP - 1);
            }
            else {
                inWord = text.slice(startIn, text.length - 1);
            }
        }
    }

    return inWord;
}

//Функция получения и преобразования текста
const splitText = () => {
    let allText = document.querySelector("#input-text").value;  //Получение теста
    let startIndex = 0;                                         //Начальный индекс строки
    let founfPos = 0;                                           //Индекс найденого символа
    let word = "";                                              
    let outTextareas = "";                                      //Вывод всех найденых слов
    let longerWord = "";
    let signsString = "!@#$%^&*()-+{}[]\/?'\"\".,><=_»«:;";     //список символов, которые могут быть сначала или конца слова

    //Цикл обработки текста
    while(startIndex !== -1) {
        founfPos = allText.indexOf(" ", startIndex);

        if(founfPos !== -1) {
            word = allText.slice(startIndex, founfPos);         //Получение строки разделенной пробелами
            word = cleanWord(allText, word, signsString, startIndex, founfPos);
            startIndex = founfPos + 1;                          //следующая позиция начала отсчета
        }
        else {
            word = allText.slice(startIndex);                   //Получение строки до конца текста
            word = cleanWord(allText, word, signsString, startIndex, founfPos);
            startIndex = -1;                                    //Значения для окончания цикла обработки текста
        }

        if(word.length > longerWord.length) {
            longerWord = word;
        }

        outTextareas += `<textarea>${word}</textarea><br>`;

    }

    console.log(longerWord);                                    //Вывод самого длинного слова из текста
    return outTextareas;
}

//Вызов обработчика события
butGo.addEventListener('click', () => {
    addTexareas.innerHTML += splitText();
})

// // Вариант3 (оптимизация)
// let butGo = document.querySelector(".button");    //элемент на который будет "вешатся" обработчик события
// let addTexareas = document.querySelector(".add"); //место в которое будут добавляться поля ввода

// //Функция получения и преобразования текста
// const splitText = () => {
//     let allText = document.querySelector("#input-text").value;  //Получение теста
//     let startIndex = 0;                                         //Начальный индекс строки
//     let founfPos = 0;                                           //Индекс найденого символа
//     let word = "";                                              
//     let outTextareas = "";                                      //Вывод всех найденых слов
//     let longerWord = "";
//     // let signsArr = [33, 34, 44, 46, 58];

//     //Цикл обработки текста
//     while(startIndex !== -1) {
//         founfPos = allText.indexOf(" ", startIndex);

//         if(founfPos !== -1) {
//             word = allText.slice(startIndex, founfPos);
            
//             console.log(word.codePointAt(word.length - 1));

//             if((word.codePointAt(word.length - 1) > 32 && word.codePointAt(word.length - 1) < 48) || (word.codePointAt(word.length - 1) > 57 && word.codePointAt(word.length - 1) < 65) || (word.codePointAt(word.length - 1) > 121 && word.codePointAt(word.length - 1) < 127)) {
//                 word = allText.slice(startIndex, founfPos - 1);
//             }
//             // if(word.length > 2 && ((word.codePointAt(word.length - 1) < 65 || word.codePointAt(word.length - 1) > 90) && (word.codePointAt(word.length - 1) < 97 || word.codePointAt(word.length - 1) > 122))) {
//             //     word = allText.slice(startIndex, founfPos - 1);
//             // }

//             startIndex = founfPos + 1;
//         }
//         else {
//             word = allText.slice(startIndex);

//             if((word.codePointAt(word.length - 1) > 32 && word.codePointAt(word.length - 1) < 48) || (word.codePointAt(word.length - 1) > 57 && word.codePointAt(word.length - 1) < 65) || (word.codePointAt(word.length - 1) > 121 && word.codePointAt(word.length - 1) < 127)) {
//                 word = allText.slice(startIndex, allText.length - 1);
//             }
//             // if(word.length > 2 && ((word.codePointAt(word.length - 1) < 65 || word.codePointAt(word.length - 1) > 90) && (word.codePointAt(word.length - 1) < 97 || word.codePointAt(word.length - 1) > 122))) {
//             //     word = allText.slice(startIndex, allText.length - 1);
//             // }

//             startIndex = -1;
//         }

//         if(word.length > longerWord.length) {
//             longerWord = word;
//         }

//         outTextareas += `<textarea>${word}</textarea><br>`;
//     }

//     console.log(longerWord); //Вывод самого длинного слова из текста
//     return outTextareas;
// }

// //Вызов обработчика события
// butGo.addEventListener('click', () => {
//     addTexareas.innerHTML += splitText();
// })

//Мир! Мир, Мир. Мир? Мир:

// // Вариант2 (оптимизация)
// let butGo = document.querySelector(".button");    //элемент на который будет "вешатся" обработчик события
// let addTexareas = document.querySelector(".add"); //место в которое будут добавляться поля ввода

// //Функция получения и преобразования текста
// const splitText = () => {
//     let allText = document.querySelector("#input-text").value;  //Получение теста
//     let startIndex = 0;                                         //Начальный индекс строки
//     let founfPos = 0;                                           //Индекс найденого символа
//     let word = "";                                              
//     let outTextareas = "";                                      //Вывод всех найденых слов
//     let longerWord = "";

//     //Цикл обработки текста
//     while(startIndex !== -1) {
//         founfPos = allText.indexOf(" ", startIndex);

//         if(founfPos !== -1) {
//             word = allText.slice(startIndex, founfPos);

//             if(word.length > longerWord.length) {
//                 longerWord = word;
//             }

//             outTextareas += `<textarea>${word}</textarea><br>`;
//             startIndex = founfPos + 1;
//         }
//         else {
//             word = allText.slice(startIndex);

//             if(word.length > longerWord.length) {
//                 longerWord = word;
//             }

//             outTextareas += `<textarea>${word}</textarea><br>`;
//             startIndex = -1;
//         }
//     }

//     console.log(longerWord);
//     return outTextareas;
// }

// butGo.addEventListener('click', () => {
//     addTexareas.innerHTML += splitText();
// })