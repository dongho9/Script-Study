// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   setTimeout(() => {
//     console.log("B");
//   }, 3000);
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 자바스크립트에서 멀티스레드처럼 보이게하기 위해서는 비동기방식으로 무언가를 처리할 수 있는 함수 등이 필요하다
// 1) 콜백함수  2) Promise객체  3) async 함수 & await 예약어

// 콜백함수 => 함수 내에 또 다른 함수를 사용 => 내부에 포함된 함수의 호출 타이밍을 외부 함수가 관리

// const displayA = () => {
//   console.log("A");
// };

// const displayB = (callback) => {
//   callback();
//   setTimeout(() => {
//     console.log("B");
//   }, 3000);
// };

// const displayC = () => {
//   console.log("C");
// };
// displayA();
// displayB(displayC);

const display = (result) => {
  console.log(`${result} 준비완료`);
};

// 어떤 커피를 주문했는지 확인하는 메세지 전달, 3초 후 메시지 전달, 준뵈완료 메세지 전달
const order = (coffee, callback) => {
  console.log(`${coffee} 주문접수`);
  setTimeout(() => {
    callback(coffee);
  }, 3000);
};

order("아메리카노", display);
