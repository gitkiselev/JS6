let money = +prompt("Ваш бюджет на месяц"),
  time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: false
};

let requiredMonth1 = prompt("Введите обязательную статью расходов в этом месяце");
  appData.expenses[requiredMonth1] = +prompt("Во сколько обойдется?");
  let requiredMonth2 = prompt("Введите обязательную статью расходов в этом месяце");
  appData.expenses[requiredMonth2] = +prompt("Во сколько обойдется?");
  let sum1 = appData.expenses[requiredMonth1],
		sum2 = appData.expenses[requiredMonth2];
		console.log(sum1);
		console.log(sum2);
		
alert("Ваш ежедневный бюджет " + money / 30);
alert("Ваша сумма обязательных расходов " + (sum1 + sum2));
console.log(sum1 + sum2);
console.log(appData);
