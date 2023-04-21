import { createStore } from 'redux';

const ADD = 'ADD',
  MINUS = 'MINUS';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(reducer);

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('strong');

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

onChange();
