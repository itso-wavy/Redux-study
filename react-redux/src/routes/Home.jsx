import { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

const Home = ({ toDos, addToDo }) => {
  // console.log(addToDo);
  const [text, setText] = useState('');
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

const mapStateToProps = (state, ownProps) => {
  // console.dir(state, ownProps);
  return { toDos: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.dir(dispatch, ownProps);
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
