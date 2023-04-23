import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

const ToDo = ({ text, deleteToDo, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>Del</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps); // text, id
  return { deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)) };
};
export default connect(null, mapDispatchToProps)(ToDo);
