// ночная тема

function updateTheme() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 6 && hour < 20) {
    document.body.classList.remove('nighttheme');
  } else {
    document.body.classList.add('nighttheme');
  }
}

//updateTheme();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//map
ymaps.ready(init);
	var myMap;

	function init() {

		myMap = new ymaps.Map("map", {
			center: [56.49310906823801,84.89373199999991], // Координаты центра карты
			zoom: 15 // Маштаб карты
		});

		myMap.controls.add(
			new ymaps.control.ZoomControl()  // Добавление элемента управления картой
		);

		myPlacemark = new ymaps.Placemark([56.49310906823801,84.89373199999991], { // Координаты метки объекта
			balloonContent: '<div class="ya_map"><h3>Lady Selena</h3><p>Деревянная мебель на заказ. Эксклюзивный дизайн</p></div><img src="assets/img/selena_black.png"/>', // Подсказка метки
      iconContent: 'Lady Selena'
		}, {
			preset: "islands#greenStretchyIcon", // Тип метки
      balloonCloseButton: true,
      hideIconOnBalloonOpen: false
		});

		myMap.geoObjects.add(myPlacemark); // Добавление метки
		myPlacemark.balloon.close(); // Открытие подсказки метки

	};
