const btn = document.querySelector("#toggle_btn button");
// const content = document.querySelector("body");
// console.log(content);
// console.log(document.body); //굳이 body를 선언 안해도됨

btn.addEventListener("click", () => {
  document.body.classList.toggle("active");
  if (!document.body.classList.contains("active")) {
    btn.innerText = "다크모드로 바꾸기";
  } else {
    btn.innerText = "라이트모드로 바꾸기";
  }
});
