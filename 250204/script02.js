document.querySelector("#id").addEventListener("focus", function () {
  this.style.backgroundColor = "pink";
});
document.querySelector("#id").addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});
