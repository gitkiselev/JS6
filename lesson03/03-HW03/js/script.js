let money, time;
  
function start() {
	money = +prompt("Ваш бюджет на месяц", '');
	time = prompt("Введите дату в формате YYYY-MM-DD");
	  while(isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц", '');
	  }
}
start();

let appData = {
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: true
};

function chooseExpenses() {
	for(let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = +prompt("Во сколько обойдется?", '');
			if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
				console.log('done');
				appData.expenses[a] = b;
			} else {
				i--;
			}
	};
 }
 chooseExpenses();
	
/*Оформить расчет дневного бюджета  и вывод на экран
 этого значения как одну функцию (detectDayBudget)*/	
 
function detectDayBudget() {
	alert("Ваш ежедневный бюджет " + appData.budget / 30);
	console.log("Ваш ежедневный бюджет " + appData.budget / 30);
}
detectDayBudget();

appData.moneyPerDay = (appData.budget / 30).toFixed(1);



/*Оформить блок кода с расчетом уровня достатка
 как отдельную функцию (detectLevel)*/
function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка');
		} else if (appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка');
		} else {
			console.log('Произошла ошибка');
		}
		
}
detectLevel();

function checkSavings() {
	if(appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?', ''),
			percent = +prompt('Под какой процент?', '');
			appData.monthIncome = save/100/12*percent;
			alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
	}
}
checkSavings();
/*Создать функцию для определения необязательных расходов (chooseOptExpenses):

Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”

Записать ответы в объект optionalExpenses в формате Номер - Ответ.

optionalExpenses: {

1 : “ответ на вопрос”

}*/
function chooseOptExpenses() {
	for(let i = 0; i < 3; i++) {//проверку убрал, т. к. это необязательные расходы
		let optExpenses = prompt("Статья необязательных расходов?", '');
		appData.optionalExpenses[i+1] = optExpenses;
		console.log('доп расходы');
	};
}
chooseOptExpenses();