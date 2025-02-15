const button = document.querySelector("#btn");
const result = document.querySelector("#result");

// 생성자 함수
// function Cylinder(cylinderDiameter, cylinderHeight) {
//   this.diameter = cylinderDiameter;
//   this.height = cylinderHeight;
//   this.getVolume = function () {
//     const radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// 클래스방식
class Cylinder {
  constructor(cylinderDiameter, cylinerHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinerHeight;
  }
  getVolume() {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;
  if (diameter === "" || height === "") {
    result.innerText = "지름과 높이 값을 입력하세요";
  } else {
    const Cyl = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${Cyl.getVolume()}입니다.`;
  }
});
