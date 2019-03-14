//HomeWork 9
//Modal
window.onload = function() {
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };
  // Opera 8.0+
  var isOpera =
    (!!window.opr && !!opr.addons) ||
    !!window.opera ||
    navigator.userAgent.indexOf(" OPR/") >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== "undefined";

  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function(p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && safari.pushNotification)
    );

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1+
  var isChrome = !!window.chrome && !!window.chrome.webstore;

  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;
  if (isMobile.any()) {
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("fade"); //удалим класс, отвечающий за анимацию
    console.log("Используется мобильный браузер");
    let info = document.querySelector(".info");
    let desc = document.querySelectorAll(".description-btn");
    
    let close = document.querySelector(".popup-close");
    let btn = document.getElementById("btn");
    

    btn.addEventListener("click", function() {
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
    });
    close.addEventListener("click", function() {
      overlay.style.display = "none";
      document.body.style.overflow = "";
    });
  } else {
    // It is desktop
    //let more = document.querySelector('.more');
    let info = document.querySelector(".info");
    let desc = document.querySelectorAll(".description-btn");
    let overlay = document.querySelector(".overlay");
    let close = document.querySelector(".popup-close");
    let btn = document.getElementById("btn");
    let popup = document.querySelector('.popup');

    if (isIE || isEdge) {
      console.log("Эмуляция браузера Internet Explorer или Edge");
      btn.addEventListener("click", function() {
        this.classList.add("more-splash");//css3
        overlay.style.display = "block";
        popup.classList.add('scale-appear');//keyframes css3
        document.body.style.overflow = "hidden";
      });
      close.addEventListener("click", function() {
        overlay.style.display = "none";
        this.classList.remove("more-splash");
        document.body.style.overflow = "";
        popup.classList.remove('scale-appear');//keyframes css3
      });
    } else {
      console.log(
        "Эмуляция браузера Google Chrome и других продвинутых браузеров"
      );
      function animate(draw, duration) {
        var start = performance.now();

        requestAnimationFrame(function animate(time) {
          // определить, сколько прошло времени с начала анимации
          var timePassed = time - start;

          // возможно небольшое превышение времени, в этом случае зафиксировать конец
          if (timePassed > duration) timePassed = duration;

          // нарисовать состояние анимации в момент timePassed
          draw(timePassed);

          // если время анимации не закончилось - запланировать ещё кадр
          if (timePassed < duration) {
            requestAnimationFrame(animate);
          }
        });
      }
    }
    btn.addEventListener("click", function() {
      console.log("click");
      animate(function(timePassed) {
        btn.classList.add("more-splash");
        overlay.style.display = "block";
        overlay.style.boxShadow = "0 0 60px #C78030";
        document.body.style.overflow = "hidden";
        //document.body.style.backgroundColor = 'red';//просто проверка что не IE11
      }, 1700);
    });
    close.addEventListener("click", function() {
      animate(function(timePassed) {
        btn.classList.remove("more-splash");
        overlay.style.display = "none";
        overlay.style.boxShadow = "";
        document.body.style.overflow = "scroll";
        //document.body.style.backgroundColor = '';
      }, 1700);
    });
  }
};
