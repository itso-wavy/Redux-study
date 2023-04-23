import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count => --count);
  };
  const handlePlus = () => {
    setCount(count => ++count);
  };

  return (
    <>
      <button onClick={handleMinus}>➖</button>
      <strong>{count}</strong>
      <button onClick={handlePlus}>➕</button>
    </>
  );
};

export default App;
