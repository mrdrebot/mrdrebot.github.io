let a = null;
let b = null;
let c = null;
let D = null;
let x = null;
let x1 = null;
let x2 = null;
let infornation = "";
let findElem = "";

a = enterValue("a", a);
b = enterValue("b", b);
c = enterValue("c", c);

D = Math.pow(b,2) - 4 * a * c;

findElem = document.querySelector(".main");

if(D < 0) {
    infornation = "<div>Вы ввели такие данные:</div><div>a = " + a + "</div><div>b = " + b + "</div><div>c = " + c + "</div><div>Уровнение имеет следующий вид:</div><div>" + a + "x^2 + " + b + "x + " + c +",</div><div> D = " + D + "</div><div>У Вашего уровнения нет корней!</div>";
    findElem.innerHTML = infornation;
}
else if(D === 0) {
    x = (b * -1)/(2 * a);
    infornation = "<div>Вы ввели такие данные:</div><div>a = " + a + "</div><div>b = " + b + "</div><div>c = " + c + "</div><div>Уровнение имеет следующий вид:</div><div>" + a + "x^2 + " + b + "x + " + c +",</div><div>Дискременант</div><div>D = " + D + "</div><div>У Вашего уровнения один корень!</div><div>x = " + x + ".</div>";
    findElem.innerHTML = infornation;
}
else {
    x1 = Math.round((((b * -1) + Math.sqrt(D)) / (2 * a)) * 2) / 2;
    x2 = Math.round((((b * -1) - Math.sqrt(D)) / (2 * a)) * 2) / 2;
    infornation = "<div>Вы ввели такие данные:</div><div>a = " + a + "</div><div>b = " + b + "</div><div>c = " + c + "</div><div>Уровнение имеет следующий вид:</div><div>" + a + "x^2 + " + b + "x + " + c +",</div><div>Дискременант</div><div>D = " + D + "</div><div>У Вашего уровнения два корня!</div><div>x1 = " + x1 + ",</div><div>x2 = " + x2 + ".</div>";
    findElem.innerHTML = infornation;
}

function enterValue(name, value) {
    do {
        if(isNaN(value)) {
            alert("Вы ввели не число, введите другое число!");
        }
    
        value = Number(prompt("Введите значение " + name + " :", ""));
        console.log("typeof(" + name + ")=", typeof(value));
        console.log(name + "=", value);
    
    } while(isNaN(value));

    return value;
}