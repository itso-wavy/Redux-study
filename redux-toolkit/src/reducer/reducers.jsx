import { createReducer } from '@reduxjs/toolkit';
import { actionCreators } from './store';

// const { addToDo, deleteToDo } = actionCreators;

const rootReducer = createReducer([], {
  [actionCreators.addToDo]: (state, action) => {
    state.unshift({ text: action.payload, id: Date.now() });
  },
  [actionCreators.deleteToDo]: (state, action) => {
    state.filter(toDo => toDo.id !== action.payload);
  },
});

export default rootReducer;
