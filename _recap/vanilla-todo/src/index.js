const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];
const TODOS_KEY = 'todos';
const savedToDos = () => {
  return JSON.parse(localStorage.getItem(TODOS_KEY));
};

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  ul.innerText = '';
  todos.forEach(paintToDo);
};

const deleteToDo = e => {
  todos = todos.filter(todo => parseInt(e.target.dataset.id) !== todo.id);
  saveToDos();
};

const paintToDo = todo => {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  li.textContent = todo.text;
  delBtn.setAttribute('data-id', todo.id);
  delBtn.textContent = '❌';
  delBtn.addEventListener('click', deleteToDo);
  li.append(delBtn);
  ul.append(li);
};

const onSubmit = e => {
  e.preventDefault();
  if (input.value) {
    const todo = { id: Date.now(), text: input.value };
    input.value = '';
    todos.push(todo);
    saveToDos();
  }
};

form.addEventListener('submit', onSubmit);

window.onload = () => {
  savedToDos() !== null && (todos = savedToDos());
  todos.forEach(todo => paintToDo(todo));
};
