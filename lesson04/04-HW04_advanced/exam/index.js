function getFriendlyNumbers(start, end){
    let arr= [];
    if(typeof(start) === 'string' || typeof(end) === 'string' || start > end || start < 0 || end < 0 || isNaN(start) || isNaN(end) || start % 1 !== 0 || end % 1 !== 0){
    	return false;
    }
    for (let i = start; i <= end; i++){
      for (let j = start; j <= end; j++ ){
        if(i < j && i != j && i === getSumDividors(j) && j === getSumDividors(i)){
           arr.push([i, j]);
        }
      }
    }
    arr.sort(function(a, b){
      return a - b;
    });
    return arr;
    function getSumDividors(num){
    let sum = 0;
    for(let i = 1; i < num; i++){
      if(num % i == 0){
         sum += i;
      }   
    }
    return sum;
  }
}//end of function
//console.log(getFriendlyNumbers(1, 300));
//console.log(getFriendlyNumbers(1000, 2000));

module.exports = {
    firstName: 'Andrei',
    secondName: 'Kiselev',
    task: getFriendlyNumbers
}