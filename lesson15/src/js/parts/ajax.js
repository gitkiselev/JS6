function ajax(){
	
	//form in modal///////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	
		let contactForm = document.getElementById('form'),
	  	mainFormInput = document.querySelector(".popup-form__input");
  
	mainFormInput.addEventListener("input", function() {
	  
	  mainFormInput.value = mainFormInput.value.replace(/[^\d\+]/g, ""); //works
	  if (mainFormInput.value[0] != "+") {
		mainFormInput.value = "+";
	  }
	});
	let contactInput = contactForm.getElementsByTagName("input")[1]; //поле с телефоном
  
	contactInput.addEventListener("input", () =>  {
	  
	  contactInput.value = contactInput.value.replace(/[^\d\+]/g, ""); //works
	  if (contactInput.value[0] != "+") {
		contactInput.value = "+";
	  }
	});
	

  
	
	  document.body.addEventListener("submit", e =>  {
	  	e.preventDefault();
	  	if(e.target.id == 'form' || e.target.classList.contains('main-form')){
	  		sendForm(e.target);
	  	}
	  	
	  	
	  });



	  

		function sendForm(elem) {
		
			
			 let message = {
                loading: "Загрузка....",
                success: "Спасибо! Скоро мы с вами свяжемся!",
																failure: "Что-то пошло не так...",
																hide: ""
            },
            statusMessage = document.createElement('div'),
            inputs = document.querySelectorAll('input'),
            clearInputs = () => {
                inputs.forEach( item => { item.value = '';});
												},
												hideModal = () => {
													let overlay = document.querySelector('.overlay');
													
														if(overlay.style.display == 'block') {
															setTimeout(() => {
																overlay.style.display = 'none';
																document.body.style.overflow = '';
																statusMessage.innerHTML = message.hide;
															}, 2000);
														} else {
															setTimeout(() => {
																
																statusMessage.innerHTML = message.hide;
															}, 2000);
														}
													
												};
												
        
        statusMessage.classList.add('status');

		elem.appendChild(statusMessage);
		let formData = new FormData(elem),
			obj = {};

			formData.forEach(function(value, key){
				obj[key] = value;
			});
			
			
		function PostData() {
		  return new Promise(function(resolve, reject) {
			let request = new XMLHttpRequest();
			let json = JSON.stringify(obj);
			request.open("POST", "../../src/server.php");
			
			request.setRequestHeader(
			  "Content-Type",
			  "application/json; charset=utf-8"
			);
			
			
			
			request.addEventListener("readystatechange", () =>  {
			  if (request.readyState < 4) {
				resolve();
			  } else if (request.readyState === 4 && request.status == 200) {
				
				  resolve();
				
			  } else {
				reject();
			  }
			});
			request.send(json);
		  });
		} //end PostData
  
		
  
		PostData()
		  .then( () => statusMessage.innerHTML = message.loading)
												.then( () => statusMessage.innerHTML = message.success,
												)
            .catch( () => statusMessage.innerHTML = message.failure)
												.then( () => clearInputs())
												.then(() => hideModal());
												
	  
	  
	}
	
		};
export default  ajax;