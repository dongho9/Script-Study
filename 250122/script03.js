//사용자에게 어떤 숫자를 받을 예정
//소수인지 아닌지 판별하는 프로그램
//소수 소수점x 1과 본인 자신만 나눌 수 있는 숫자 = 소수

const num = parseInt(prompt("자연수를 입력하세요"));
let isPrime;

if (!isNaN(num)) {
  if (num === 1 || num === 0) {
    alert(`${num}은 소수도 합성수도 아닙니다.`);
    location.reload();
  } else if (num === 2) {
    isPrime = true;
    alert(`${num}은 소수입니다.`);
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
  }
  if (isPrime === true) {
    alert(`${num}은 소수입니다`);
  } else {
    alert(`${num}은 소수가 안입니다`);
  }
} else {
  alert("숫자가 아닙니다");
  location.reload();
}
