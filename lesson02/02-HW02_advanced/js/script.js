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

for (let i = 0; i < week.length; i++) {
	
	if ((week[i] == 'Sunday' || week[i] == 'Saturday') && i == date.getDay()) {
		document.write('<strong><em>' + week[i] + '</em></strong><br>');
	 } else if (week[i] == 'Sunday' || week[i] == 'Saturday'){
	 	document.write('<strong>' + week[i] + '</strong><br>');
	
	 } else {
			document.write(week[i] + '<br>');
		}
}

//2
let arr = ['25456', '874526', '3333', '5757557', '73496', '45', '4'];
for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] == 7 || arr[i][0] == 3) {
		document.write('Эта строка из чисел начинается  с трех или семи: ' + arr[i] + '<br>');
	}
}