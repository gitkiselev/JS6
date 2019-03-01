let week = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
],
date = new Date();
let out = document.querySelector('.week');

for (let i = 0; i < week.length; i++) {
	
	if ((week[i] == 'Sunday' || week[i] == 'Saturday') && i == date.getDay()) {
		out.innerHTML += '<strong><em>' + week[i] + '</em></strong><br>';
	 } else if (week[i] == 'Sunday' || week[i] == 'Saturday'){
	 	out.innerHTML += '<strong>' + week[i] + '</strong><br>';
	
	 } else {
			out.innerHTML += week[i] + '<br>';
		}
}

//2
let digits = document.querySelector('.digits');
let arr = [];
for (let i = 0; i < 7; i++) {
	let digit = prompt('Введите число, хотя бы одно чтоб начиналось с трех или  семи', '');
	arr.push(digit);
}
for (let i = 0; i < arr.length; i++) {
	if (arr[i].indexOf(3) == 0 || arr[i].indexOf(7) == 0) {
		console.log(arr[i].indexOf(3));
		digits.innerHTML += 'Эта строка из чисел начинается  с трех или семи: ' + arr[i] + '<br>';
	}
}