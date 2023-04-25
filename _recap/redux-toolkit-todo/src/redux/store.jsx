import { configureStore, createSlice } from '@reduxjs/toolkit';

const TODOS_KEY = 'todos';
const getTodos = () => JSON.parse(localStorage.getItem(TODOS_KEY));
const setTodos = todos =>
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));

const counterSlice = createSlice({
  name: 'counter',
  initialState: getTodos() ? getTodos() : [],
  reducers: {
    ADD: (state, action) => {
      setTodos([{ id: Date.now(), text: action.payload }, ...state]);
      return getTodos();
    },
    DEL: (state, action) => {
      setTodos(state.filter(todo => todo.id !== action.payload.id));
      return getTodos();
    },
  },
});

export const { ADD, DEL } = counterSlice.actions;
export default configureStore({ reducer: counterSlice.reducer });
