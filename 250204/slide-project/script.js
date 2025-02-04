const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

const container = document.querySelector("#container");
const newvid = document.createElement("video");
const srcvideo = document.createAttribute("src");
const autovideo = document.createAttribute("autoplay");
const arrows = document.querySelectorAll(".arrow");
srcvideo.value = `./videos/${videos[0]}`;

newvid.setAttributeNode(srcvideo);
newvid.setAttributeNode(autovideo);

container.appendChild(newvid);

newvid.addEventListener("click", function () {
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});

let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = videos.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
      }
    }
    srcvideo.value = `./videos/${videos[i]}`;
  });
});
/* 
document.createAttribute()
- Attr 객체를 생성 후 적용
const element = document.querySelector("div");

// 새 속성 객체 생성
const attr = document.createAttribute("id");
attr.value = "myDiv"; // 속성 값 설정

// 요소에 속성 추가
element.setAttributeNode(attr);


setAttribute(name, value)
-  문자열 기반으로 속성을 추가 또는 변경할 때 사용
const element = document.querySelector("div");
element.setAttribute("id", "myDiv"); // <div id="myDiv"></div>
*/
