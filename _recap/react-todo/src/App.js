import { useEffect, useState } from 'react';

const TODOS_KEY = 'todos';
const savedToDos = () => {
  return JSON.parse(localStorage.getItem(TODOS_KEY));
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    savedToDos() && setTodos(savedToDos());
  }, []);

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const deleteToDo = e => {
    setTodos(todos.filter(todo => parseInt(e.target.dataset.id) !== todo.id));
  };

  const onSubmit = e => {
    e.preventDefault();
    if (input) {
      const todo = { id: Date.now(), text: input };
      setTodos([...todos, todo]);
      setInput('');
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button>➕</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={deleteToDo} data-id={todo.id}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
