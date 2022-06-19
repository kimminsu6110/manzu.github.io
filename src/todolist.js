const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');
let toDos = [];

function deleteFilter(todo) {
  return;
}

function deleteToDo(event) {
  event.preventDefault();
  const li = event.target.parentElement;
  console.log(li.id);
  toDos = toDos.filter((toDo) => toDo.id != li.id);
  li.remove();
  window.localStorage.setItem('toDos', JSON.stringify(toDos));
}

function saveToDoList(newToDo) {
  toDos.push(newToDo);
  window.localStorage.setItem('toDos', JSON.stringify(toDos));
}

function painToDo(newToDoObj) {
  const newToDo = newToDoObj.text;
  const id = newToDoObj.id;
  console.log(newToDo);
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  li.id = id;
  button.innerText = 'X';
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener('click', deleteToDo);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

function creatToDoList(newToDo) {
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  painToDo(newToDoObj);
  saveToDoList(newToDoObj);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  creatToDoList(newToDo);
  toDoInput.value = '';
}

function init() {
  const toDo = JSON.parse(window.localStorage.getItem('toDos'));
  console.log(toDo);
  for (a in toDo) {
    toDos.push(toDo[a]);
    painToDo(toDo[a]);
  }
}

init();
toDoForm.addEventListener('submit', handleToDoSubmit);
