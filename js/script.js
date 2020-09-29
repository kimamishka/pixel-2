//БУРГЕР
$(document).ready(function () {
   $(".header-burger").click(function (event) {
      $(".header-burger, .header-menu").toggleClass("active"); /*при нажатии меняются виды указанных классов (полоски бургера меняем на крестик, меню выкатывается из под шапки)*/
      $("body").toggleClass("lock"); /*чтобы при открытом меню бургера текст под меню случайно не скролился, оставался на том же месте, где мы зашли в бургер*/
   });
});

//АККОРДЕОН

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
         panel.style.display = "none";
      } else {
         panel.style.display = "block";
      }
   });
}

//СЛАЙДЕР
$(document).ready(function () {
   $('.slider1').slick({
      prevArrow: "<img src='img/left_arrow.svg' class='prev' alt='1'>",
      nextArrow: "<img src='img/right_arrow.svg' class='next' alt='2'>",
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 4,
      autoplay: false,
      speed: 800,/*1000=1секунда*/
      autoplaySpeed: 1400,
      responsive: [
         {
            breakpoint: 980,
            settings: {
               prevArrow: "<img src='img/news/left-320.jpg' class='prev' alt='1'>",
               nextArrow: "<img src='img/news/right-320.jpg' class='next' alt='2'>"
            }
         },
         {
            breakpoint: 950,
            settings: {
               slidesToShow: 3,
               prevArrow: "<img src='img/news/left-320.jpg' class='prev' alt='1'>",
               nextArrow: "<img src='img/news/right-320.jpg' class='next' alt='2'>"
            }
         },
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 2,
               prevArrow: "<img src='img/news/left-320.jpg' class='prev' alt='1'>",
               nextArrow: "<img src='img/news/right-320.jpg' class='next' alt='2'>"
            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 1,
               prevArrow: "<img src='img/news/left-320.jpg' class='prev' alt='1'>",
               nextArrow: "<img src='img/news/right-320.jpg' class='next' alt='2'>"
            }
         }
      ]
   });
});



$(document).ready(function () {
   $('.slider-brands').slick({
      prevArrow: "<img src='img/news/left-320.jpg' class='prev' alt='1'>",
      nextArrow: "<img src='img/news/right-320.jpg' class='next' alt='2'>",
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 9,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 1400,
      responsive: [
         {
            breakpoint: 980,
            settings: {
               slidesToShow: 7,
            }
         },
         {
            breakpoint: 750,
            settings: {
               slidesToShow: 5,
            }
         },
         {
            breakpoint: 510,
            settings: {
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 440,
            settings: {
               slidesToShow: 3,
            }
         }
      ]
   });
});