// console.log(document.querySelector("h1"));
// console.log(document.querySelector("h1").innerText);
// console.log(document.querySelector("#profile"));
// console.log(document.querySelector(".imgSrc"));
// console.log(document.querySelectorAll(".user"));

// console.log(document.getElementById("profile"));
// console.log(document.getElementsByClassName("imgSrc"));
// console.log(document.getElementsByTagName("h1"));

// console.log(document.querySelector("#desc").innerText);
// console.log(document.querySelector("#desc").innerHTML);
// console.log(document.querySelector("#desc").textContent);
// css에서 display none을줘도 innerHTML, textContent는 값을 찾아옴

// innerText = 내부의 텍스트만 찾아옴
// innerHTML = 태그까지 찾아온다

const title = document.querySelector("h1");
const userName = document.querySelectorAll(".user")[0];
const profileImg = document.querySelector(".imgSrc");

title.addEventListener("click", () => {
  title.innerText = "마이 프로필";
  title.style.backgroundColor = "#000";
  title.style.color = "#fff";
});

userName.addEventListener("click", () => {
  userName.innerHTML = "이름 : <b>태연</b>";
  profileImg.src =
    "https://koreanmusicawards.com/wp-content/uploads/2021/01/2020_taeyeon.jpg";
  if (!userName.classList.contains("active")) {
    userName.classList.add("active");
  } else {
    userName.classList.remove("active");
  }
  // userName.classList.add("active");
});

// console.log(document.querySelectorAll("#desc p")[0].classList);
