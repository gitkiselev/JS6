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