// slick slider-1
$(".history-slider").slick({
  slidesToShow: 4, //한번에 보여질 슬라이드 개수
  slidesToScroll: 2, //한번에 넘겨질 슬라이드 개수
  infinite: false, //무한슬라이드
  dots: true, //pagination
  speed: 300,
  responsive: [
    {
      breakpoint: 1024,
      setting: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      setting: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      setting: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// slick slider-2
$(".project-photo").slick({
  dots: true,
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
});
