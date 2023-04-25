import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../components/Todo';
import { ADD } from '../redux/store';
// import { actionCreators } from '../redux/store';
// const { addTodo } = actionCreators;

const Home = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text) {
      dispatch(ADD(text));
      setText('');
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button>➕</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default Home;
