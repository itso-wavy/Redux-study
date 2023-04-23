import { createStore } from 'redux';

const [ADD, DELETE] = ['ADD', 'DELETE'];

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo: text => {
    return {
      type: ADD,
      text,
    };
  },

  deleteToDo: id => {
    return {
      type: DELETE,
      id,
    };
  },
};

export default store;
