// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS



$(document).ready(function () {

	$('.up').click(function() {
		$('html, body').animate({scrollTop: 0},500);
		return false;
	})

	$('.header__menu a[href^="#"]').click(function(){ // #1
		let anchor = $(this).attr('href');  // #2
		$('html, body').animate({           // #3
		scrollTop:  $(anchor).offset().top - 30  // #4
		}, 600);                            // #5
	});

	$(document).scroll(function () {
		console.log($(this).scrollTop())
		if( $(this).scrollTop() > 500 ){
			$('.up').addClass('up_a')
		}else{
			$('.up').removeClass('up_a')
		}
	})

})































