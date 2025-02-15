// 사용자로 하여금 화씨온도를 전달받아서 섭씨온도로 변환해서 정보 제공

const temp = prompt("당신이 변환할 화씨온도를 입력하세요");
const cel = ((temp - 32) / 1.8).toFixed(1); //소숫점 첫째까지
alert(`화씨온도 ${temp}는 섭씨온도 ${cel}입니다`);
