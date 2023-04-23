import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const TODOS_KEY = 'todos';
const [ADD, DELETE, PAINT] = ['ADD', 'DELETE', 'PAINT'];

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ id: Date.now(), text: action.text }, ...state];
    case DELETE:
      return state.filter(todo => todo.id !== parseInt(action.id));
    case PAINT:
      return [{ ...action }, ...state];
    default:
      return state;
  }
};

const store = createStore(reducer);

const deleteToDo = e => {
  store.dispatch({ type: DELETE, id: e.target.dataset.id });
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

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(store.getState()));
  ul.innerText = '';
  store.getState().forEach(paintToDo);
};

const addToDo = e => {
  e.preventDefault();
  if (input.value) {
    store.dispatch({ type: ADD, text: input.value });
    input.value = '';
  }
};

form.addEventListener('submit', addToDo);

store.subscribe(saveToDos);

const savedToDos = () => {
  return JSON.parse(localStorage.getItem(TODOS_KEY));
};

window.onload = () => {
  savedToDos() &&
    savedToDos().forEach(todo => store.dispatch({ type: PAINT, ...todo }));
};
