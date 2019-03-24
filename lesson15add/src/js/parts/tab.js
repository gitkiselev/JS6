function tab(){
	let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        hideTabContent = a => {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        },
        showTabContent = b => {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        };
        hideTabContent(1);

    info.addEventListener('click', e => {
        let target = e.target; 

        if(target.classList.contains('info-header-tab')){
            tab.forEach((item,i) => {
                if (target == item) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            });
        }
    });
}
export default  tab;