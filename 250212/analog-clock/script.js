// 1도 - 파이 / 180
// 12 / 360도 = 각 30도씩 유지

const nums = document.querySelectorAll(".number");
for (let i = 0; i < nums.length; i++) {
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;

  const angle = (i + 1) * (Math.PI / 6);
  // console.log(angle);
  const x =
    132 - nums[i].offsetWidth + 132 * Math.abs(Math.sin(angle).toFixed(2));
  const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));

  if (i + 1 > 6) {
    nums[i].style.right = `${x}px`;
  } else {
    nums[i].style.left = `${x}px`;
  }

  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3)) {
    nums[i].style.top = `${y}px`;
  } else {
    nums[i].style.bottom = `${y}px`;
  }
}

const hour = document.querySelector("#hour"); //시침
const min = document.querySelector("#min"); //분침
const sec = document.querySelector("#sec"); //초침

const clock = () => {
  const currentTime = new Date();

  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  let minute = currentTime.getMinutes();
  let minAngle = minute * 6;
  let minAngleValue = `rotate(${minAngle}deg)`;

  let hours = currentTime.getHours();
  let hourAngle = hours * 30 + (minute / 60) * 30;
  let hourAngleValue = `rotate(${hourAngle}deg)`;

  sec.style.transform = secondAngleValue;
  min.style.transform = minAngleValue;
  hour.style.transform = hourAngleValue;
};
setInterval(clock, 1000);
