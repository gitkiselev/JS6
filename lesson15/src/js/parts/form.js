function form(){
    let sendRequest = (target) => {
        let message = {
                loading: "Загрузка....",
                success: "Спасибо! Скоро мы с вами свяжемся!",
																failure: "Что-то пошло не так...",
																hide: ""
            },
            statusMessage = document.createElement('div'),
            inputs = document.querySelectorAll('input'),
            clearInputs = () => {
                inputs.forEach( item => { item.value = '';});
												},
												// hideModal = () => {
												// 	let overlay = document.querySelector('.overlay');
												// 	setTimeout(() => {
												// 		overlay.style.display = 'none';
												// 		//statusMessage.innerHTML = '';
												// 	}, 1000);
												// };
												// removeStatus = () => {
												// 	console.log('remove status');
												// 	setTimeout(() => {
												// 		statusMessage.innerHTML = '';
												// 	}, 1000);
													
												// };
												hideMessage = () => {
													setTimeout(() => {
														statusMessage.innerHTML = message.hide;
													}, 1000);
												}
        
								statusMessage.classList.add('status');
								let statusDiv = document.getElementsByClassName('status')[0];
        target.appendChild(statusMessage);
        
        let formData = new FormData(target),
            obj = {};
            
        formData.forEach(function(value, key){
            obj[key] = value;
        });
        let postData = () => {
            return new Promise( (resolve,reject) => {
                let request = new XMLHttpRequest(),
                    json = JSON.stringify(obj);
                    request.open('POST','server.php');
                    request.setRequestHeader('Content-type','application/json; charset=utf-8');
            
                    request.onreadystatechange = () => {
                        if (request.readyState < 4){
                            resolve();
                        } else if (request.readyState == 4 && request.status == 200){
                            resolve();
                        } else {
                            reject();
                        }  
                    };
                request.send(json);
            });
    
       }; 
        postData()
            .then( () => statusMessage.innerHTML = message.loading)
            .then( () => statusMessage.innerHTML = message.success)
												.catch( () => statusMessage.innerHTML = message.failure)
												//.then( () => removeStatus())
												.then( () => clearInputs())
												.then( () => hideMessage());
												
												
													
												
												
    };
    
    document.body.addEventListener('submit', e => {
        e.preventDefault();
        let target = e.target;

        (target.id == 'form' || target.classList.contains('main-form')) ? sendRequest(target) : '';
    });
}
export default form;