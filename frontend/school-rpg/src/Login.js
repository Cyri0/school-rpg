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
    if(this.state.password.length != 0 && this.state.username.length != 0){
      alert(`Felhasználónév: ${this.state.username}\nJelszó: ${this.state.password}`);
    }
  }

  render() {
      return (
      <div className="login">
        <h1>School RPG</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Felhasználónév</label>
          <input type="text" value={this.state.username} onChange={this.handleUnameChange} />
          <label>Jelszó</label>
          <input type="password" value={this.state.password} onChange={this.handlePWDChange} />
          <input 
            type="submit" 
            value="Login"
            disabled={ this.state.password.length === 0 || this.state.username.length === 0 }/>
        </form>
      </div>
    );
  }
}

export default Login;