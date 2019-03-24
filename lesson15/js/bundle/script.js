window.addEventListener('DOMContentLoaded', function(){
	let tab    = require('../parts/tab.js');
	let modal  = require('../parts/modal.js');
	let slider = require('../parts/slider.js');
	let smooth = require('../parts/smooth.js');
	let ajax   = require('../parts/ajax.js');
	let calc   = require('../parts/calc.js');
	let timer  = require('../parts/timer.js');
	
	tab();
	modal();
	slider();
	smooth();
	ajax();
	calc();
	timer();
});