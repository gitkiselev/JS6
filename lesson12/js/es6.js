window.onload = function(){
	let tabs = document.querySelectorAll('.info-header-tab'),//заголовки табов
	tabsWrapper = document.querySelector('.info-header'),//обертка хедеров табов
	contents = document.querySelectorAll('.info-tabcontent');


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
    let deadline = '2019-03-16';
    let getTimeRemaining = (endtime) => {
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
    }
	
	let setClock = (id, endtime) => {
        let timer   = document.getElementById(id),
		hours   = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');
        
        let zeros = (digit) => {
            if(digit < 10){
				digit = '0' + digit;
			}
			return digit;
        };
		
        
        let updateClock = () => {
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
        }
		let timeInterval = setInterval(updateClock, 1000);
		updateClock();
    }

	setClock('timer', deadline);

	//усложненное задание
	let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.5;  // скорость, может иметь дробное значение через точку
		for (let i = 0; i < linkNav.length; i++) {
            
            linkNav[i].addEventListener('click', function() {
                let w = window.pageYOffset,//отступ сверху
		        hash = this.href.replace(/[^#]*(.*)/, '$1');//меняем местами
		        t = document.querySelector(hash).getBoundingClientRect().top,
		        start = null;
            requestAnimationFrame(step);
            function step (time) {
                if (start === null) start = time;
		        let progress = time - start,
		          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
		        window.scrollTo(0,r);
		        if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
            }

		    return false;
            });

		}
			//HomeWork 9
			//Modal
			//let more = document.querySelector('.more'),
			//info = document.querySelector('.info'),
			let desc = document.querySelectorAll('.description-btn'),
			overlay = document.querySelector('.overlay'),
			body = document.body,
			close = document.querySelector('.popup-close');
			body.addEventListener('click', (e) => {
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

}