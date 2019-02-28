let num = 33721;
function persistence(num) {
	return res = [...num.toString()].reduce((prev, current) => prev * current);
}

console.log(persistence(num));//126
//console.log(...num.toString());
console.log((res**3).toString().slice(0,2));//20