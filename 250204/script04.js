/*
modal
- 1개의 페이지 안에서 별도의 url을 생성하지 않은 상태로 추가정보를 제공해 줄 수 있도록
보조페이지를 구현하는 방법
*/

const openButton = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const closeButton = document.querySelector("#close");
openButton.addEventListener("click", function () {
  this.classList.add("btn_active");
  modalBox.classList.add("active");
});
closeButton.addEventListener("click", function () {
  openButton.classList.remove("btn_active");
  modalBox.classList.remove("active");
});
