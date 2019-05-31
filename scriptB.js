var money = prompt('Введите ваш бюджет на месяц', '1000'); // Перед промпт нужно поставить + позже.
var time = prompt('Введите дату в формате YYYY-MM-DD', '1994-03-11'); // +prompt
var appData = {};
appData.budget = +money;
appData.timeData = time;
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;
appData.expenses= {};
for (var i = 0; i < 2; i++) {
    var a = prompt("Введите статью расходов", "");
    var b = +prompt("Сколько вы потратите на это?", "");
if (typeof(a) !== null && typeof(b) !== null && a != '' && b != '') {
    console.log('vse ok');
    appData.expenses[a] = b;
} else {
    i = 0;
}
}
appData.moneyPerDay = +appData.budget / 30;
alert();
console.log (appData);