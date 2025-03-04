// 비동기 함수 앞에 await이라는 예약어 사용시 앞에서 실행되고 있는 비동기처리 함수가 종료되어야만 실행될 수 있도록할 수 있음

// await은 async라는 함수 안에서만 사용 가능

// 일반함수 선언 및 호출
// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// const displayGood = async () => {
//   console.log("Good");
// };

// displayGood();

const whatYourFavorite = async () => {
  const fav = "Javascript";
  return fav;
};
const displaySubject = async (subject) => {
  return `Hello ${subject}`;
};
//  whatYourFavorite().then(displaySubject).then(console.log);

const init = async () => {
  const response = await whatYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
};
init();
