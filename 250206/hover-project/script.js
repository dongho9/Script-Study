// const lis = document.querySelectorAll(".nav li");
// let photo = document.querySelector(".photo");
// lis.forEach((li, index) => {
//   li.addEventListener("mouseenter", () => {
//     switch (index) {
//       case 0:
//         photo.style.backgroundImage = "url('./img/portrait-01.jpg')";
//         break;
//       case 1:
//         photo.style.backgroundImage = "url('./img/portrait-02.jpg')";
//         break;
//       case 2:
//         photo.style.backgroundImage = "url('./img/portrait-03.jpg')";
//         break;
//       case 3:
//         photo.style.backgroundImage = "url('./img/portrait-04.jpg')";
//         break;
//     }
//   });
//   li.addEventListener("mouseleave", () => {
//     photo.style.backgroundImage = "url('./img/portrait-initial.jpg')";
//   });
// });

const lis = document.querySelectorAll(".nav li a");
const photo = document.querySelector(".photo");
console.log(photo);
lis.forEach((li) => {
  li.addEventListener("mouseenter", function () {
    const changeImg = this.getAttribute("data-img");
    // getAttribute 특정 속성(attribute)의 값을 가져오는 메서드입니다.
    photo.style.backgroundImage = `url("${changeImg}")`;
  });
  li.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
