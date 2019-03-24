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