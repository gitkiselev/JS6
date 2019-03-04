//1
let str = 'урок-3-был слишком легким';
let newStr = str.charAt(0).toUpperCase() + str.slice(1);
console.log(newStr);
//2
let str2 = newStr.replace(/-/ig,' ');
console.log(str2);//Урок 3 был слишком легким

//3 Из получившейся строки вырезать слово “легким”, в этом
// же слове заменить 2 последние буквы на букву “о”
function slicedWord() {
	let slicedString = newStr.slice(-6);
	console.log(slicedString);
	let changed = slicedString.slice(0, slicedString.length - 2) + 'оо';//length
	
	console.log(changed);//легко
}
slicedWord();
//4 У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]

//Вывести в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)
arr = [20, 33, 1, 'Человек', 2, 3];
for(let i = 0; i < arr.length; i++) {
	if(typeof(arr[i]) !== 'number') {
		arr.splice(i, 1);
		i--;
	}
	arr[i] = Math.pow(arr[i], 3);
	
}

let sum = 0;
	for(let j = 0; j < arr.length; j++){
		sum += arr[j];
	}
	let res = Math.sqrt(sum);
	console.log(res);
//5
function getMaxLengthString(str){
	if (typeof str !== 'string') {//все, что не строка
		console.log('Введите строковый тип данных');
		return false;
	
	}else {
		str = str.trim();
		if (str.length > 50) {
			str = str.slice(0, 50) + '...';
		}
		return str;
	}
}
console.log(getMaxLengthString('qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm'));
console.log(getMaxLengthString(55));