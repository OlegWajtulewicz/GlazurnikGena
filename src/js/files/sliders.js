/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
import 'swiper/css';


function initSliders() {
	// Список слайдеров
	if (document.querySelector('.services__slider')) {
		let mySwiper;
		const slider = document.querySelector('.services__slider'); // Добавлено объявление переменной slider

		function mobileSlider() {
			if (window.innerWidth <= 700 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
					slidesPerView: 1,
					spaceBetween: 0,
					loop: true,
					slideClass: 'swiper-slide'
				});

				slider.dataset.mobile = 'true';
			}

			if (window.innerWidth > 700) {
				slider.dataset.mobile = 'false';
				if (slider.classList.contains('swiper-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		function handleResize() {
			if (window.innerWidth > 700 && slider.dataset.mobile == 'true') {
				// Удаляем слайдер, если ширина окна превышает 700px и слайдер уже инициализирован
				slider.dataset.mobile = 'false';
				mySwiper.destroy();
			} else if (window.innerWidth <= 700 && slider.dataset.mobile == 'false') {
				// Инициализируем слайдер, если ширина окна меньше или равна 700px и слайдер не инициализирован
				mySwiper = new Swiper(slider, {
					slidesPerView: 1,
					spaceBetween: 3,
					loop: true,
					slideClass: 'swiper-slide'
				});
				slider.dataset.mobile = 'true';
			}
		}

		handleResize(); // Вызываем функцию handleResize при инициализации

		window.addEventListener('resize', handleResize); // Используем функцию handleResize как обработчик события resize
	}
}

// Ініціалізація слайдерів
// function initSliders() {
// 	// Список слайдерів
// 	if (document.querySelector('.services__slider')) {
// 		let mySwiper;

// 	}
	

// 	// Перевіряємо, чи є слайдер на сторінці
// 	// if (document.querySelector('.services__slider')) { // Вказуємо склас потрібного слайдера
// 	// 	// Створюємо слайдер
// 	// 	let mySwiper;

// 	// 	new Swiper('.services__slider', { // Вказуємо склас потрібного слайдера
		
// 	// 		// Підключаємо модулі слайдера
// 	// 		// для конкретного випадку
// 	// 		//modules: [Navigation],
// 	// 		observer: true,
// 	// 		observeParents: true,
// 	// 		slidesPerView: 1,
// 	// 		spaceBetween: 15,
// 	// 		autoHeight: true,
// 	// 		//speed: 800,

// 	// 		//touchRatio: 0,
// 	// 		//simulateTouch: false,
// 	// 		//loop: true,
// 	// 		//preloadImages: false,
// 	// 		//lazy: true,

// 	// 		/*
// 	// 		// Ефекти
// 	// 		effect: 'fade',
// 	// 		autoplay: {
// 	// 			delay: 3000,
// 	// 			disableOnInteraction: false,
// 	// 		},
// 	// 		*/

// 	// 		// Пагінація
// 	// 		/*
// 	// 		pagination: {
// 	// 			el: '.swiper-pagination',
// 	// 			clickable: true,
// 	// 		},
// 	// 		*/

// 	// 		// Скроллбар
// 	// 		/*
// 	// 		scrollbar: {
// 	// 			el: '.swiper-scrollbar',
// 	// 			draggable: true,
// 	// 		},
// 	// 		*/

			
// 	// 		/*
// 	// 		// Брейкпоінти
// 	// 		breakpoints: {
// 	// 			640: {
// 	// 				slidesPerView: 1,
// 	// 				spaceBetween: 0,
// 	// 				autoHeight: true,
// 	// 			},
// 	// 			768: {
// 	// 				slidesPerView: 2,
// 	// 				spaceBetween: 20,
// 	// 			},
// 	// 			992: {
// 	// 				slidesPerView: 3,
// 	// 				spaceBetween: 20,
// 	// 			},
// 	// 			1268: {
// 	// 				slidesPerView: 4,
// 	// 				spaceBetween: 30,
// 	// 			},
// 	// 		},
// 	// 		*/
// 	// 		// Події
// 	// 		on: {

// 	// 		}
// 	// 	});
	
// 	// }
// }
// const slider = document.querySelector('.slider-container');
// let mySwiper;
// function mobileSlider() {
// 	if (window.innerWidth <= 700 && slider.dataset.mobile == 'false') {
// 		mySwiper = new Swiper(slider, {
// 			slidesPerView: 1,
// 			spaceBetween: 10,
// 			loop: true,
// 			slideClass: 'swiper-slide'
// 		});

// 		slider.dataset.mobile = 'true';
// 	}

// 	if (window.innerWidth > 700) {
// 		slider.dataset.mobile = 'false';
// 		if (slider.classList.contains('swiper-initialized')) {
// 			mySwiper.destroy();
// 		}
// 	}
// }

// mobileSlider()

// window.addEventListener('resize', () => {
// 	mobileSlider();
// });









// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});