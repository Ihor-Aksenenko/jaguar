$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('body-menu');
   }); 
   $('.slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 3000,
      pauseOnFocus: false,
      pauseOnHover: false
   });
});

