import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import HomePage from './components/HomePage';
import Header from "./components/Header";

ReactDOM.render(
  <div>
    <Header/>
    <HomePage />
  </div>,
  document.getElementById('root')
);
