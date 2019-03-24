function timer(){
	let deadline = "2019-03-27";
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