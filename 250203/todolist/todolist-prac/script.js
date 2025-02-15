const taskInput = document.querySelector("#todo-item");
const addButton = document.querySelector("#accept");
const taskList = document.querySelector("#list");

const addTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  if (task) {
    createTaskElement(task);
    taskInput.value = "";
    saveTasks();
  }
};
addButton.addEventListener("click", addTask);

const createTaskElement = (task) => {
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  span.innerText = task;
  btn.innerText = "삭제";
  listItem.append(span, btn);
  taskList.prepend(listItem);
  console.log(listItem);
};

const saveTasks = () => {
  let tasks = [];
  taskList.querySelectorAll("li span").forEach((item) => {
    tasks.push[item.innerText];
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
};
