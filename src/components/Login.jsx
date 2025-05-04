import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import backgroundImage from './Image101.jpeg'; // image in components folder
import logoImage from './Image100.jpeg'; // also using same image inside box (change if you want)

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/main'); // redirect to to-do list
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>

        <div className="login-box">
        <p>Login Page</p>
        <img src={logoImage} alt="Login Visual" className="login-image" />
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account? <span className="signup-link">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
