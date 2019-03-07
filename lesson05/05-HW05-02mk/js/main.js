//1 начать рассчет
let start = document.getElementById('start');
//2 values
let budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');
    
//3 expenses
let expensesItems = document.querySelectorAll('.expenses-item');

//4 кнопки ктвердить и рассчитать
let expensesBtn = document.getElementsByTagName('button')[0],
        optExpBtn = document.getElementsByTagName('button')[1];

//5   поля необязательных расходов
let optExpensesItems = document.querySelectorAll('.optionalexpenses-item'); 

// Получить оставшиеся поля через querySelector
// (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings > #savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.yearsavings-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    