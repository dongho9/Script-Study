const playBtn = document.querySelector(".play-pause"); //정지버튼
const video = document.querySelector("video"); //비디오
const volumeBar = document.querySelector("input[type='range']"); //볼륨
const fullBtn = document.querySelector(".fullscreenBtn"); //전체화면버튼
const rates = document.querySelectorAll(".rate"); //재생속도
const progressCover = document.querySelector(".progress"); //진행바

const play = () => {
  playBtn.innerText = "||";
  video.play();
};

const pause = () => {
  playBtn.innerText = "►";
  video.pause();
};
const togglePlay = () => {
  video.paused ? play() : pause();
};
const formatting = (time) => {
  // 1시간 = 60분
  // 1분 = 60초
  // 1초
  let hour = Math.floor(time / 3600); //시
  let min = Math.floor(time / 60); //분
  let sec = Math.floor(time % 60); //초

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");
  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar"); //진행바
  const circle = document.querySelector(".circle"); //진행바 동그라미
  const currentTime = video.currentTime; //비디오 현재시간
  const duration = video.duration; //비디오 총 길이
  const percent = (currentTime / duration) * 100; //비디오 퍼센트
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth; //clientWidth = 너비
  const newPos = (currentTime / duration) * progressBarWidth;
  // console.log(newPos);
  circle.style.left = `${newPos}px`;
};

playBtn.addEventListener("click", togglePlay);
//플레이버튼 클릭 이벤트
video.addEventListener("click", togglePlay);
//비디오태그 클릭 이벤트
video.addEventListener("timeupdate", updateTime);
// 시간 업데이트 이벤트

video.addEventListener("timeupdate", updateProgress);

const setVolume = (e) => {
  video.volume = e.target.value;
};

volumeBar.addEventListener("change", setVolume);

fullBtn.addEventListener("click", () => {
  video.requestFullscreen();
  //전체화면
});

const setRate = (e) => {
  // const rate = e.target.dataset.rate;
  const { rate } = e.target.dataset; //객체 안에 있는 키가 변수명과 같다면 구조분해할당으로 생략가능
  video.playbackRate = rate; // playbackRate = 영상 재생 속도
};

rates.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    setRate(e);
  });
});
