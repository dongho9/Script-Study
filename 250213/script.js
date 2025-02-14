// Math.ceil = > 소수점이 있으면 1올림
// Math.floor = > 소수점 없애기
// Math.round = > 반올림
// (Math.PI).toFixed() = > 소수점 몇자리까지 표시
// Math.random() = > 0부터 1의 숫자에서 랜덤으로

const result = document.querySelector("#result");

const radius = prompt("반지름의 길이를 입력하세요");
const area = (r) => {
  return (Math.PI * r * r).toFixed(3);
};

const circum = (r) => {
  return (2 * Math.PI * r).toFixed(3);
};

console.log(area(radius));
console.log(circum(radius));

result.innerHTML = `반지름 : ${radius},<br> 
원의 둘레 : ${circum(radius)}, <br>원의 넓이 : ${area(radius)}`;
