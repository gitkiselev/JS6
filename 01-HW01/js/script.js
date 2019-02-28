let money = prompt('Ваш бюджет на месяц');
let dailyBudget = money/30;
let time = prompt('Введите дату в формате YYYY-MM-DD');
let a = prompt('Введите обязательную статью расходов в этом месяце');
let b = prompt('Во сколько обойдется?');

let appData = {
		money: money,
		timeData: time,
		expenses : {
			required: a,
			amount: b
		},
		optionalExpenses : {

		},
		income : [],
		savings: false
}
console.log(dailyBudget);