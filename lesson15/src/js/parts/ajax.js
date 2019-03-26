function form(){
	let sendRequest = (target) => {
					let message = {
													loading: "Загрузка....",
													success: "Спасибо! Скоро мы с вами свяжемся!",
													failure: "Что-то пошло не так...",
													hide: ""
									},
									statusMessage = document.createElement('div'),
									inputs = document.querySelectorAll('input'),
									hideModal = () => {
													let overlay = document.querySelector(".overlay");
					
													if (overlay.style.display == "block") {
															setTimeout(() => {
																	overlay.style.display = "none";
																	document.body.style.overflow = "";
																	statusMessage.innerHTML = message.hide;
															}, 2000);
													} else {
															setTimeout(() => {
																	statusMessage.innerHTML = message.hide;
															}, 2000);
													}
											},
									clearInputs = () => {
													inputs.forEach( item => { item.value = '';});                
									};
									
					
					statusMessage.classList.add('status');
					
					
					target.appendChild(statusMessage);
					
					let formData = new FormData(target),
									obj = {};
									
					formData.forEach(function(value, key){
									obj[key] = value;
					});
					let postData = () => {
									return new Promise( (resolve,reject) => {
													let request = new XMLHttpRequest(),
																	json = JSON.stringify(obj);
																	request.open('POST','server.php');
																	request.setRequestHeader('Content-type','application/json; charset=utf-8');
									
																	request.onreadystatechange = () => {
																					if (request.readyState < 4){
																									resolve();
																					} else if (request.readyState == 4 && request.status == 200){
																									
																									resolve();
																									
																									
																					} else {
																									reject();
																					}  
																	};
													request.send(json);
									});
	
				}; 
					postData()            
									.then( () => statusMessage.innerHTML = message.loading)
									.then( () => statusMessage.innerHTML = message.success)            
									.catch( () => statusMessage.innerHTML = message.failure)
									.then( () => clearInputs())
									.then( () => hideModal())
									
	};

	
	
	document.body.addEventListener('submit', e => {
					e.preventDefault();
					let target = e.target;


					(target.id == 'form' || target.classList.contains('main-form')) ? sendRequest(target) : '';
	});

	let formInputTel = document.querySelector('.popup-form__input');
	formInputTel.addEventListener('input', function() {
					formInputTel.value = formInputTel.value.replace(/[^+0-9]/g, '');
	});

	let inputContact = document.getElementsByTagName('input')[3];
					
	inputContact.addEventListener('input', function() {
	inputContact.value = inputContact.value.replace(/[^+0-9]/g, '');
	});
	
}
export default form;