import React from 'react';
import './App.css';
import BaseComponent from './View/BaseComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <BaseComponent/>
    </BrowserRouter>
  );
}

export default App;
