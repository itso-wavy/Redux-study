import {
  configureStore,
  // createAction,
  // createReducer,
  createSlice,
} from '@reduxjs/toolkit';

// const minusCount = createAction('MINUS');
// const plusCount = createAction('PLUS');

// const reducer = createReducer(0, {
//   [minusCount]: state => state - 1,
//   [plusCount]: state => state + 1,
// });

// export const actionCreators = {
//   minusCount,
//   plusCount,
// };

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    MINUS: state => state - 1,
    PLUS: state => state + 1,
  },
});

export const { MINUS, PLUS } = counterSlice.actions;
export default configureStore({ reducer: counterSlice.reducer });
