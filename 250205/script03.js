// // 내거
// const save = document.querySelector(".btn[type='submit'");

// save.addEventListener("click", (e) => {
//   e.preventDefault();
//   const a = document.querySelector("#title");
//   const b = document.querySelector("#author");
//   const ul = document.querySelector("#booklist");
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const reset = document.querySelector(".btn[type='reset']");
//   span.innerText = "삭제";
//   const avalue = a.value;
//   const bvalue = b.value;
//   span.addEventListener("click", function () {
//     this.parentElement.remove();
//   });
//   if (avalue !== "" || bvalue !== "") {
//     li.append(`${avalue} - ${bvalue}`);
//     li.append(span);
//     ul.append(li);
//     a.value = "";
//     b.value = "";
//   } else {
//     alert("정보를 입력하세요!");
//   }
// });

//선생님거
const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const booklist = document.querySelector("#booklist");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (title.value === "" || author.value === "") alert("정보를 입력해주세요!");
  else {
    const liItem = document.createElement("li");
    liItem.innerHTML = `${title.value} - ${author.value}<span>삭제</span>`;

    booklist.appendChild(liItem);

    title.value = "";
    author.value = "";

    const delBtns = document.querySelectorAll("#booklist li span");

    delBtns.forEach(function (delBtn) {
      delBtn.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);

        // this.parentElement.remove();
        // element :  HTML tag로 바로 특정할 수 있거나, id나 class 같은 속성을 가진 것
        // this.parentNode.remove();
        // node : node는 DOM 계층구조에 속한 객체의 어떤 타입이든 가리킬 수 있는 이름 즉 element가 node보다 작은 개념
      });
    });
  }
});
