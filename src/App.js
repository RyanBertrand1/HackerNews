import React from 'react';
import './App.css';
import BaseComponent from './View/BaseComponent';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <BaseComponent/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
