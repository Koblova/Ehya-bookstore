$(document).ready(function () {
  var playerbig;
  $(".video-play").on("click", function onYouTubeIframeAPIReady() {
    player0 = new YT.Player("playerbig", {
      height: "100%",
      width: "100%",
      videoId: "DSG28w5Hr5U",
      events: {
        
      },
    });
  });

  var playersmall1;
  $(".small-button1").on("click", function onYouTubeIframeAPIReady() {
    player0 = new YT.Player("playersmall1", {
      height: "100%",
      width: "100%",
      videoId: "DSG28w5Hr5U",
      events: {
        
      },
    });
  });

  var playersmall2;
  $(".small-button2").on("click", function onYouTubeIframeAPIReady() {
    player0 = new YT.Player("playersmall2", {
      height: "100%",
      width: "100%",
      videoId: "DSG28w5Hr5U",
      events: {
        
      },
    });
  });

  var playersmall3;
  $(".small-button3").on("click", function onYouTubeIframeAPIReady() {
    player0 = new YT.Player("playersmall3", {
      height: "100%",
      width: "100%",
      videoId: "DSG28w5Hr5U",
      events: {

      },
    });
  });


  var likeF = document.getElementById("like1");
  likeF.addEventListener("click", function () {
    document.getElementById("like1").classList.toggle("like--active");
  });

  var likeF = document.getElementById("like2");
  likeF.addEventListener("click", function () {
    document.getElementById("like2").classList.toggle("like--active");
  });

  var likeF = document.getElementById("like3");
  likeF.addEventListener("click", function () {
    document.getElementById("like3").classList.toggle("like--active");
  });

  var likeF = document.getElementById("like4");
  likeF.addEventListener("click", function () {
    document.getElementById("like4").classList.toggle("like--active");
  });

  var likeF = document.getElementById("like5");
  likeF.addEventListener("click", function () {
    document.getElementById("like5").classList.toggle("like--active");
  });

  var likeF = document.getElementById("like6");
  likeF.addEventListener("click", function () {
    document.getElementById("like6").classList.toggle("like--active");
  });

  $(".phone").mask("+7 (000) 000-00-00");

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $(".body").css("padding-right", "0");
    $(".body").css("overflow", "auto");
  }

  // обработка форм
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

    var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function () {
      document
        .querySelector(".navbar-bottom")
        .classList.toggle("navbar-bottom--visible");
    });
  
   /* var menuButton = document.querySelector(".button-mobile");
    menuButton.addEventListener("click", function () {
      document.querySelector("body").classList.toggle("body--hidden");
    });*/

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
          slidesPerView: 3,
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
      },
    });

});