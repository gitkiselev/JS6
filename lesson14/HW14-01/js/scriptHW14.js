$(document).ready(function(){
	//console.log(1);
	$('li a[href="#sheldure"], #tour, .main_btna, .main_btn').on('click', function(e){
		//e.preventDefault();
		$('.overlay').fadeIn('slow');
		$('.modal').animate({
			opacity: 'show',
			height: 'show'
		}, 700);
	});
	/*$('#tour').on('click', function(e){
		e.preventDefault();
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});
	$('.main_btna').on('click', function(){
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});
	$('.main_btn').on('click', function(){
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});*/
	$('.close').on('click', function(){
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	});
	//Отправка формы дополнительное задание
	$('.contactform_select').on('submit', function(e){
		e.preventDefault();
		let url = 'server.php';
		let postData = $(this).serialize();
		$.ajax({
			url: url,
			type: "POST",
			data: postData,
			success: function(data, status, xhr){
				if (status == 'success'){
					$('.modal, .overlay').animate({
						opacity: 0,
						height: 'hide'
					}, 700);
					alert('Форма успешно отправлена');
				} else {
					alert('Не удалось отправить форму');
				}
			}
		});
	});
	
});