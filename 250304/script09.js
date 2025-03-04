// const pizza = new Promise((resolve, reject) => {
//   // 선언부
//   if (false) {
//     resolve("피자를 주문합니다");
//   } else {
//     reject("피자를 주문하지 않습니다.");
//   }
// });

// // 실행부
// pizza
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("완료");
//   });

// Promise 객체를 사용해서 무언가의 데이터를 취급할 때 3가지 상태변회를 체크
// 1) pending : 최초 프로미스 객체를 생성하면 무조건 펜딩단계 돌입
// 2) pullfilled : 어떤 데이터를 정상적으로 처리하게되면 실행단계에 돌입하는데 resolve라는 함수를 실행한 단계
// 3) rejected: 어떤 데이터를 정상적으로 처리하지 못하게 되면 거절단계 돌입
const start = document.querySelector(".start");
const end = document.querySelector(".end");

const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if (coffee !== "" && coffee !== null) {
    start.innerText = `${coffee} 주문접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
});

const display = (e) => {
  end.innerText = `${e} 준비완료`;
  end.classList.add("active");
  start.classList.add("done");
};

const showErr = (err) => {
  console.log(err);
};

order.then(display).catch(showErr);
