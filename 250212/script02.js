/* 
  자바스크립트 기본적으로 내장되어있는 객체
  - Math() => 수학객체
  - Date() => 날짜객체

  class
  자주 반복적으로 유사한 형태의 객체를 만들어서 사용해야하는 경우
  - class를 통해서 객체 모델 하나 생성
  - 모델은 실제 객체로서의 역할X
  - 해당 모델을 사용하면 객체가 탄생
  - class를 통해서 만들어진 모델을 가져가 사용할 때에는 new라는 예약어 사용
  - class를 통해 만들어진 모델 = prototype
*/
// new Date();
let arr = new Array();
// console.log(arr);
// const today = new Date();
// console.log(today);
// VM377:1 Wed Feb 12 2025 11:32:53 GMT+0900 (한국 표준시)
// undefined
// today.getDate
// today.getDate();
// 12
// today.getUTCFullYear();
// 2025
// today.getMonth();
// 1
// new Date("2025-02-02")
// Sun Feb 02 2025 09:00:00 GMT+0900 (한국 표준시)
// new Date(2025, 1, 10)
// Mon Feb 10 2025 00:00:00 GMT+0900 (한국 표준시)
// new Date("2025-02-14T23:58")
// Fri Feb 14 2025 23:58:00 GMT+0900 (한국 표준시)

// 프로그래밍 언어의 시간은 밀리초
// 1초 1000밀리초
// 1분 60000밀리초
// 60분 3600000밀리초
// 하루 216000000밀리초

// 1970년 1월 1일
