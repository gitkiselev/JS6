function calc() {
	let inputs = document.querySelectorAll('.counter-block-input'),
	persons = document.querySelectorAll('.counter-block-input')[0],
	restDay = document.querySelectorAll('.counter-block-input')[1],
	place = document.getElementById('select'),
	totalValue = document.getElementById('total');
	

	function animateValue(obj, start, end, duration) {
					let range = end - start,
									current = start,
									increment = end > start ? 1 : -1,
									stepTime = Math.abs(Math.floor(duration / range)),
									timer = setInterval(function () {
													current += increment;
													obj.innerHTML = current;
													if (current == end) {
																	clearInterval(timer);
													}
									}, stepTime);
	}

	function validateCalcInput(input) {
					if (!input.match("^[ 0-9]+$")) {
									return input.slice(0, -1);
					} else {
									return input;
					}
	}

	function contCalc(people, days, place) {
					return (people * days) * 10 * place;
	}

	function checkCalcValue(input1, input2) {
					if (input1.value != '' && input2.value != '' && input2.value != 0 && input1.value != 0) {
									return true;
					} else {
									return false;
					}
	}

	totalValue.innerHTML = 0;

	
inputs.forEach((item) => {
					item.addEventListener('input',()=>{
									item.value = validateCalcInput(item.value);
					});

					item.addEventListener('change', ()=>{
									if (checkCalcValue(persons,restDay)) { 
													
													animateValue(totalValue,+totalValue.textContent,+contCalc(+persons.value,+restDay.value,+place.options[place.selectedIndex].value, 3000));
									} else { totalValue.innerHTML = 0}
					});

	});
	place.addEventListener('change', () => {
					if (checkCalcValue(persons,restDay)) { 
									animateValue(totalValue,+totalValue.textContent,+contCalc(+persons.value,+restDay.value,+place.options[place.selectedIndex].value, 3000));
					} else { totalValue.innerHTML = 0}
	});

}
export default calc;