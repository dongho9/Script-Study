const xhr = new XMLHttpRequest();

xhr.open("GET", "name.json", true); //true = 비동기, false = 동기
xhr.send();

// ReadyState
// 0 : 아직 클라이언트가 서버에 아무런 요청도 하지 않은 상태
// 1 : 클라이언트가 서버에게 자료를 요청하고 성공한 상태
// 2 : 클라이언트가 서버에게 자료 요청을했고 이에대한 서버의 응답 회신이 헤더로 도착한 상태
// 3 : 클라이언트가 서버에게 자료 전달을했고 해당 자료가 클라이언트의 로컬 컴퓨터로 로딩중인 상태
// 4 : 서버가 전달한 데이터 자료가 정상적으로 클라이언트에 도착했고 클라이언트 입장에서 해당 데이터를 완전히 사용할 수 있는 상태
const result = document.querySelector("#result");
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student = JSON.parse(xhr.responseText);
    result.innerHTML = `${student.name}학생은 ${student.grade}학년입니다.`;
  }
});
