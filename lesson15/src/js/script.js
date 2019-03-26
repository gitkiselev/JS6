//require('es6-promise').polyfill();
require('formdata-polyfill');
 import 'nodelist-foreach-polyfill';
	import tab from './parts/tab';
	import modal from './parts/modal';
	import slider from './parts/slider';
	import smooth from './parts/smooth';
	import ajax from './parts/ajax';
	import calc from './parts/calc';
	import timer from './parts/timer';
	window.addEventListener('DOMContentLoaded', function(){
		'use strict';
		
		tab();
		modal();
		slider();
		smooth();
		ajax();
		calc();
		timer();
});
if ('NodeList' in window && !NodeList.prototype.forEach) {
	console.info('polyfill for IE11');
	NodeList.prototype.forEach = function (callback, thisArg) {
			thisArg = thisArg || window;
			for (var i = 0; i < this.length; i++) {
					callback.call(thisArg, this[i], i, this);
			}
	};
}

