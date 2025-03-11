anime({
  targets: ".svg1 path",
  easing: "easeInOutSine",
  duration: 10000,
  strokeDashoffset: [anime.setDashoffset, 0],
  delay: anime.stagger(250),
  direction: "alternate",
  loop: true,
});
