var money = prompt('Введите ваш бюджет на месяц', '1000'); // Перед промпт нужно поставить + позже.
var time = prompt('Введите дату в формате YYYY-MM-DD', '1994-03-11'); // +prompt
var answer2 = +prompt("Сколько на ширку?", "");
var answer4 = +prompt("Сколько на уборку?", "");

// Деньги и время возвращаются в консоль
var appData = {};
appData.budget = +money;
appData.timeData = time;
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;
appData.expenses= {
    Ширка : +answer2,
    Уборка : +answer4
};
alert(+appData.budget / 30);
console.log (appData);