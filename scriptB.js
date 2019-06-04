var money, time;
start();
var appData = {};
appData.budget = +money;
appData.timeData = time;
appData.optionalExpenses = {};
appData.income = [];
appData.savings = true;
appData.expenses= {};

chooseExpenses();
checkSavings();
detectDayBudget();
detectLevel();
function checkSavings() {
    if (appData.savings) {
        var y = +prompt('Какая сумма сбережений?');
        var x = +prompt('Сколько составляет процент годовых?');
        appData.savingsPerMonth = y/100/12 * x;
    }
    alert('Сумма дохода вашего депозита в месяц:' + appData.savingsPerMonth);
}
function start() {
    money = +prompt('Введите ваш бюджет на месяц', '1000');
    time = prompt('Введите дату в формате YYYY-MM-DD', '1994-03-11');
    while(money == "" || (typeof(money)) == null || isNaN(money)) {
        money = +prompt('Введите ваш бюджет на месяц', '1000');
    }
}
function chooseExpenses () {
    for (var i = 0; i < 2; i++) {
        var a = prompt("Введите статью расходов", "");
        var b = +prompt("Сколько вы потратите на это?", "");
    if (typeof(a) !== null && typeof(b) !== null && a != '' && b != '' && a.length < 50) {
        console.log('vse ok');
        appData.expenses[a] = b;
    } else { //Вернуться к вопросу заново
        i -= 1;
    }
    }
}
function detectDayBudget() {
    appData.moneyPerDay = Math.floor(appData.budget / 30);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
function detectLevel() { //Пишем уровень достатка, исходя из бюджета
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
}
function chooseOptExpenses() {
    for(i=1;i<4;i++) {
        var u = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = u;
    }
}
chooseOptExpenses();
console.log (appData);