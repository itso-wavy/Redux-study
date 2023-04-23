import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const id = useParams().id;
  const toDos = useSelector(state => state);
  const toDo = toDos.find(toDo => toDo.id === +id);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <strong>Created at: {toDo?.id}</strong>
    </>
  );
};

export default Detail;
