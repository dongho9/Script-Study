const eyeicon = document.querySelector(".main i");
const userpw = document.querySelector("#userpw");
eyeicon.addEventListener("click", () => {
  userpw.classList.toggle("active");
  if (userpw.classList.contains("active")) {
    userpw.type = "text";
    eyeicon.className = "fas fa-eye-slash";
  } else {
    userpw.type = "password";
    eyeicon.className = "fas fa-eye";
  }
});
