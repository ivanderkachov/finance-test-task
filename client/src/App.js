import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './redux';
import Main from './pages/main/main';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
