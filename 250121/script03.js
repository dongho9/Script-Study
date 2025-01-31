// 사용자에게 12달 중 좋아하는 월의 정보를 입력받으세요
// 12월 - 2월 : 스키의 계절 겨울을 좋아하시네요
// 3월 - 5월 : 책 읽기 좋은 봄을 좋아하시네요
//6월 - 8월 : 여행가기 좋은 여름을 좋아하신네요
//9월 - 11월 : 선선한 날씨인 가을을 좋아하시네요

// const month = Number(prompt("12달 중 좋아하는 달을 입력하세요"));

// if (month !== "" && month !== null) {
//   alert("다시 입력해주세요");
//   if (month > 12 || month === 0) {
//     alert("존재하지 않는 달입니다.");
//   } else if (month < 13 && month > 11) {
//     alert("스키의 계절 겨울을 좋아하시네요");
//   } else if (month < 12 && month > 8) {
//     alert("신선한 날씨인 가을을 좋아하시네요");
//   } else if (month < 9 && month > 5) {
//     alert("여행가기 좋은 여름을 좋아하시네요");
//   } else if (month < 6 && month > 2) {
//     alert("책 읽기 좋은 봄을 좋아하시네요");
//   } else {
//     alert("스키의 계절 겨울을 좋아하시네요");
//   }
// }

let favoriteMonth = prompt("좋아하는 월을 입력하세요!");

if (favoriteMonth !== "" || favoriteMonth !== null) {
  favoriteMonth = parseInt(favoriteMonth);
  if (3 <= favoriteMonth && favoriteMonth <= 5) {
    alert("책 읽기 좋은 봄을 좋아하시네요");
  } else if (6 <= favoriteMonth && favoriteMonth <= 8) {
    alert("여행가기 좋은 여름을 좋아하시네요");
  } else if (9 <= favoriteMonth && favoriteMonth <= 11) {
    alert("신선한 날씨인 가을을 좋아하시네요");
  } else if (
    isNaN(favoriteMonth) ||
    0 === favoriteMonth ||
    favoriteMonth > 12
  ) {
    alert("정상적인 달을 입력하세요.");
  } else {
    console.log(favoriteMonth, typeof favoriteMonth);
    alert("스키의 계절 겨울을 좋아하시네요");
  }

  // window.location.reload(); 끝나자마자  바로 다시실행
}
