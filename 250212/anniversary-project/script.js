const now = new Date();
console.log(now);
const firstDay = new Date("2024-12-19");
const toNow = now.getTime();
const toFirst = firstDay.getTime();
const pastTime = toNow - toFirst;
const pastDay = Math.round(pastTime / (24 * 60 * 60 * 1000));
// Math.round = 반올림
console.log(pastDay);

document.querySelector(".accent span").innerText = ` ${pastDay}일`;

const calcDate = (days) => {
  future = toFirst + days * 24 * 60 * 60 * 1000;
  someday = new Date(future);
  year = someday.getFullYear();
  month = someday.getMonth() + 1;
  date = someday.getDate();

  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
