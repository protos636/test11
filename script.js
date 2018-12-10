'use strict'; //Директива (пишем на стандарте ES6)

// var leftBorderWidth = 1;
// var number = 3;
// var string = "IVan";
// var boolean = false;
// var sym = Symbol();
// null;
// const pi = 3.14;
// console.log(4/0);
// let something;
// console.log(something);
// console.log("hello!"*3);
var obj = {
    name: "John",
    age: 25,
    isMarried: false
}
//let arr = ["1.png", "2.jpg", "soska.bmp"];
//console.log(arr[2]);
//console.log(obj.name);
//console.log(obj["age"]);
let answer = prompt("Are you 18?", "Yes"); // "+" В начале строки делает тип данных "число";
console.log(typeof(answer));
var $ao = console.log(8 + " - object");//Всегда строка, если мы складываем
var $ao = console.log(8 + +" - object"); //"+ +" выводит NaN
// alert("Hello World!");
// let answer = confirm("Are you here?");

let incr = 10, decr = 10;
console.log(--incr);
console.log(incr++);
console.log(incr);

// ++incr; // Увеличивает переменную на 1;
// --decr; // Уменьшает переменную на 1;
// console.log(incr++);
// console.log(decr--);
// console.log(89%22); //Деление с отстатком;
// console.log("5" == 5); // проверка сходства значений
// console.log("5" === 5); // проверка сходства типа данных
// console.log("5" !== 5); // проверка сходства значений и типов данных (нет)
// let isCheck = true, isClose = true;
// console.log(isCheck && isClose); // оператор "И" возвращает правду тогда, когда все элементы правдивы
// console.log(isCheck || isClose); // оператор "ИЛИ" возвращает правду тогда, когда хотя бы одна переменная правдива
// console.log(isCheck || !isClose); // оператор "!"(знак Отрицания) меняет значение переменной на противоположное
