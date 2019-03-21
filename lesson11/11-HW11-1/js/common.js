window.onload = function(){
	let tabs  		 = document.querySelectorAll('.info-header-tab'),//заголовки табов
	tabsWrapper  = document.querySelector('.info-header'),//обертка хедеров табов
	contents     = document.querySelectorAll('.info-tabcontent');


	tabsWrapper.addEventListener('click', (e) => {
		
		if(e.target.classList.contains('info-header-tab')){
			
			for(let i = 0; i < tabs.length; i++){
				tabs[i].classList.remove('active');
				contents[i].classList.remove('show');
				if(e.target === tabs[i]){
					tabs[i].classList.add('active');
					contents[i].classList.add('show');
				}
			}
		}
	});
	
	//timer
	let deadline = '2018-06-16';
	function getTimeRemaining(endtime){
		let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor((t/(1000*60*60)));
		return {
			'total'  : t,
			'hours'  : hours,
			'minutes': minutes,
			'seconds': seconds
		};	
	};
	
	function setClock(id, endtime){
		let timer   = document.getElementById(id),
		hours   = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');
		function zeros(digit){
			if(digit < 10){
				digit = '0' + digit;
			}
			return digit;
		};
		let timeInterval = setInterval(updateClock, 1000);
		function updateClock(){
			let t = getTimeRemaining(endtime);
			hours.innerHTML   = zeros(t.hours);
			minutes.innerHTML = zeros(t.minutes);
			seconds.innerHTML = zeros(t.seconds);
			
			if(t.total <= 0){
				clearInterval(timeInterval);
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			}	
		};
		updateClock();
		

	};
	setClock('timer', deadline);

	//усложненное задание
	let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.5;  // скорость, может иметь дробное значение через точку
		for (let i = 0; i < linkNav.length; i++) {
		  linkNav[i].onclick = function(){
		    let w = window.pageYOffset,//отступ сверху
		        hash = this.href.replace(/[^#]*(.*)/, '$1');//меняем местами
		        t = document.querySelector(hash).getBoundingClientRect().top,
		        start = null;
		    requestAnimationFrame(step);
		    function step(time) {
		      if (start === null) start = time;
		      let progress = time - start,
		          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
		      window.scrollTo(0,r);
		      if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
		    }
		    return false;
		  }
		}
			//HomeWork 9
			//Modal
			//let more = document.querySelector('.more'),
			//info = document.querySelector('.info'),
			let desc = document.querySelectorAll('.description-btn'),
			overlay = document.querySelector('.overlay'),
			body = document.body,
			close = document.querySelector('.popup-close');
			body.addEventListener('click', function(e) {
				if(e.target.classList.contains('more')){
					desc.classList.add('more-splash');
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
				}
				if(e.target.classList.contains('description-btn')){
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
				}
				if(e.target.classList.contains('popup-close')){
					overlay.style.display = 'none';
					close.classList.remove('more-splash');
					document.body.style.overflow = '';
				}
			});
			//form in modal
			let message = {
				loading: 'Загрузка...',
				success: 'Спасибо! Скоро мы с вами свяжемся!',
				failure: 'Что-то пошло не так...'
			};

			let form = document.querySelector('.main-form'),
			input = form.getElementsByTagName('input');
			let mainFormInput = document.querySelector('.popup-form__input');
			
			
			
				
			
			mainFormInput.addEventListener('input', function() {
				console.log('input');
				mainFormInput.value = mainFormInput.value.replace(/[^\d\+]/g, '');//works
				if (mainFormInput.value[0] != '+'){
					mainFormInput.value = '+';
				}
				mainFormInput.value = mainFormInput.value.replace(/[^(\+?\d)\+]/g, '');
				
			});
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			form.addEventListener('submit', function(e){
				e.preventDefault();
				form.appendChild(statusMessage);
				
				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				//request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				formData = new FormData(form);
				let obj = {};
				formData.forEach(function(value, key){
					obj[key] = value;
				});
				let json = JSON.stringify(obj);
				//request.send(formData);
				request.send(json);
				request.addEventListener('readystatechange', function(){
					if(request.readyState < 4) {
						let pic = new Image();
						pic.src = 'img/ajax-loader.gif';//усложненное
						statusMessage.appendChild(pic);
						setTimeout(function(){
							statusMessage.innerHTML = '';
						}, 1000);
						//statusMessage.innerHTML = message.loading;
					} else if(request.readyState === 4 && request.status === 200){
						let pic1 = new Image();
							pic1.src = 'img/complete.gif';//усложненное
							statusMessage.appendChild(pic1);
							setTimeout(function(){
								statusMessage.innerHTML = '';
							}, 1000);
						//statusMessage.innerHTML = message.success;
						
					} else {
						statusMessage.innerHTML = message.failure;
					}
				});
				for (let i = 0; i < input.length; i++){
					input[i].value = '';
				}
			});





			//Скрипт к контактной форме
  let message1 = {};
  message1.loading = "Загрузка...";
  message1.success = "Спасибо! Скоро мы с вами свяжемся";
  message1.failure = "Недостаточно данных";
  let contactForm = document.getElementById('form');
		let contactInput = contactForm.getElementsByTagName('input')[1];
		
		contactInput.addEventListener('input', function() {
			console.log('contact input');
			contactInput.value = contactInput.value.replace(/[^\d\+]/g, '');//works
			if (contactInput.value[0] != '+'){
				contactInput.value = '+';
			}
			contactInput.value = contactInput.value.replace(/[^(\+?\d)\+]/g, '');
			
		});

  let statusMessageCF = document.createElement('div');
  statusMessageCF.classList.add('status');
  let formDataCF = new FormData(contactForm);






  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    contactForm.appendChild(statusMessageCF);
    //AJAX for contact form
  let request1 = new XMLHttpRequest();
  request1.open("POST", "server.php");
		request1.setRequestHeader("Content-Type", "application/json; charset=utf-8");
		



  
	let obj1 = {};
		formDataCF.forEach(function(value, key){
			obj1[key] = value;
		});
		
		let json1 = JSON.stringify(obj1);
		request1.send(json1);
  request1.addEventListener('readystatechange', function(){
    if(request1.readyState < 4){
      statusMessageCF.innerHTML = message1.loading;
    } else if(request1.readyState === 4){
      if(request1.status === 200 && request1.status < 300){
							let pic2 = new Image();
							pic2.src = 'img/complete.gif';//усложненное
							statusMessage.appendChild(pic2);
							setTimeout(function(){
								statusMessage.innerHTML = '';
							}, 1000);

        //statusMessageCF.innerHTML = message1.success;
      } else {
        statusMessageCF.innerHTML = message1.failure;
      }
    }
  });
      for(let i = 0; i < contactInput.length; i++){
        contactInput[i].value = '';
      }

  });

}