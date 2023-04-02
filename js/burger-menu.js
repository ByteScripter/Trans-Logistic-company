$(function () {
	// выбираем необходимые элементы DOM
	var $burger = $('.header-burger'),
		$nav = $('.header-nav__list'),
		$navLinks = $('.header-nav__link');

	// функция для закрытия меню
	function closeNav() {
		// удаляем классы из body и элементов меню
		$('body').removeClass('lock');
		$nav.removeClass('active-burger');
		$burger.removeClass('active-burger--rotate');
		$('.header-burger__burger-menu').removeClass('active-burger--rotate');
	}

	// обработчик клика по кнопке бургера
	$burger.on('click', function (event) {
		// добавляем/удаляем классы у body и элементов меню
		$('body').toggleClass('lock');
		$nav.toggleClass('active-burger');
		$burger.toggleClass('active-burger--rotate');
		$('.header-burger__burger-menu').toggleClass('active-burger--rotate');
		event.stopPropagation();
	});

	// обработчик клика по документу
	$(document).on('click', function (event) {
		// если клик был вне меню и кнопки бургера
		if (!$nav.is(event.target) && !$burger.is(event.target) && !$nav.has(event.target).length && !$burger.has(event.target).length) {
			// закрываем меню
			closeNav();
		}
	});

	// обработчик клика по ссылкам меню
	$navLinks.on('click', function () {
		// закрываем меню
		closeNav();
	});
});




