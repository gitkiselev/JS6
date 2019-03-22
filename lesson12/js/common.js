window.onload = function() {
	let tabs = document.querySelectorAll(".info-header-tab"), //заголовки табов
	  tabsWrapper = document.querySelector(".info-header"), //обертка хедеров табов
	  contents = document.querySelectorAll(".info-tabcontent");
  
	tabsWrapper.addEventListener("click", e => {
	  if (e.target.classList.contains("info-header-tab")) {
		for (let i = 0; i < tabs.length; i++) {
		  tabs[i].classList.remove("active");
		  contents[i].classList.remove("show");
		  if (e.target === tabs[i]) {
			tabs[i].classList.add("active");
			contents[i].classList.add("show");
		  }
		}
	  }
	});
  
	//timer
	let deadline = "2018-06-16";
	function getTimeRemaining(endtime) {
	  let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
		seconds = Math.floor((t / 1000) % 60),
		minutes = Math.floor((t / 1000 / 60) % 60),
		hours = Math.floor(t / (1000 * 60 * 60));
	  return {
		total: t,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	  };
	}
  
	function setClock(id, endtime) {
	  let timer = document.getElementById(id),
		hours = timer.querySelector(".hours"),
		minutes = timer.querySelector(".minutes"),
		seconds = timer.querySelector(".seconds");
	  function zeros(digit) {
		if (digit < 10) {
		  digit = "0" + digit;
		}
		return digit;
	  }
	  let timeInterval = setInterval(updateClock, 1000);
	  function updateClock() {
		let t = getTimeRemaining(endtime);
		hours.innerHTML = zeros(t.hours);
		minutes.innerHTML = zeros(t.minutes);
		seconds.innerHTML = zeros(t.seconds);
  
		if (t.total <= 0) {
		  clearInterval(timeInterval);
		  hours.innerHTML = "00";
		  minutes.innerHTML = "00";
		  seconds.innerHTML = "00";
		}
	  }
	  updateClock();
	}
	setClock("timer", deadline);
  
	//усложненное задание
	let linkNav = document.querySelectorAll('[href^="#"]'),
	  V = 0.5; // скорость, может иметь дробное значение через точку
	for (let i = 0; i < linkNav.length; i++) {
	  linkNav[i].onclick = function() {
		let w = window.pageYOffset, //отступ сверху
		  hash = this.href.replace(/[^#]*(.*)/, "$1"); //меняем местами
		(t = document.querySelector(hash).getBoundingClientRect().top),
		  (start = null);
		requestAnimationFrame(step);
		function step(time) {
		  if (start === null) start = time;
		  let progress = time - start,
			r =
			  t < 0
				? Math.max(w - progress / V, w + t)
				: Math.min(w + progress / V, w + t);
		  window.scrollTo(0, r);
		  if (r != w + t) {
			requestAnimationFrame(step);
		  } else {
			location.hash = hash;
		  }
		}
		return false;
	  };
	}
	//HomeWork 9
	//Modal
	//let more = document.querySelector('.more'),
	//info = document.querySelector('.info'),
	let desc = document.querySelectorAll(".description-btn"),
	  overlay = document.querySelector(".overlay"),
	  body = document.body,
	  close = document.querySelector(".popup-close");
	body.addEventListener("click", function(e) {
	  if (e.target.classList.contains("more")) {
		desc.classList.add("more-splash");
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	  }
	  if (e.target.classList.contains("description-btn")) {
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	  }
	  if (e.target.classList.contains("popup-close")) {
		overlay.style.display = "none";
		close.classList.remove("more-splash");
		document.body.style.overflow = "";
	  }
	});
  
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
  