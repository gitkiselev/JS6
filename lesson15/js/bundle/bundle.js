(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/smooth.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function ajax(){
let message = new Object();
message.loading = "Загрузка...";
message.success = "Спасибо! Скоро мы с вами свяжемся";
message.failure = "что пошло не так";

let form = document.getElementsByClassName("main-form")[0];
let input = form.getElementsByTagName("input");
let statusMessage = document.createElement("div");
statusMessage.classList.add("status");

form.addEventListener("submit", function(e) {
  event.preventDefault();
  form.appendChild(statusMessage);

  //AJAX
  let request = new XMLHttpRequest();
  request.open("POST", "server.php");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let formData = new FormData(form);

  request.send(formData);

  request.onreadystatechange = function() {
    if (request.readyState < 4) {
      statusMessage.innerHTML = message.loading;
    } else if (request.readyState === 4) {
      if (request.status === 200 && request.status < 300) {
        statusMessage.innerHTML = message.success;
        //можно  добавлять контент
      } else {
        statusMessage.innerHTML = message.failure;
      }
    }
  };

  for (let i = 0; i < input.length; i++) {
    input[i].value = ""; // ощищаем поля ввода
  }
});

//Скрипт к контактной форме
let message1 = new Object();
message1.loading = "Загрузка...";
message1.success = "Спасибо! Скоро мы с вами свяжемся";
message1.failure = "Недостаточно данных";
let contactForm = document.getElementById("form");
let contactInput = contactForm.getElementsByTagName("input");
let statusMessageCF = document.createElement("div");
statusMessageCF.classList.add("status");
let formDataCF = new FormData(contactForm);

contactForm.addEventListener("submit", function(e) {
  event.preventDefault();
  contactForm.appendChild(statusMessageCF);
  //AJAX for contact form
  let request1 = new XMLHttpRequest();
  request1.open("POST", "server.php");
  request1.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  request1.send(formDataCF);

  request1.onreadystatechange = function() {
    if (request1.readyState < 4) {
      statusMessageCF.innerHTML = message1.loading;
    } else if (request1.readyState === 4) {
      if (request1.status === 200 && request1.status < 300) {
        statusMessageCF.innerHTML = message1.success;
      } else {
        statusMessageCF.innerHTML = message1.failure;
      }
    }
  };
  for (let i = 0; i < contactInput.length; i++) {
    contactInput[i].value = ""; // ощищаем поля ввода
  }
});
}
module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc(){
	let persons = document.getElementsByClassName('counter-block-input')[0];
  let restDays = document.getElementsByClassName('counter-block-input')[1];
  let place = document.getElementById('select');
  let totalValue = document.getElementById('total');
  let personsSum = 0;
  let daysSum = 0;
  let total = 0;
  totalValue.innerHTML = 0;

  persons.addEventListener('input', function(e){
     persons.value = persons.value.replace(/^[0][0-9]{0,2}/, '');
       daysSum = +persons.value;
    total = (daysSum + personsSum)*4000;

    if(restDays.value == ''){
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
     
     
  });

  restDays.addEventListener('input', function(e){
     
      restDays.value = restDays.value.replace(/^[0][0-9]{0,2}/, '');
     
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
module.exports = calc;
},{}],4:[function(require,module,exports){
function modal(){
	let more = document.querySelector(".more");
  let info = document.querySelector(".info");
  let desc = document.querySelectorAll(".description-btn");
  let overlay = document.querySelector(".overlay");
  let close = document.querySelector(".popup-close");
  more.addEventListener("click", () => {
    more.classList.add("more-splash");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  info.addEventListener("click", e => {
    let target = e.target;
    if (target.classList.contains("description-btn")) {
      //this.classList.add('more-splash');
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
  close.addEventListener("click", () => {
    overlay.style.display = "none";
    close.classList.remove("more-splash");
    document.body.style.overflow = "";
  });

}
module.exports = modal;
},{}],5:[function(require,module,exports){
function slider(){
	let slideIndex = 1;
  let slides   = document.getElementsByClassName('slider-item');
  let prev     = document.querySelector('.prev');
  let next     = document.querySelector('.next');
  let dotsWrap = document.querySelector('.slider-dots');
  let dots      = document.getElementsByClassName('dot');

  showSlides(slideIndex);
  function showSlides(n){
    if(n > slides.length) {
      slideIndex = 1;
    }
    if(n < 1) {
      slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++){
      dots[i].classList.remove('dot-active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex -1].classList.add('dot-active');
  }
  function plusSlides(n){
    showSlides(slideIndex += n)
  }
  function currentSlide(n){
    showSlides(slideIndex = n)
  }
  prev.addEventListener('click', function(){
    plusSlides(-1);
  });
  next.addEventListener('click', function(){
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function(e){
    for(let i = 0; i < dots.length + 1; i++){
      if(e.target.classList.contains('dot') && e.target == dots[i-1]){
        currentSlide(i);
      }
    }
  });//end of slider

}
module.exports = slider;
},{}],6:[function(require,module,exports){
function smooth(){
	 let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.5; // скорость, может иметь дробное значение через точку
  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].onclick = () => {
      let link = linkNav[i];
      let w = window.pageYOffset, //отступ сверху
        hash = link.href.replace(/[^#]*(.*)/, "$1"); //меняем местами
      (t = document.querySelector(hash).getBoundingClientRect().top),
        (start = null);
      let step = time => {
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
      };
      false;
      requestAnimationFrame(step);
    };
  }
}
module.exports = smooth;
},{}],7:[function(require,module,exports){
function tab(){
	let tabs = document.querySelectorAll(".info-header-tab"); //заголовки табов
  let tabsWrapper = document.querySelector(".info-header"); //обертка хедеров табов
  let contents = document.querySelectorAll(".info-tabcontent");

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
}
module.exports = tab;
},{}],8:[function(require,module,exports){
function timer(){
	let deadline = "2018-06-16";
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000;
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor(t / (1000 * 60 * 60));
    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  let zeros = digit => {
    if (digit < 10) {
      digit = "0" + digit;
    }
    return digit;
  };
  let setClock = (id, endtime) => {
    let timer = document.getElementById(id);
    let hours = timer.querySelector(".hours");
    let minutes = timer.querySelector(".minutes");
    let seconds = timer.querySelector(".seconds");

    let updateClock = () => {
      let t = getTimeRemaining(endtime);
      hours.innerHTML   = zeros(t.hours);
      minutes.innerHTML = zeros(t.minutes);
      seconds.innerHTML = zeros(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
      }
    };
    let timeInterval = setInterval(updateClock, 1000);

    updateClock();
  };
  setClock("timer", deadline);
}
module.exports = timer;
},{}]},{},[1]);
