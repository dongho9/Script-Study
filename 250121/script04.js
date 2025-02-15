// 사용자에게 로그인을 허락해주자고 합니다. 사용자에게 id, pw 입력받아서 정상적인 정보라면 00님 반갑습니다. 라는 알림창 나오게하기 만약 id가 잘못된 정보라면 id가 일치하지 않습니다. 라는 알림창으로 전달 만약 pw가 잘못된 정보라면 pw가 일치하지 않습니다 알림창                  id : ezen1234 pw : 1234567

// const id = prompt("아이디를 입력하세요");
// const pw = prompt("비밀번호를 입력하세요");
const collectid = "ezen1234";
const collectpw = "1234567";
// if (id == collectid && pw == collectpw) {
//   alert(`${id}님 환영합니다`);
// } else if (id !== collectid && pw == collectpw) {
//   alert("id가 일치하지 않습니다.");
// } else if (id == collectid && pw !== collectpw) {
//   alert("pw가 일치하지 않습니다.");
// } else if (id !== collectid && pw !== collectpw) {
//   alert("id, pw가 일치하지 않습니다.");
// } else if (id !== "" || pw !== "") {
//   alert("정보를 입력하세요");
// }
const username = prompt("이름을 입력하세요");
if (username !== "" && username !== null) {
  const userid = prompt(`${username}님 아이디를 입력해주세요`);
  if (userid !== "" && userid !== null) {
    if (userid === collectid) {
      const userpw = prompt(`${username}님 반갑습니다. 비밀번호를 입력하세요.`);
      if (userpw !== "" && userpw !== null) {
        if (userpw === collectpw) {
          alert(`${username}님 오늘도 좋은하루되세요`);
          location.reload();
        }
      } else {
        alert("비밀번호가 일치하지 않습니다");
        location.reload();
      }
    } else {
      alert("아이디가 일치하지 않습니다");
      location.reload();
    }
  } else {
    alert("아이디를 입력하세요");
    location.reload();
  }
  console.log(id);
} else {
  alert("정상적인 이름을 입력하세요");
  location.reload();
}
