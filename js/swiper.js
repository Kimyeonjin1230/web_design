  $(document).ready(function() {
    var swiper = new Swiper('#carousel', {
      // Swiper options
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });