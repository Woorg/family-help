import svg4everybody from 'svg4everybody';
import $ from 'jquery';


$(() => {
	svg4everybody();

	const $menu = $('.menu__list');
	const $burger = $('.menu__burger');

	$burger.on('click', function (e) {
		e.preventDefault();
		$menu.toggleClass('menu__list_active');
	});

});



