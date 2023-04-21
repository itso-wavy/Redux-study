# Redux-study

```js
import { createStore } from 'redux';

const reducer = (state = 'initialValue', action) => {
  if (action.type) {
    //  ...modifying state
  }
  return state;
};
const store = createStore(reducer);
store.dispatch({ type: 'actionType' });

store.getState(); // modified state
```

- store: state 저장소
- reducer: data를 업데이트하는 함수, 초깃값+액션
- action: data 업데이트 분기점 객체?
- .dispatch(): reducer에 action 전달
- .getState(): 업데이트된 state 가져오기

// reducer(currentState = 0, {type: 'ADD'})
