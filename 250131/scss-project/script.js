// gototop Event
window.addEventListener("scroll", () => {
  const gototop = document.querySelector(".gototop");
  const header = document.querySelector("header");
  let scrollY = window.scrollY;
  if (scrollY > 50) {
    gototop.classList.add("active");
    header.classList.add("active");
  } else {
    gototop.classList.remove("active");
    header.classList.remove("active");
  }
});

// trigger
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  const gnb = document.querySelector(".gnb");
  const menus = document.querySelectorAll(".menu a");

  this.classList.toggle("active");
  gnb.classList.toggle("active");

  menus.forEach((menu) => {
    menu.addEventListener("click", () => {
      trigger.classList.remove("active");
      gnb.classList.remove("active");
    });
  });
});

// scroll event
$(".menu a, .gototop").click(function () {
  $.scrollTo(this.hash || 0, 900);
});
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
