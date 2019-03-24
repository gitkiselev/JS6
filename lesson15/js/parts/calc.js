function calc(){
	//HW 13 calculator
  let persons = document.getElementsByClassName('counter-block-input')[0];
  let restDays = document.getElementsByClassName('counter-block-input')[1];
  let place = document.getElementById('select');
  let totalValue = document.getElementById('total');
  let personsSum = 0;
  let daysSum = 0;
  let total = 0;
  totalValue.innerHTML = 0;

  persons.addEventListener('change', function(e){
     persons.value = persons.value.replace(/^0|[^\d]/g, '');
       daysSum = +persons.value;
    total = (daysSum + personsSum)*4000;

    if(restDays.value == ''){
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
     
     
  });

  restDays.addEventListener('change', function(e){
     
      restDays.value = restDays.value.replace(/^0|[^\d]/g, '');
     
      daysSum = +restDays.value;
    total = (daysSum + personsSum)*4000;
    if(persons.value == ''){
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
     
    
  });

  place.addEventListener('change', function(){
    if(restDays.value == '' || persons.value == ''){
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
//end of calculator
module.exports = calc;