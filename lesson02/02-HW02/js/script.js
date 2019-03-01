let money = +prompt("Ваш бюджет на месяц", ''),
  time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: false
};


		
//alert("Ваш ежедневный бюджет " + appData.budget / 30);
//alert("Ваша сумма обязательных расходов " + (sum1 + sum2));
for(let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = +prompt("Во сколько обойдется?", '');
			if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
				console.log('done');
				appData.expenses[a] = b;
			} else {
				i--;
			}
	
};//it's works


// let i = 0;
// do {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	b = +prompt("Во сколько обойдется?", '');
// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 		console.log('done');
// 		appData.expenses[a] = b;
// 		i++;
// 	} else {
// 		i--;
// 	}
// } while (i < 2) {
	
	
// }works

// let i = 0;
// while (i < 2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	b = +prompt("Во сколько обойдется?", '');
// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 		console.log('done');
// 		appData.expenses[a] = b;
// 		i++;
// 	} else {
// 		i--;
// 	}
// }it's works



appData.moneyPerDay = appData.budget / 30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);
////console.log(sum1 + sum2);
//console.log(appData);
if (appData.moneyPerDay < 100) {
console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Произошла ошибка');
}
