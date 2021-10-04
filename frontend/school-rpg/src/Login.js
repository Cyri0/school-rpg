import React from 'react';
//import ReactDOM from 'react-dom';
import './Login.css';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      username : '', 
      password : '' 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUnameChange = this.handleUnameChange.bind(this);
    this.handlePWDChange = this.handlePWDChange.bind(this);
  }

  handleUnameChange(event){
    this.setState({username: event.target.value})
  }
  handlePWDChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    alert(`Felhasználónév: ${this.state.username}\nJelszó: ${this.state.password}`);
  }

  render() {
      return (
      <div className="login">
        <h1>School RPG</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Felhasználónév</label>
          <input type="text" value={this.state.username} onChange={this.handleUnameChange} />
          <p className="error_msg">Hiányzó felhasználónév!</p>
          <label>Jelszó</label>
          <input type="text" value={this.state.password} onChange={this.handlePWDChange} />
          <p className="error_msg">Hiányzó jelszó!</p>
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}

export default Login;