/*
Event
- 브라우저를 통해서 특정 웹페이지 도착
- 사용자가 하는 행위 모든 것
- 페이지를 확인 // 버튼 클릭 // 스크롤 이동
- 이벤트를 설정
- event handler => onclick
- addEventListener()
- 이벤트 설정 > 이벤트 실행 > 로컬 컴퓨터 > 메모리 공간 > 이벤트 객체 생성 > 이벤트 객체를 참조변수 값으로 찾아올 수 있다.
- 이벤트 객체 > preventDefault(); - 유일한 메서드 함수
*/

// 문서 이벤트
// load 이벤트 : 문서가 로딩되면 실행됨
// window.onload = alert("ㅎㅇ");
// resize 이벤트 : 문서의 화면크기가 변경되었을 때 사용하는 이벤트

// 마우스 이벤트
// click : 버튼이나 특정 요소들을 클릭했을 때 실행
// dbclick : 더블클릭했을 때 실행
// mouseover : 마우스 올렸을 때 실행 (버블링 기본작용)
// mouseout : 마우스 나갔을 때 실행 (버블링 기본작용)
// mouseenter : 마우스 올렸을 때 (버블링 적용X)
// mouseleave : 마우스 나갔을 때 (버블링 저굥X)

// const button = document.querySelector("button");
// console.log(button);
// button.onclick = function () {
//   document.body.style.backgroundColor = "green";
// };
// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

// 키보드 이벤트
// keydown : 키를 누르고 있는 동안 발생되는 이벤트
// keyup : 키를 눌렀다가 키에서 손을 땔 때 발생하는 이벤트

document.body.addEventListener("keydown", (event) => {
  // console.log(event);
  document.querySelector("#result").innerText = `${event.code}; ${event.key}`;
});

// 폼 이벤트
// change
// focus
// blur
// submit
