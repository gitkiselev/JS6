//console.log('Проверка');
//1 and 2

function zeros(digit){
	if(digit < 10){
		digit = '0' + digit;
	}
	return digit;
}
function showDate(){
	let currentDate = new Date(),
	hours   = currentDate.getHours(),
	minutes = currentDate.getMinutes(),
	seconds = currentDate.getSeconds(),
	day     = currentDate.getDay() + 1,
	month   = currentDate.getMonth() + 1,
	year    = currentDate.getFullYear(),
	out     = document.getElementById('out');
	out.textContent = zeros(hours) +":" + zeros(minutes) +":"+
 	zeros(seconds) + ' ' + zeros(day) +"." + zeros(month) +"." + year;;
 	setTimeout(function() {//для красоты сделал setTimeout
    	showDate()
	}, 1000);
}
showDate();
//3
let today = new Date();




//.toLocaleString("ru", options);

function dayweekString(num){
	switch (num) {
		case 0:
	     	return ('Воскресенье');
	     	break;
        case 1:
	        return ('Понедельник');
	        break;
    	case 2:
		    return ('Вторник');
		    break;
	  	case 3:
		    return ('Среда');
		    break;
	    case 4:
		    return('Четверг');
		    break;
	    case 5:
		    return ('Пятница');
		    break;
	    case 6:
	    	return('Суббота');
	    	break;
	    default:
	        console.log('Такого дня недели нет');
}
}	
let  todayOutput = document.getElementById('today-output');
let p = today.getDay();
console.log(dayweekString(p));
todayOutput.textContent += dayweekString(p);
//4
let day1 = document.getElementById('day1_field');
let day2 = document.getElementById('day2_field');
let result = document.getElementById('result');
let getResult = document.getElementById('get-result');


let arr1 = new Array();
let arr2 = new Array();
let d1m;
let d2m;
let d1;
let d2;
//getResult.disabled = true;
// положил даты в массив, по другому не получалось
getResult.disabled = true;
day1.value = new Date();
day2.value = new Date();
// day1.onreset = function(){
// 	console.log('reset');
// 	day1.value = new Date();
// }
day1.oninput = function(){
	if(this.value != d1){
		arr1.pop();
		
		let d1 = day1.value;//YYYY=MM-DD
		if(arr2 != ''){
			getResult.disabled = false;
		}
		
	let d1m = new Date(d1);
	
	arr1.push(d1m);
	console.log('new Date(d1).getTime()-> ' + d1m);//1551963450601
	console.log(new Date(d1));//Thu Mar 07 2019 15:56:57 GMT+0300 (Москва, стандартное время)
	console.log('changed 1');
	}
	
}

day2.oninput = function(){
	if(this.value != d2){
		arr2.pop();//ощищаем массив перед записью нового значения
		
		let d2 = day2.value;
		if(arr1 != ''){
			getResult.disabled = false;
		}

	let d2m = new Date(d2);
	arr2.push(d2m);
	console.log(d2);//YYYY-MM-DD
	console.log(d2m);//1529020800000
	console.log('changed 2');
	}
	
	
}


document.body.style.backgroundColor = '';
getResult.addEventListener('click', function(){

	
		
		console.log('Клик по кнопке');
		let timeDiff = Math.abs(arr2[0].getTime() - arr1[0].getTime());
		let diffDays = Math.ceil(timeDiff/(1000*3600*24));
		result.value = diffDays;
	
	


});
	




