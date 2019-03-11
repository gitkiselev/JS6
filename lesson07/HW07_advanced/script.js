let launch    = document.getElementById('launch');
let div       = document.getElementById('a');
 
launch.addEventListener('click', function(timePassed){
	animateThis(function(timePassed){
		div.style.left = timePassed / 5 + 'px';
	}, 2000);
});
    // Рисует функция draw
    // Продолжительность анимации duration
    function animateThis(draw, duration) {
      let start = performance.now();

      requestAnimationFrame(function animateThis(time) {
        // определить, сколько прошло времени с начала анимации
        let timePassed = time - start;

        console.log(time, start)
          // возможно небольшое превышение времени, в этом случае зафиксировать конец
        if (timePassed > duration) timePassed = duration;

        // нарисовать состояние анимации в момент timePassed
        draw(timePassed);

        // если время анимации не закончилось - запланировать ещё кадр
        if (timePassed < duration) {
          requestAnimationFrame(animateThis);
        }

      });
    }