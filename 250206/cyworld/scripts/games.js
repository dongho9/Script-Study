// 끝말잇기
const form = document.querySelector(".word-text > form");

const gameStart = (e) => {
  e.preventDefault();
  const word = document.querySelector("#word").innerText;
  const myWord = document.querySelector("#myWord").value;
  const lastWord = word[word.length - 1];
  // 문자열은 배열처럼 인덱스로 각 문자에 접근이 가능하다
  const firstWord = myWord[0];

  if (lastWord === firstWord) {
    document.querySelector("#result").innerText = "정답입니다";
    document.querySelector("#word").innerText = myWord;
    document.querySelector("#myWord").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다 🙁";
    document.querySelector("#myWord").value = "";
  }
};

form.addEventListener("submit", gameStart);

// 로또 번호 뽑기

const lottoBtn = document.querySelector(".lotto-btn");
const result = document.querySelector(".game-lotto-number");
const luckyNum = {
  digitCount: 6,
  maxNum: 45,
};

const startLotto = () => {
  const { digitCount, maxNum } = luckyNum; //구조분해할당

  let myNum = new Set(); //값을 중복시키지 않음

  for (let i = 0; i < digitCount; i++) {
    myNum.add(Math.floor(Math.random() * maxNum + 1));
    // add() 메서드는 Set 객체에 새로운 요소를 추가하는 메서드
    console.log(myNum);
  }
  if (myNum.size === 6) {
    result.innerText = `${[...myNum]}`;
    // 기존 배열을 변경하지 않고 새로운 배열을 생성
  } else {
    result.innerText = "재추첨하겠습니다";
  }
};
lottoBtn.addEventListener("click", startLotto);
