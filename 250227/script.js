// Map()

const bag = new Map();
bag.set("color", "red").set("price", 30000);
bag.clear();
// bag.set("price", 30000);
//메서드 체이닝

bag.delete("color");

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml "],
]);

/*
  변수명.size = 개수
  .get("키값") = value
  .has("키값") = boolean형
  .delete("키값") = 해당하는 한쌍 삭제
  .clear() = Map안에 있는 모든 값 삭제
  .keys() = 모든 키값 출력

  이터러블 = 반복순회할수있는
  이터레이터 = 이터러블한 객체가된 요소
*/

console.log(myCup.keys());
const myCupitem = myCup.keys();
console.log(myCupitem);

myCupitem.forEach((item) => {
  console.log(item, typeof item);
});

const myCupitem02 = myCup.values();
console.log(myCupitem02);

const myCupitem03 = myCup.entries();

myCupitem03.forEach((item) => {
  console.log(item, typeof item);
});
console.log(myCupitem03);

// Set은 Map과 달리 중복된 값을 허용하지 않는다.
