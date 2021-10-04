import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import background from './background.png';
import Login from './Login';

ReactDOM.render(
  <React.StrictMode>
    <img src={background} alt="Background" className="background-image"/>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);