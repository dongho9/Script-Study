const button = document.querySelector("input[type='button']");
const email = document.querySelector("input[type='email']");
const result = document.querySelector("#result");
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (email.value !== "") {
//     let userName = email.value.split("@")[0];
//     let domain = email.value.split("@")[1];
//     userName = userName.slice(0, 3);

//     result.innerText = `${userName}***@${domain}`;
//     email.value = "";
//   }
// });

button.addEventListener("click", () => {
  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let domain = email.value.split("@")[1];
    let half = userName.length / 2;
    userName = userName.slice(0, userName.length - half);
    result.innerText = `${userName}***@${domain}`;
    email.value = "";
  }
});

window.addEventListener("resize", () => {});
