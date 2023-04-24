import { createStore } from 'redux';

export const [ADD, DEL] = ['ADD', 'DELETE'];

const TODOS_KEY = 'todos';

const getTodos = () => {
  return JSON.parse(localStorage.getItem(TODOS_KEY));
};
const setTodos = todos => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const reducer = (state = getTodos() ? getTodos() : [], action) => {
  switch (action.type) {
    case ADD:
      setTodos([{ id: Date.now(), text: action.text }, ...state]);
      return getTodos();

    case DEL:
      setTodos(state.filter(todo => action.id !== todo.id));
      return getTodos();

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
