anime({
  targets: "ul li",
  translateY: (el, i) => {
    if (i % 2 === 0) {
      return 80;
    } else {
      return -80;
    }
  },
  easing: "linear",
  duration: 1500,
  opacity: 0.6,
  // delay: (el, i) => {
  //   return i * 300;
  // },
  delay: stagger(300),
});
