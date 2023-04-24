import { createStore } from 'redux';
export const [MINUS, PLUS] = ['MINUS', 'PLUS'];

const reducer = (state = 0, action) => {
  switch (action.type) {
    case MINUS:
      return --state;
    case PLUS:
      return ++state;
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
