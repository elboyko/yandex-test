$(".slider__gallery").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,

  prevArrow: ".slider__control-btnLeft",
  nextArrow: ".slider__control-btnRight",
  responsive: [
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".slider__stage").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".slider__control-btn-Left",
  nextArrow: ".slider__control-btn-Right",
  responsive: [
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});

console.log("hello");
