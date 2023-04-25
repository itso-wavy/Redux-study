import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { actionCreators } from '../redux/store';
// const { deleteTodo } = actionCreators;
import { DEL } from '../redux/store';

const Todo = ({ id, text }) => {
  const dispatch = useDispatch();
  const deleteToDo = e => {
    dispatch(DEL({ id: parseInt(e.target.dataset.id) }));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo} data-id={id}>
        ❌
      </button>
    </li>
  );
};

export default Todo;
