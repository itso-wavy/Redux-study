import { useDispatch } from 'react-redux';
import { del } from '../reducer/store';
import { Link } from 'react-router-dom';

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const deleteToDo = () => dispatch(del(id));
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>Del</button>
    </li>
  );
};

export default ToDo;
