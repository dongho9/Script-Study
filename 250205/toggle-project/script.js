const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  const modal = document.querySelector(".modal-gnb");
  this.classList.toggle("active");
  modal.classList.toggle("active");
});
