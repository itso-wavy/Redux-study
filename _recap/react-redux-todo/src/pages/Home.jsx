import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../components/Todo';
import { ADD } from '../redux/store';

const Home = () => {
  let todos = useSelector(state => state);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addToDo = text => {
    dispatch({ type: ADD, text: text });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text) {
      addToDo(text);
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
