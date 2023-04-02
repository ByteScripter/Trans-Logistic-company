$(function () {
	var $burger = $('.header-burger'),
		$nav = $('.header-nav__list');

	$burger.on('click', function (event) {
		$('body').toggleClass('lock');
		$nav.toggleClass('active-burger');
		$burger.toggleClass('active-burger--rotate');
		$('.header-burger__burger-menu').toggleClass('active-burger--rotate');
		event.stopPropagation();
	});

	$(document).on('click', function (event) {
		if (!$nav.is(event.target) && !$burger.is(event.target) && !$nav.has(event.target).length && !$burger.has(event.target).length) {
			$('body').add($nav, $burger, $('.header-burger__burger-menu')).removeClass('lock active-burger active-burger--rotate');
		}
	});
});





