import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = ({ toDos }) => {
  const id = useParams().id;
  const toDo = toDos.find(toDo => toDo.id === +id);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <strong>Created at: {toDo?.id}</strong>
      <button>Del</button>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Detail);
