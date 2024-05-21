

  // ночная тема (в период с 20:00 до 6:00 тегу body  присваивается класс nighttheme)

  function updateTheme() {
    const date = new Date();
    const hour = date.getHours();
    const buttons = document.querySelectorAll('.tab-pane__btn')

    if (hour >= 6 && hour < 20) {
      document.body.classList.remove('nighttheme');

      // присвоение соотв. классов кнопкам в табах блока "Витрина товаров"
      buttons.forEach(function(button){
        button.classList.remove('btn-light');
        button.classList.add('btn-dark');
      //
      });
    } else {
      document.body.classList.add('nighttheme');

      // присвоение соотв. классов кнопкам в табах блока "Витрина товаров"
      buttons.forEach(function(button){
        button.classList.remove('btn-dark');
        button.classList.add('btn-light');
      //
      });
    }

  }

updateTheme();

  /////// SCROL TO TOP
  // кнопка появляется при прокрутке вниз
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("toTop").style.display = "block";
    } else {
      document.getElementById("toTop").style.display = "none";
    }
  }

  // Когда пользователь кликает по кнопке происходит скролл вваерх
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  //////// MAP
  ymaps.ready(init);
  var myMap;

  function init() {

    myMap = new ymaps.Map("map", {
      center: [56.49310906823801, 84.89373199999991], // Координаты центра карты
      zoom: 15 // Маштаб карты
    });

    myMap.controls.add(
      new ymaps.control.ZoomControl()  // Добавление элемента управления картой
    );

    myPlacemark = new ymaps.Placemark([56.49310906823801, 84.89373199999991], { // Координаты метки объекта
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




