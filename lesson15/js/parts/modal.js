function modal(){
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

}
module.exports = modal;