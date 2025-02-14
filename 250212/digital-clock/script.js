const displayDate = document.querySelector("#today");
const displayTime = document.querySelector("#clock");
const today = new Date();
console.log(displayDate);
const year = today.getFullYear();
console.log(year);
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();
console.log(day1);
let day2;

switch (day1) {
  case 0:
    day2 = "일요일";
    break;
  case 1:
    day2 = "월요일";
    break;
  case 2:
    day2 = "화요일";
    break;
  case 3:
    day2 = "수요일";
    break;
  case 4:
    day2 = "목요일";
    break;
  case 5:
    day2 = "금요일";
    break;
  case 6:
    day2 = "토요일";
    break;
}

displayDate.innerText = `${year}년 ${month}월 ${date}일 ${day2}`;

const clock = () => {
  const current = new Date();
  let hrs = current.getHours();
  let min = current.getMinutes();
  let sec = current.getSeconds();

  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hrs = hrs < 10 ? "0" + hrs : hrs;
  displayTime.innerText = `${period} ${hrs}시 ${min}분 ${sec}초`;
};
setInterval(clock, 1000);
