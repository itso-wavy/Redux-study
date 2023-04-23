import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

const Home = () => {
  const [text, setText] = useState('');
  const toDos = useSelector(text => text);
  const dispatch = useDispatch();
  const addToDo = text => dispatch(actionCreators.addToDo(text));
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setText('');
    addToDo(text);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
};

export default Home;
