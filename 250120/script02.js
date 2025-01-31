//사용자에게 이름과 키와 몸무게의 값을 받아서 사용자가 적정 체중인지를 판단한 후 메세지를 전달

// 적정 체중 = (키 - 100) * 0.9;

// +- 5kg 까지는 적정 체중//초과 || 미달

const user_name = window.prompt("이름을 입력하세요");
const user_height = window.prompt("키를 입력하세요");
const user_weight = window.prompt("몸무게를 입력하세요");
console.log(user_name, user_height, user_weight);
const normalweight = `${(user_height - 100) * 0.9}`;
let result = user_weight >= normalweight - 5 && user_weight <= normalweight + 5;
result = result ? `적정 체중입니다` : `적정 체중이 아닙니다`;
console.log(`${user_name}님은 ${result}`);
