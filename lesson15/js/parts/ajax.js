function ajax(){
	
	//form in modal///////////////////////////////////////////////////////////////////////////////////////////////////////
	let message = {
	  loading: "Загрузка...",
	  success: "Спасибо! Скоро мы с вами свяжемся!",
	  failure: "Что-то пошло не так..."
	};
	statusMessage = document.createElement('div'),
	inputs = document.querySelectorAll('input');
	clearInputs = () => {
		inputs.forEach(item => {item.value = '';});
	};
	let form = document.querySelector(".main-form"),
		contactForm = document.getElementById('form'),
	  	mainFormInput = document.querySelector(".popup-form__input");
  
	mainFormInput.addEventListener("input", function() {
	  console.log("input");
	  mainFormInput.value = mainFormInput.value.replace(/[^\d\+]/g, ""); //works
	  if (mainFormInput.value[0] != "+") {
		mainFormInput.value = "+";
	  }
	});
	contactInput = contactForm.getElementsByTagName("input")[1]; //поле с телефоном
  
	contactInput.addEventListener("input", function() {
	  console.log("contact input");
	  contactInput.value = contactInput.value.replace(/[^\d\+]/g, ""); //works
	  if (contactInput.value[0] != "+") {
		contactInput.value = "+";
	  }
	});
	statusMessage = document.createElement("div");
	statusMessage.classList.add("status");

  
	function sendForm(elem) {
	  elem.addEventListener("submit", function(e) {
		e.preventDefault();
		elem.appendChild(statusMessage);
		
		function PostData(data) {
		  return new Promise(function(resolve, reject) {
			let request = new XMLHttpRequest();
			request.open("POST", "server.php");
			//request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.setRequestHeader(
			  "Content-Type",
			  "application/json; charset=utf-8"
			);
			let formData = new FormData(elem),
			obj = {};
			formData.forEach(function(value, key){
				obj[key] = value;
			});
			let json = JSON.stringify(obj);
			
			
			request.addEventListener("readystatechange", function() {
			  if (request.readyState < 4) {
				resolve();
			  } else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
				  resolve();
				}
			  } else {
				reject();
			  }
			});
			request.send(json);
		  });
		} //end PostData
  
		
  
		PostData()
		  .then(() => {
			let loadImg = new Image();
			loadImg.src = "img/loading.gif"; 
			statusMessage.appendChild(loadImg);
			setTimeout(function() {
			  statusMessage.innerHTML = "";
			}, 1000);
		  })
		  .then(() => {
			let completeImg = new Image();
			completeImg.src = "img/complete.gif"; 
			statusMessage.appendChild(completeImg);
			setTimeout(function() {
			  statusMessage.innerHTML = "";
			}, 1000);
		  })
		  .then(() => (statusMessage.innerHTML = message.loading))
		  .then(() => {
			//thanksModal.style.display = 'block';
			//mainModal.style.display = 'none';
			statusMessage.innerHTML = "";
		  })
		  .catch(() => (statusMessage.innerHTML = message.failure))
		  .then(clearInputs);
	  });
	  
	}
	sendForm(form);
	sendForm(contactForm);
		};
module.exports = ajax;