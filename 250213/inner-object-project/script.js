// const year = document.querySelector("#year");
// const month = document.querySelector("#month");
// const date = document.querySelector("#date");
// const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//   yearv = year.value;
//   monthv = month.value;
//   datev = date.value;
//   const past = new Date(yearv, monthv, datev);
//   // console.log(past);
//   const current = new Date();
//   const gap = current - past;
//   const gapdate = Math.floor(gap / (24 * 60 * 60 * 1000));
//   const gaptime = Math.floor(gap / (60 * 60 * 1000));
//   // console.log(gapdate, gaptime);
//   // console.log(current);
//   const currentYear = current.getFullYear();
//   let currentMonth = current.getMonth() + 1;
//   let currentDate = current.getDate();
//   let currentHours = current.getHours();
//   let currentMin = current.getMinutes();
//   // console.log(currentTime);
//   currentMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth;
//   currentDate = currentDate < 10 ? "0" + currentDate : currentDate;
//   currentHours = currentHours < 10 ? "0" + currentHours : currentHours;
//   currentMin = currentMin < 10 ? "0" + currentMin : currentMin;
//   const age = currentYear - yearv + 1;
//   const resultC = document.querySelector("#current");
//   const resultD = document.querySelector("#days");
//   const resultH = document.querySelector("#hours");
//   resultC.innerText = `${currentYear}년 ${currentMonth}월 ${currentDate}일 ${currentHours}시 ${currentMin}분 현재`;
//   resultD.innerHTML = `<b>${gapdate}</b>일 이 지났고`;
//   resultH.innerHTML = `<b>${gaptime}</b>시간이 흘렀습니다.<br> 현재 나이는 <b>${age}</b>살 입니다.`;
// });

const birthyear = document.querySelector("#year");
const birthhmonth = document.querySelector("#month");
const birthdate = document.querySelector("#date");

const btn = document.querySelector("#button");
const current = document.querySelector("#current");
const resultdays = document.querySelector("#days");
const resulthours = document.querySelector("#hours");
const age = document.querySelector("#age");

const today = new Date();

current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const birthday = new Date(
    birthyear.value,
    birthhmonth.value - 1,
    birthdate.value
  );

  const passed = today.getTime() - birthday.getTime();
  const passeddays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedhours = Math.floor(passed / (60 * 60 * 1000));
  const passedage = Math.floor(passed / (24 * 60 * 60 * 1000) / 365) + 1;
  resultdays.innerText = `날짜로는 ${passeddays}일이 흐르고,`;
  resulthours.innerText = `시간으로는 ${passedhours}시간이 흘렀습니다.`;
  age.innerText = `나이는 ${passedage}살 입니다.`;
});
