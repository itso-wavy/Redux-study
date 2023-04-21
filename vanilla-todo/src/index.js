import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = toDo => {
  return {
    type: ADD,
    text: toDo,
  };
};

const deleteToDo = id => {
  return {
    type: DELETE,
    id: id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];

    case DELETE:
      return state.filter(i => i.id !== action.id);

    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddTodo = toDo => {
  store.dispatch(addToDo(toDo));
};

const dispatchDeleteToDo = e => {
  const id = Number(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(todo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.addEventListener('click', dispatchDeleteToDo);
    btn.innerText = 'X';
    li.innerText = todo.text;
    li.id = todo.id;
    li.append(btn);
    ul.append(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddTodo(toDo);
};

form.addEventListener('submit', onSubmit);
