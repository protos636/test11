var money = prompt('Введите ваш бюджет на месяц', '1000'); // Перед промпт нужно поставить + позже.
var time = prompt('Введите дату в формате YYYY-MM-DD', '1994-03-11'); // +prompt
var appData = {};
appData.budget = +money;
appData.timeData = time;
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;
appData.expenses= {};
var i = 0;
//Цикл 1
/* do {
    i += 1;
    var a = prompt("Введите статью расходов", "");
    var b = +prompt("Сколько вы потратите на это?", "");
    if (typeof(a) !== null && typeof(b) !== null && a != '' && b != '') {
        console.log('vse ok');
        appData.expenses[a] = b;
} else {
    i-=1;
} 
} while (i < 2); */
//Цикл 2
/*for (var i = 0; i < 2; i++) {
    var a = prompt("Введите статью расходов", "");
    var b = +prompt("Сколько вы потратите на это?", "");
if (typeof(a) !== null && typeof(b) !== null && a != '' && b != '' && a.length < 50) {
    console.log('vse ok');
    appData.expenses[a] = b;
} else { //Вернуться к вопросу заново
    i -= 1;
}
} */
var j = 2;
while(j) {
    var a = prompt("Введите статью расходов", "");
    var b = +prompt("Сколько вы потратите на это?", "");
if (typeof(a) !== null && typeof(b) !== null && a != '' && b != '' && a.length < 50) {
    console.log('vse ok');
    appData.expenses[a] = b;
    j--;
} else {
    i += 1;
}
}
appData.moneyPerDay = +appData.budget / 30;
//Пишем уровень достатка, исходя из бюджета
switch (true) {
    case appData.moneyPerDay < 500:
    console.log('Ваш уровень низкий');
    break;
    case appData.moneyPerDay >= 500 && appData.moneyPerDay <=1000:
    console.log('Ваш уровень средний');
    break;
    case appData.moneyPerDay >1000:
    console.log('Ваш уровень высокий');
    break;
    default:
    console.log('ВАш уровень не подпадает ни под одну из оценок');
    break;
}
console.log (appData);
alert("Ежедневный бюджет: " + appData.moneyPerDay);