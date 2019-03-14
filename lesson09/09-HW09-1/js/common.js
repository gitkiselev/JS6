window.onload = function(){
	let tabs  		 = document.querySelectorAll('.info-header-tab');//заголовки табов
	let tabsWrapper  = document.querySelector('.info-header');//обертка хедеров табов
	let contents     = document.querySelectorAll('.info-tabcontent');


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
		let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000;
		let seconds = Math.floor((t/1000) % 60);
		let minutes = Math.floor((t/1000/60) % 60);
		let hours = Math.floor((t/(1000*60*60)));
		return {
			'total'  : t,
			'hours'  : hours,
			'minutes': minutes,
			'seconds': seconds
		};	
	};
	
	function setClock(id, endtime){
		let timer   = document.getElementById(id);
		let hours   = timer.querySelector('.hours');
		let minutes = timer.querySelector('.minutes');
		let seconds = timer.querySelector('.seconds');
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
	var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.5;  // скорость, может иметь дробное значение через точку
		for (var i = 0; i < linkNav.length; i++) {
		  linkNav[i].onclick = function(){
		    var w = window.pageYOffset,//отступ сверху
		        hash = this.href.replace(/[^#]*(.*)/, '$1');//меняем местами
		        t = document.querySelector(hash).getBoundingClientRect().top,
		        start = null;
		    requestAnimationFrame(step);
		    function step(time) {
		      if (start === null) start = time;
		      var progress = time - start,
		          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
		      window.scrollTo(0,r);
		      if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
		    }
		    return false;
		  }
		}
			//HomeWork 9
			//Modal
			let more = document.querySelector('.more');
			let info = document.querySelector('.info');
			let desc = document.querySelectorAll('.description-btn');
			let overlay = document.querySelector('.overlay');
			let close = document.querySelector('.popup-close');
			more.addEventListener('click', function(){
				
				
					this.classList.add('more-splash');
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
				
				
			});
			info.addEventListener('click', function(e){
				let target = e.target;
				if(target.classList.contains('description-btn')){
					//this.classList.add('more-splash');
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
				}
				
			});
			close.addEventListener('click', function(){
				overlay.style.display = 'none';
				this.classList.remove('more-splash');
				document.body.style.overflow = '';
			});

}