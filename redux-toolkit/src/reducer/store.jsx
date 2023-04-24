import {
  createReducer,
  createAction,
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    // => actions
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    del: (state, action) => state.filter(toDo => toDo.id !== action.payload),
  },
});

// const store = configureStore({ reducer: toDos.reducer });

export const { add, del } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
