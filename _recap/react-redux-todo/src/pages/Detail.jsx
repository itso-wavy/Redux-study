import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const id = useParams().id;
  const todos = useSelector(state => state);
  const todo = todos.find(todo => todo.id === +id);

  return (
    <>
      <h1>{todo ? todo.text : 404}</h1>
      <strong>{todo && `Created at ${todo.id}`}</strong>
    </>
  );
};

export default Detail;
