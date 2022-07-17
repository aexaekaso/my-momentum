const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDoArr = [];

function localStorgeToDoArr() {
  localStorage.setItem("todo_arr", JSON.stringify(toDoArr));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoArr = toDoArr.filter((toDo) => {return toDo.id !== parseInt(li.id)});
  localStorgeToDoArr();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = newToDoObj.id;
  span.innerText = newToDoObj.text;
  button.innerText = "X";

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);

  button.addEventListener("click", deleteToDo);
}

function onToDoFormSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  toDoArr.push(newToDoObj);
  toDoInput.value = "";

  paintToDo(newToDoObj);
  localStorgeToDoArr();
}

toDoForm.addEventListener("submit", onToDoFormSubmit);

const savedToDoArr = localStorage.getItem("todo_arr");

if (savedToDoArr) {
  const parsedToDoArr = JSON.parse(savedToDoArr);
  parsedToDoArr.forEach(paintToDo);
  toDoArr = parsedToDoArr;
}