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
let out = document.createElement('div');
out.classList.add('week');
document.body.appendChild(out);

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
let digits = document.createElement('div');
digits.classList.add('digits');
document.body.appendChild(digits);
let arr = [];
for (let i = 0; i < 7; i++) {
	let digit = prompt('Введите число, хотя бы одно чтоб начиналось с трех или  семи', '');
	arr.push(digit);
}
for (let i = 0; i < arr.length; i++) {
	if (arr[i].slice(0, 1) == 7 || arr[i].slice(0, 1) == 3) {
		
		digits.innerHTML += 'Эта строка из чисел начинается  с трех или семи: ' + arr[i] + '<br>';
	}
}