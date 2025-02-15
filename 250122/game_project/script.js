const board = document.querySelector(".board");
const h1 = document.createElement("h1");
const itemImg = document.createElement("img");
const resultImg = document.createElement("img");
h1.innerText = "컴퓨터와 가위 바위 보 맞추기 게임";

const userChoice = prompt("가위, 바위, 보 중 하나를 선택하세요", "가위");
let gameNum;

switch (userChoice) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 선택하셨습니다");
    location.reload();
}

// Math.random();

let comChoice = Math.ceil(Math.random() * 3);
itemImg.src = `./imgs/math_img${comChoice}.png`;

if (gameNum === comChoice) {
  resultImg.src = "./imgs/game1.png";
} else {
  resultImg.src = "./imgs/game2.png";
}

// board.appendChild(h1);
// board.appendChild(itemImg);
// board.appendChild(resultImg);
//해당요소 board안에 생성하고 마지막자식이됨

board.append(h1, itemImg, resultImg);
// 한번에 쓰기
itemImg.style.margin = "20px 0";
