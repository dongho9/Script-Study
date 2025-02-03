// const accept = document.querySelector("#accept");
// accept.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("gd");
// });
const form = document.querySelector("form");
const userinput = document.querySelector("#todo-item");
const ul = document.querySelector("ul");

let todos = [];
const delItem = (event) => {
  const target = event.target.parentElement;
  // todos = todos.forEach((todo) => {
  todos = todos.filter((todo) => {
    todo.id != target.id;
    // console.log(typeof todos[0].id); //number
    // console.log(typeof target.id); //string 이래서 얕은비교로 함
    save();
    target.remove();
  });
};

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  //서버의 공간에서 읽을 수 있도록 바꿈
};

const additem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = todo.text;
    btn.innerText = "삭제";
    btn.addEventListener("click", delItem);
    // li.appendChild(span);
    // li.appendChild(btn);
    li.append(span, btn); //append는 순서대로 한번에 가능
    li.id = todo.id;
    ul.prepend(li);
  }
};

const handler = (event) => {
  event.preventDefault();
  const todo = {
    id: Date.now(),
    text: userinput.value,
  };
  todos.push(todo); //배열로 보낸다
  additem(todo);
  save();
  userinput.value = "";
};

const init = () => {
  const usertodos = JSON.parse(localStorage.getItem("todos"));
  if (usertodos) {
    usertodos.forEach((todo) => {
      additem(todo);
    });
    todos = usertodos;
  }
};
init();
form.addEventListener("submit", handler);

// console.log(todos);
// localStorage.setItem("hello", "world"); //키, 값
// const myData = localStorage.getItem("hello"); //키를 가져옴
// console.log(myData);
// 로컬스토리지 : 삭제하지않으면 남아있음
// 세션스토리지 : 브라우저 종료하면 날라감
