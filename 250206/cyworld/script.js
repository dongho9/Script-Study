const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.classList.add("active");
  menuGame.classList.remove("active");
  menuJukebox.classList.remove("active");
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./games.html");
  menuHome.classList.remove("active");
  menuGame.classList.add("active");
  menuJukebox.classList.remove("active");
};
const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.classList.remove("active");
  menuGame.classList.remove("active");
  menuJukebox.classList.add("active");
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);

// count event
// 쿠키는 기본적으로 날짜 정보 데이터 필요
// 서버 > 클라이언트에게 쿠키 전달 후 해당 쿠키가 계속 유지 X

const getForemattedDate = () => {
  const date = new Date();
  const year = date.getFullYear(); // 연도만 찾아옴
  const month = "0" + (date.getMonth() + 1); // 인덱스 0부터 시작하기때문에 1더해줌
  const day = "0" + date.getDate(); //일
  return `${year}-${month}-${day}`;
};

const todayDate = getForemattedDate();
const dailyCookieName = `pageHit_${todayDate}`;

const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1);
const expireDateString = expireDate.toGMTString();

const cookieVal = (cookieName) => {
  const thisCookie = document.cookie.split("; ");
  for (let i = 0; i < thisCookie.length; i++) {
    if (cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};

let dailyHitCt = parseInt(cookieVal(dailyCookieName));
if (isNaN(dailyHitCt)) {
  dailyHitCt = 0;
}
dailyHitCt++;
document.cookie = `${dailyCookieName}=${dailyHitCt}; expires=${expireDateString}`;

let totalHitCt = parseInt(cookieVal("totalPageHit"));
if (isNaN(totalHitCt)) {
  totalHitCt = 0;
}
totalHitCt++;
document.cookie = `totalPageHit=${totalHitCt}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
document.querySelector(".zero").innerText = dailyHitCt;
document.querySelector(".total").innerText = totalHitCt;

/*
  쿠키값 
  쿠키네임 = 쿠키값; expires = 만료날짜
  pageHit_250207 = "쿠키값", expires = 2025-02-08 
*/
