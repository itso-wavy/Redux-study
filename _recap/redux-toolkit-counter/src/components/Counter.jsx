import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MINUS, PLUS } from '../redux/store';

const Counter = () => {
  const [count, setCount] = useState(0);
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const handleMinus = () => dispatch(MINUS());
  const handlePlus = () => dispatch(PLUS());

  useEffect(() => setCount(state), [state]);

  return (
    <>
      <button onClick={handleMinus}>➖</button>
      <strong>{count}</strong>
      <button onClick={handlePlus}>➕</button>
    </>
  );
};

export default Counter;
