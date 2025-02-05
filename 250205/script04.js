const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const nav = document.querySelector("#nav");
  this.classList.toggle("active");
  nav.classList.toggle("active");
});
