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

   $('.slide__button').on('click', function () {
     $('.slide__languages').toggleClass('slide__languages--active')
     $('.slide__button').toggleClass('slide__button--active')
   })

   $('.slide__lang--en').on('click', function () {
     $('.slide__button').text('en');
     $('.slide__language--ru').addClass('slide__language--ru--active')
     $('.slide__language--en').removeClass('slide__language--en--active')
     $('.slide__language--aze').addClass('slide__language--aze--active')
   })

   $('.slide__lang--ru').on('click', function () {
     $('.slide__button').text('ru');
     $('.slide__language--en').addClass('slide__language--en--active');
     $('.slide__language--ru').removeClass('slide__language--ru--active');
     $('.slide__language--aze').addClass('slide__language--aze--active');
   })

   $('.slide__lang--aze').on('click', function () {
     $('.slide__button').text('aze');
     $('.slide__language--aze').removeClass('slide__language--aze--active');
     $('.slide__language--en').addClass('slide__language--en--active');
     $('.slide__language--ru').addClass('slide__language--ru--active');
   })

   $('.slide__lang').on('click', function () {
     $('.slide__languages').removeClass('slide__languages--active')
   })

})































