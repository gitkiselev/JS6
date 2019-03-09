//1 начать рассчет
let startBtn = document.getElementById('start'),
//2 values
				budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    
//3 expenses
			expensesItem = document.querySelectorAll('.expenses-item'),

//4 кнопки утвердить и рассчитать
				expensesBtn = document.getElementsByTagName('button')[0],
				
				optionalExpensesBtn = document.getElementsByTagName('button')[1],
				countBtn = document.getElementsByTagName('button')[2],

//5   поля необязательных расходов
				optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), 

// Получить оставшиеся поля через querySelector
// (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
				incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
				monthValue = document.querySelector('.month-value'),
				dataWrapper = document.querySelector('.data');//делегирование событий
    dayValue = document.querySelector('.day-value');
				
				let money, time,
				allBtn = document.querySelectorAll('button'),
				allInputs = document.querySelectorAll('input[type=text]'),
				allCheckboxes = document.querySelectorAll('input[type=checkbox]');


				allBtn.forEach(function(btn) {
					btn.disabled = true;
				});
				

				dataWrapper.addEventListener('input', function(e) {
					
					if (e.target.classList.contains('expenses-item')) {
						console.log('input on expenses field input event');
						
						//let sum = 0;
						for(let i = 0; i < expensesItem.length; i++) {
							console.log('typing...');
							let a = expensesItem[i].value,
								b = expensesItem[++i].value = expensesItem[i].value.replace(/[^0-9]+/g, '');
								
								if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
									appData.expenses[a] = b;
								//sum += +b;
									enabledBtn(expensesBtn);
								} else {
									
									//i--;
									
								}
								//expensesValue.textContent = sum;
						}
						checkFilled(expensesItem);// в конце заработало
						
					} else if (e.target.classList.contains('optionalexpenses-item')) {
						console.log('click on optional expenses field input event');
						for(let i = 0; i < optionalExpensesItem.length; i++) {
							let a = optionalExpensesItem[i].value = optionalExpensesItem[i].value.replace(/[^А-ЯЁ]+/i, '');//1 доп задание
						}
						
					}
				});
				dataWrapper.addEventListener('click', function(e) {
					if (e.target.classList.contains('expenses-item-btn')) {
						let sum = 0;
						for(let i = 0; i < expensesItem.length; i++) {
							console.log('typing...');
							let a = expensesItem[i].value,
								b = expensesItem[++i].value = expensesItem[i].value.replace(/[^0-9]+/g, '');
								
								if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
									appData.expenses[a] = b;
								sum += +b;
									enabledBtn(expensesBtn);
								} else {
									
									//i--;
									
								}
								expensesValue.textContent = sum;
								appData.sumExpenses = sum;
								enabledBtn(countBtn);//возвращаем активность
						}
					}
					
				});
				
//Напишем универсальную функцию
				function toggleDisabledFields(fields, boolean) {
					fields.forEach(function(item) {
						item.disabled = boolean;
						//console.log(item.tagName + ' disabled?: ' + boolean);
					});
				}
		function toggleReadOnly(fields, boolean) {
			fields.forEach(function(item) {
				item.readOnly = boolean;
			});
		}
		//Функция возвращения активности кнопки
		function enabledBtn(btn) {
			//console.log('Кнопка расчитать - активна');
		btn.disabled = false;
		}




				//при запуске сделаем неактивным пока не нажата кнопка 'рассчитать'
				toggleDisabledFields(allCheckboxes, true);
				toggleDisabledFields(allBtn, true);
				toggleReadOnly(allInputs, true);

				//кнопку старта обратно делаем активной
				//startBtn.disabled = false;
				enabledBtn(startBtn);
				enabledBtn(optionalExpensesBtn);
			
					function checkFilled(fields) {
						expensesBtn.disabled = true;
						let sum = 0;
						for(let i = 0; i < fields.length; i++) {
							if(fields[i].value.length !== 0) {
								
								sum += 1;
								console.log('Это поле заполнено');
							} else {
								sum -= 1;
								console.log('Это поле стало пустым');
								
							}
						}
						if (sum > 3) {
							//enabledBtn(expensesBtn);
							expensesBtn.disabled = false;
						} else if (sum < 4){
							expensesBtn.disabled = true;
						}
					}
					

startBtn.addEventListener('click', function() {
	startBtn.disabled = true;//ставим неактивной
	countBtn.disabled = true;//пока не получим обяз траты
	//переводим флаг в true
appData.isActivated = true;
toggleDisabledFields(allCheckboxes, false);
toggleReadOnly(allInputs, false);

//enabledBtn(countBtn);

	time = prompt("Введите дату в формате YYYY-MM-DD");
	money = +prompt("Ваш бюджет на месяц", '');
	
	  while(isNaN(money) || money == '' || money == null) {
					money = +prompt("Ваш бюджет на месяц", '');
			}
			appData.budget = money;
			appData.timeData = time;
			budgetValue.textContent = money.toFixed();
			yearValue.value = new Date(Date.parse(time)).getFullYear();
			monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
			dayValue.value = new Date(Date.parse(time)).getDate();
		});			
  


optionalExpensesBtn.addEventListener('click', function() {
	for (var variableKey in appData.optionalExpenses){// 2 доп
		if (appData.optionalExpenses.hasOwnProperty(variableKey)){
						delete appData.optionalExpenses[variableKey];
		}
}
optionalexpensesValue.textContent = '';
	for(let i = 0; i < optionalExpensesItem.length; i++) {
		let optExpenses = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = optExpenses;
		optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
	for(let i = 0; i < optionalExpensesItem.length; i++) {
		optionalExpensesItem[i].value = '';
	}
});

countBtn.addEventListener('click', function() {
	if (appData.budget != undefined) {
			appData.moneyPerDay = (appData.budget / 30).toFixed() - (appData.sumExpenses / 30).toFixed();
			dayBudgetValue.textContent = appData.moneyPerDay;

			if (appData.moneyPerDay < 100) {
				levelValue.textContent = 'Минимальный уровень достатка';
				} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
					levelValue.textContent = 'Средний уровень достатка';
				} else if (appData.moneyPerDay > 2000) {
					levelValue.textContent = 'Высокий уровень достатка';
					} else {
					levelValue.textContent = 'Произошла ошибка';
				}
			} else {
				dayBudgetValue.textContent = 'Произошла ошибка';
			}
});

incomeItem.addEventListener('input', function() {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {
	if(appData.savings == true) {
		let sum = +sumValue.value,
						percent = +percentValue.value;
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function() {
	if(appData.savings == true) {
		let sum = +sumValue.value,
						percent = +percentValue.value;
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
	
});


let appData = {
		sumExpenses: 0,
	 isActivated: false,
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: false
};
