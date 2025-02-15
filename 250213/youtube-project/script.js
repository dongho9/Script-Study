// hastlist sticky event
window.addEventListener("scroll", () => {
  const hashlist = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  const ad01 = document.querySelector(".ad01");

  if (scrollY >= 275) {
    hashlist.classList.add("active");
  } else {
    hashlist.classList.remove("active");
  }
});

// touch event
const hashcontent = document.querySelector(".hashcontent");
const listclientwidth = hashcontent.clientWidth;
// console.log(listclientwidth);
const listscrollwidth = hashcontent.clientWidth + 210;
// console.log(listscrollwidth);

let startX = 0; // 최초
let nowX = 0; // 움직임
let endX = 0; // 손가락 뗀 지점
let listX = 0; // 두번째

const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX;
  // touches = 화면을 터치 중인 모든 손가락 정보를 담은 리스트.
};

const setTranslateX = (x) => {
  hashcontent.style.transform = `translateX(${x}px)`;
};

const getTranslateX = () => {
  return parseInt(
    getComputedStyle(hashcontent).transform.split(/[^\-0-9]+/g)[5]
  );
  // 정규표현식
  // ^는 캐럿 : 부정이라는 의미
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};
const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashcontent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listclientwidth - listscrollwidth) {
    setTranslateX(listclientwidth - listscrollwidth);
    hashcontent.style.transition = `all 0.1s ease`;
    listX = listclientwidth - listscrollwidth;
  }
  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousedown", onScrollStart);

  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("mouseup", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
};

const onScrollStart = (e) => {
  startX = getClientX(e);
  // console.log(startX);
  window.addEventListener("touchmove", onScrollMove);
  // 사용자가 화면을 터치한 상태에서 손가락을 움직일 때 발생.
  window.addEventListener("mousemove", onScrollMove);
  // 사용자가 마우스를 움직일 때 발생하는 이벤트.
  window.addEventListener("mouseup", onScrollEnd);
  // 마우스 버튼을 눌렀다가 뗄 때 발생.
  window.addEventListener("mouseup", onScrollEnd);
};

hashcontent.addEventListener("touchstart", onScrollStart);
// 사용자가 화면을 터치했을 때 발생하는 이벤트.
hashcontent.addEventListener("mousedown", onScrollStart);
// 사용자가 마우스 버튼을 눌렀을 때 발생하는 이벤트.
