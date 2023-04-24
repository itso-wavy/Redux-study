import { createAction, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers.jsx';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const store = configureStore({ reducer: rootReducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
