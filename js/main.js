$(document).ready(function () {
  //видеоплеер
  var playerbig;
  $(".video-play").on("click", function onYouTubeIframeAPIReady() {
    player0 = new YT.Player("playerbig", {
      height: "100%",
      width: "100%",
      videoId: "DSG28w5Hr5U",
      host: 'https://www.youtube.com',
      events: {

      },
    });
  });

  var playersmall1;
  $(".small-button--1").on("click", function onYouTubeIframeAPIReady() {
    player0 = new YT.Player("playersmall1", {
      height: "100%",
      width: "100%",
      videoId: "DSG28w5Hr5U",
      host: 'https://www.youtube.com',
      events: {

      }
    });
  });

  var playersmall2;
  $(".small-button--2").on("click", function onYouTubeIframeAPIReady() {
    player0 = new YT.Player("playersmall2", {
      height: "100%",
      width: "100%",
      videoId: "DSG28w5Hr5U",
      host: 'https://www.youtube.com',
      events: {

      }
    });
  });

  var playersmall3;
  $(".small-button--3").on("click", function onYouTubeIframeAPIReady() {
    player0 = new YT.Player("playersmall3", {
      height: "100%",
      width: "100%",
      videoId: "DSG28w5Hr5U",
      host: 'https://www.youtube.com',
      events: {

      }
    });
  });

//скролл
  const anchors = document.querySelectorAll('a[href^="#"]')

  for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

/*
//скролл нерабочий
  function scrollTo(element) {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: "smooth",
    })
  }

  var href = document.querySelector(".navbar-menu__link--1");
  var unreleased = document.querySelector("#unreleased");

  href.addEventListener("click", () => {
    scrollTo(unreleased);
  })

  var href = document.querySelector(".navbar-menu__link--2");
  var book = document.querySelector("#book");

  href.addEventListener("click", () => {
    scrollTo(book);
  })

  var href = document.querySelector(".navbar-menu__link--3");
  var blog = document.querySelector("#blog");

  href.addEventListener("click", () => {
    scrollTo(blog);
  })
*/

  //эффект нажатия
  var like = document.getElementById("like1");
  like.addEventListener("click", function () {
    document.getElementById("like1").classList.toggle("like--active");
  });

  var like = document.getElementById("like2");
  like.addEventListener("click", function () {
    document.getElementById("like2").classList.toggle("like--active");
  });

  var like = document.getElementById("like3");
  like.addEventListener("click", function () {
    document.getElementById("like3").classList.toggle("like--active");
  });

  var like = document.getElementById("like4");
  like.addEventListener("click", function () {
    document.getElementById("like4").classList.toggle("like--active");
  });

  var like = document.getElementById("like5");
  like.addEventListener("click", function () {
    document.getElementById("like5").classList.toggle("like--active");
  });

  var like = document.getElementById("like6");
  like.addEventListener("click", function () {
    document.getElementById("like6").classList.toggle("like--active");
  });
 
  var bookmark = document.getElementById("bookmark1");
  bookmark.addEventListener("click", function () {
    document.getElementById("bookmark1").classList.toggle("bookmarks--active");
  });

  var bookmark = document.getElementById("bookmark2");
  bookmark.addEventListener("click", function () {
    document.getElementById("bookmark2").classList.toggle("bookmarks--active");
  });

  var bookmark = document.getElementById("bookmark3");
  bookmark.addEventListener("click", function () {
    document.getElementById("bookmark3").classList.toggle("bookmarks--active");
  });

  //модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  //закрывается при нажатии esc modal-dialog
  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".modal__overlay").removeClass("modal__overlay--visible");
      $(".modal__dialog").removeClass("modal__dialog--visible");
    }
  });

  //закрытие при клике мимо окна
  $(document).click( function(event){
    if ( $(event.target).closest('.modal').length ) 
    $('.modal').fadeOut();
  });

  //открывается при нажатии на кнопку
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  //закрывается при нажатии на кнопку Закрыть
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $(".body").css("padding-right", "0");
    $(".body").css("overflow", "auto");
  }

  //валидация для формы
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Укажите имя",
          minlength: "Не менее двух знаков!",
        },
        email: {
          required: "Укажите почту",
          email: "Ваша почта должна быть формата name@domain.com",
        },
        phone: {
          required: "Укажите номер телефона",
          phone: "Ваш телефон должен быть формата +7(9**) ***-**-**",
          minlength: "Введите номер телефона полностью",
        },
      },
    })})

    $(".phone").mask("+7 (000) 000-00-00");

  //валидация для подписки
  $(".subscription-form").each(function () {
    $(this).validate({
      errorClass: "invalid-form",
      messages: {
        email: {
          required: "Укажите почту",
          email: "Неверный формат",
        },
      },
    })})

    //мобильное меню
    var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function () {
      document
        .querySelector(".navbar-bottom")
        .classList.toggle("navbar-bottom--visible");
    });

    //слайдер с темами книг
    var swiper = new Swiper(".theme-swiper", {
      direction: "horizontal",
      spaceBetween: 26,
      grid: {
        rows: 1,
      },
      navigation: {
        nextEl: ".theme-swiper-button-next",
        prevEl: ".theme-swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
          grid: {
            rows: 2,
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          grid: {
            rows: 1,
          },
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 26,
          grid: {
            rows: 1,
          },
        },
      },
    });

    //слайдер с неизданными книгами
    var swiper = new Swiper(".unreleased-swiper", {
      direction: "horizontal",
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".unreleased-swiper-button-next",
        prevEl: ".unreleased-swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1201: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });

});