function ajax() {
	let message = {
					loading: 'Загрузка..',
					saccess: 'Спасибо! Скоро мы с вами свяжемся...',
					fail: 'Что-то пошло не так.'
	};

	let form = document.querySelector('form.main-form'),
					contactForm = document.querySelector('form#form'),
					tel = document.querySelectorAll('[type=tel]'),
					statusMessage = document.createElement('div');

	statusMessage.classList.add('status');
	tel.forEach((item) => {
					item.addEventListener('input', (e) => {
									if (!e.target.value.match("^[ 0-9\+]+$")) {
													e.target.value = e.target.value.slice(0, -1);
									}
					});
	});
	form.addEventListener('submit', (e) => {

					e.preventDefault();
					let req = sendForm(e);


	});
	contactForm.addEventListener('submit', (e) => {

					e.preventDefault();
					let req = sendForm(e);

	});

	function postJson(obj, message) {
					return new Promise(function (resolve, reject) {

									var xhr = new XMLHttpRequest();
									xhr.open('POST', './server.php');

									xhr.onload = function () {
													if (this.status == 200) {
																	resolve(message.saccess);
													} else {
																	var error = new Error(this.statusText);
																	error.code = this.status;
																	reject(message.fail);
													}
									};

									xhr.onerror = function () {
													reject(new Error(message.fail));
									};

									xhr.send(obj);
					});
	}
function sendForm(e) {
					let form = e.target,
									input = form.getElementsByTagName('input');

					form.appendChild(statusMessage);

					let req = new XMLHttpRequest();
					req.open('POST', './server.php');
					req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');


					let formData = new FormData(form);

					
					for (let i = 0; i < input.length; i++) {
									formData.delete(input[i].name);
									formData.append(input[i].type, input[i].value);
					}

					let obj = {};

					formData.forEach(function (value, key) {
									obj[key] = value;
					});

					let json = JSON.stringify(obj);

					postJson(json, message).then((text) => statusMessage.innerHTML = text).catch((text) => statusMessage.innerHTML = text)
									.then(() => {
													for (let i = 0; i < input.length; i++) {
																	input[i].value = '';
													}
									});

	}
}
export default ajax;