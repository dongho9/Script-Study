/*
데이터 통신
  1) User (사용자)
  2) Client (웹 브라우저)
  3) Server (서버)
  요청 & 응답 프로세스가 상시 실행
  요청과 응답이 정상적으로 이루어지고 있는지 확인가능
  요청 및 응답 헤더를 통해서 유추
  요청 및 응답 메세지를 통해서 유추
  
  JSON
 */
const student = {
  name: "짱구",
  major: "컴퓨터공학",
  grade: 2,
};

// 문자화
const json = JSON.stringify(student);
console.log(json);

// 객체화
const json2 = JSON.parse(json);
console.log(json2);
console.log(typeof json2.grade);

// 자바스크립트에서 서버와 통신할 때 사용하는 방법 = AJAX
