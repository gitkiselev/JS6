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
let p1 = document.createElement('p');
p1.textContent = 'Дни недели';
p1.style.cssText = 'font-weight: bold; font-size: 18px; font-family: Roboto';
document.body.appendChild(p1);
let out = document.createElement('div');
	
for (let i = 0; i < week.length; i++) {
	let dayItem = document.createElement('p');
	
	if ((week[i] == 'Sunday' || week[i] == 'Saturday') && i == date.getDay()) {
		dayItem.style.cssText = "font-weight: bold; font-style: italic;";
		dayItem.textContent += week[i];
		
		
	 } else if (week[i] == 'Sunday' || week[i] == 'Saturday'){
			dayItem.style.cssText = 'font-weight: bold;';
			dayItem.textContent += week[i];
			
			
	
	 } else {
			
			dayItem.textContent += week[i];
			
			
		}
		document.body.appendChild(dayItem);
}

//2
let p2 = document.createElement('p');
p2.textContent = 'Строки, начинающиеся с цифр семь или три';
document.body.appendChild(p2);
let digits = document.createElement('div');
p2.style.cssText = 'font-weight: bold; font-size: 18px; font-family: Roboto';
document.body.appendChild(digits);
let arr = [];
for (let i = 0; i < 7; i++) {
	let digitItem = document.createElement('p');
	let digit = prompt('Введите число, хотя бы одно чтоб начиналось с трех или  семи', '');
	arr.push(digit);
	if (arr[i].slice(0, 1) == 7 || arr[i].slice(0, 1) == 3) {
		
		digitItem.textContent += 'Эта строка из чисел начинается  с трех или семи: ' + arr[i];
		
	}
	document.body.appendChild(digitItem);
}
