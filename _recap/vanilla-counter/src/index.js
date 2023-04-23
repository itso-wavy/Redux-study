const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const number = document.querySelector('#number');

let count = 0;
const setCount = () => {
  number.textContent = count;
};

const handleMinus = () => {
  --count;
  setCount();
};
const handlePlus = () => {
  ++count;
  setCount();
};
minus.addEventListener('click', handleMinus);
plus.addEventListener('click', handlePlus);

setCount();
