$('.reviews-container__list').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow: '.slider-previous-btn',
  nextArrow: '.slider-next-btn',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.slick-dots').slick({
  infinite: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
        prevArrow: '.dots-previous-btn',
        nextArrow: '.dots-next-btn',
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
});

// $('.mission-container__list').slick({
//   rtl: true,
//    prevArrow: '.slider-previous-btn',
//   nextArrow: '.slider-next-btn',
// });

// $('.mission-container__iteam').slick();