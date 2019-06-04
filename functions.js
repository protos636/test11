/*var i = 3;
function enterFirstMessage (text) {
    alert(text);
    var j = 3;
    console.log(i); // Замыкание функции - использование в функции всех видимых ей переменных, как в ней, так и за рамками.
}
enterFirstMessage('oleg');
console.log(j); //Переменная не видна, если она находится в блоке.
*/
console.log(retVar());// функции существуют уже в памяти еще до их вызова.
function retVar () {
    var a = 38;
    return a;
}
//Однако если записывать в переменную функцию сразу, то получим function is not defined;
console.log(retVai);
var jop = function retVai() {
    var b = 33;
    return b;
}
