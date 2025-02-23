const signupbtn = document.querySelector("#signup-button");
const timerbtn = document.querySelector("#token-timer-confirm-button");

timerbtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(interval);
  document.querySelector("#token").innerText = "000000";
  document.querySelector("#token-button").style = "";
  document.querySelector("#token-button").setAttribute("disabled", true);

  document.querySelector("#token-timer").innerText = "03:00";
  document.querySelector("#token-timer-confirm-button").style = "";
  document
    .querySelector("#token-timer-confirm-button")
    .setAttribute("disabled", true);

  alert("인증이 완료되었습니다.");

  document.querySelector("#signup-button").style =
    "background : #fff; color: #0068ff; border: 1px solid #0068ff; cursor: pointer;";
  document.querySelector("#signup-button").removeAttribute("disabled");
});

let interval;

const getTokenTimer = () => {
  let timer = 10;
  interval = setInterval(() => {
    if (timer >= 0) {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;

      document.querySelector("#token-timer").innerText =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
      timer -= 1;
    } else {
      document.querySelector("#token").innerText = "000000";
      document.querySelector("#token-button").style = "";
      document.querySelector("#token-button").setAttribute("disabled", true);

      document.querySelector("#token-timer").innerText = "03:00";
      document.querySelector("#token-timer-confirm-button").style = "";
      document
        .querySelector("#token-timer-confirm-button")
        .setAttribute("disabled", true);
      clearInterval(interval);
    }
  }, 1000);
};
const signUp = (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const writer = document.querySelector("#writer").value;
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;
  const location = document.querySelector("#location").value;
  const genderwoman = document.querySelector("#gender-woman").checked;
  const genderman = document.querySelector("#gender-man").checked;

  let isValid = true;
  if (email.includes("@") === false) {
    document.querySelector("#error_email").innerText =
      "이메일이 올바르지 않습니다.";
    isValid = false;
  } else {
    document.querySelector("#error_email").innerText = "";
  }
  if (writer === "") {
    document.querySelector("#error_writer").innerText =
      "이름이 올바르지 않습니다.";
    isValid = false;
  } else {
    document.querySelector("#error_writer").innerText = "";
  }
  if (password1 === "") {
    document.querySelector("#error_password1").innerText =
      "비밀번호를 입력해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_password1").innerText = "";
  }
  if (password2 === "") {
    document.querySelector("#error_password2").innerText =
      "비밀번호를 입력해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_password2").innerText = "";
  }
  if (password1 !== password2) {
    document.querySelector("#error_password1").innerText =
      "비밀번호가 일치하지 않습니다.";
    document.querySelector("#error_password2").innerText =
      "비밀번호가 일치하지 않습니다.";
  }
  if (
    location !== "seoul" &&
    location !== "gyeongi" &&
    location !== "incheon"
  ) {
    document.querySelector("#error_location").innerText =
      "지역을 선택해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_location").innerText = "";
  }
  if (genderwoman === false && genderman === false) {
    document.querySelector("#error_gender").innerText = "성별을 선택해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_gender").innerText = "";
  }

  if (isValid === true) {
    alert("이젠 아카데미 가입을 축하합니다.");
  }
};
signupbtn.addEventListener("click", signUp);

const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const phone3 = document.querySelector("#phone3");
const tokenbtn = document.querySelector("#token-button");
phone1.addEventListener("keyup", () => {
  const phone1value = phone1.value;
  if (phone1value.length === 3) {
    document.querySelector("#phone2").focus();
  }
});
phone2.addEventListener("keyup", () => {
  const phone1value = phone2.value;
  if (phone1value.length === 4) {
    document.querySelector("#phone3").focus();
  }
});
phone3.addEventListener("keyup", () => {
  const p01 = document.querySelector("#phone1").value;
  const p02 = document.querySelector("#phone2").value;
  const p03 = document.querySelector("#phone3").value;
  if (p01.length === 3 && p02.length === 4 && p03.length === 4) {
    tokenbtn.removeAttribute("disabled");
    tokenbtn.style = "background: #fff; color: #0068ff; cursor: pointer;";
  }
});
tokenbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  // padStart 문자의 자리수 첫번째 인자, 부족하면 앞에서부터 0으로 채운다
  document.querySelector("#token").innerText = token;
  document.querySelector("#token-button").style =
    "background : #fff; cusor: pointer;";
  document.querySelector("#token-button").setAttribute("disabled", true);
  timerbtn.style = "background: #0068ff; color: #fff; cursor: pointer;";
  timerbtn.removeAttribute("disabled");
  timerbtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
  getTokenTimer();
});
