import { createStore } from 'redux';

const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const number = document.querySelector('#number');
const [MINUS, PLUS] = ['MINUS', 'PLUS'];

const setCount = () => {
  number.textContent = store.getState();
};

const reducer = (state = 0, action) => {
  switch (action.type) {
    case MINUS:
      return state - 1;
    case PLUS:
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const handleMinus = () => {
  store.dispatch({ type: MINUS });
};

const handlePlus = () => {
  store.dispatch({ type: PLUS });
};

store.subscribe(setCount);

minus.addEventListener('click', handleMinus);
plus.addEventListener('click', handlePlus);

setCount();
