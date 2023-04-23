import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import store from '../store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Detail />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;