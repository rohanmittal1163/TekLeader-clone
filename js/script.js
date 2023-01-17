$(document).ready(function () {
	$('nav li').hover(
		function () {
			$('ul', this).stop().slideDown(400);
		},
		function () {
			$('ul', this).stop().slideUp(400);
		}
	);
	$(`.opt`).slideUp();
	$('.plus').click(function () {
		$(this).toggleClass('fa-minus');

		if ($(this).hasClass('fa-minus')) {
			$(this).parent().siblings().slideDown(1000);
		} else {
			$(this).parent().siblings().slideUp(1000);
		}
	});
	$('.menu').slideUp();
	$('.ham').click(function () {
		$('.menu').slideToggle(1000);
		$(`.opt`).slideUp();
		if ($('.plus').hasClass('fa-minus')) {
			$('.plus').removeClass('fa-minus');
		}
		if ($(this).hasClass('fa-bolt')) {
			$(this).removeClass('fa-bolt');
			$(this).addClass('fa-bars');
		} else {
			$(this).removeClass('fa-bars');
			$(this).addClass('fa-bolt');
		}
	});

	$('.foot ul li').hover(
		function () {
			$('ul', this).stop().slideDown(400);
		},
		function () {
			$('ul', this).stop().slideUp(400);
		}
	);

	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 5,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});
