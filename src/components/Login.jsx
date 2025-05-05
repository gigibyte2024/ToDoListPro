import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Image100 from './Image100.jpeg';
import Image101 from './Image101.jpeg';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/main');
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${Image101})` }}
    >
      <div className="login-container">
        {/* Left side image */}
        <div className="left-image">
          <img src={Image100} alt="Login Illustration" />
        </div>

        {/* Right side form */}
        <div className="login-form-box">
          <h2>Login Page</h2>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p>
            Don’t have an account? <span className="signup">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
