import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import Login from './LoginPage/Login';
import Profile from './ProfilePage/Profile'
import Navbar from './Navbar/Navbar'

ReactDOM.render(
  <React.StrictMode>
    
    {/* <Login /> */}
    <div>
      <Navbar/>
      <Profile/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);