# Redux-study

⚛️ `yarn add redux react-redux react-router-dom`

## vanilla-redux

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
- action: data 업데이트 분기점 _객체_?
- .dispatch(): reducer에 action 전달
- .getState(): 업데이트된 state 가져오기
- .subscribe(): state가 변화하면 콜백함수를 실행
  **never mutate state!**: reducer 는 순수 함수

## react-redux

- connect(component): store(**state**/**dispatch**) => component(**props**)

  ```js
  connect(mapStateToProps, mapDispatchToProps)(component);
  ```

  - map**State**To**Props**:

  ```js
  function mapStateToProps(state, ownProps) {
    return { state };
  }
  ```

  - map**Dispatch**To**Props**:
    ```js
    function mapDispatchToProps(dispatch, ownProps) {
      return { dispatch };
    }
    ```

---

**connect** => useSelector, useDispatch 대체됨

```jsx
// getState / mapStateToProps => useSelector
// mapDispatchToProps => useDispatch

const Home = () => {
  const [text, setText] = useState('');
  const onChange = event => {
    setText(event.target.value);
  };
  const toDo = useSelector(state => state);
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    dispatch(addToDo(text));
    setText('');
  };
};
```
