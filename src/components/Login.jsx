import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Image7 from './Image7.jpg';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have filled the form!');
    navigate('/home');
  };

  return (
    <div className='wrapper'>
      <div className='form-box'>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: "black" }}>Login</h1>

          <div className="input-box">
            <input type='text' placeholder='Username' required style={{ color: 'white' }} />
          </div>

          <div className="input-box">
            <input type='password' placeholder='Password' required style={{ color: 'white' }} />
          </div>

          <div className="remember-forget">
            <label style={{ color: 'black' }}>
              <input type='checkbox' /> Remember Me
            </label>
            <a href='#'>Forgot Password</a>
          </div>

          <button type="submit">LogIn</button>
        </form>
      </div>

      <div className='right'>
        <img src={Image7} alt='Image7' />
      </div>
    </div>
  );
};

export default LoginPage;
