/* 
위치 이벤트
- pageX : 문서를 기준으로 x축으로 얼마나 이동한 곳인지 확인
- pageY : 문서를 기준으로 y축으로 얼마나 이동한 곳인지 확인
- screenX : 현재 화면을 기준으로 x축으로부터 얼마나 이동한 곳인지 확인
- screenY : 현재 화면을 기준으로 y축으로부터 얼마나 이동한 곳인지 확인
*/
const box = document.querySelector("#box");
box.addEventListener("click", (e) => {
  alert(`이벤트 발생위치는 ${e.pageX}, ${e.pageY}`);
});
