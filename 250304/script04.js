/*
데이터 통신을 할 때, 데이터가 정상적으로 들어왔는지에 따라 처리해줄 수 있는 방법을 이원화할 수 있는데, 그 때 사용하는 방법이 예외처리 방식이다.

예외처리 방식은 데이터가 들어왔을 때 try문을 사용
그러지 못할 때 catch문을 사용
데이터의 유입과 무관하게 최종적인 메세지를 전달하고자 할 때 => finally문을 사용한다.
*/

// try {
//   console.log("시작");
//   gd();
//   console.log("실행 중 ...");
// } catch (err) {
//   alert(`에러이름 : ${err.name}`);
//   alert(`에러내용 : ${err.message}`);
//   alert(`전체에러 : ${err}`);
// } finally {
//   console.log("끝");
// }

const json = '{"grade": 3, "age": 20}';

try {
  const user = JSON.parse(json);
  console.log(user.name);
  if (!user.name) {
    // throw "사용자 이름이 없습니다.";
    throw new Error("사용자 이름이 없습니다.");
  }
} catch (err) {
  console.error(err);
}
