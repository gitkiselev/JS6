function calc(){
	//HW 13 calculator
  let persons = document.getElementsByClassName('counter-block-input')[0],
   restDays = document.getElementsByClassName('counter-block-input')[1],
   place = document.getElementById('select'),
  totalValue = document.getElementById('total'),
  personsSum = 0,
  daysSum = 0,
  total = 0;
  totalValue.innerHTML = 0;

  persons.addEventListener('change', function(){
     persons.value = persons.value.replace(/^0|[^\d]/g, '');
					personsSum = +persons.value;
    total = (daysSum + personsSum)*4000;

    if(restDays.value == ''){
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
     
     
  });

  restDays.addEventListener('change', function(){
     
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
}
//end of calculator
export default calc;