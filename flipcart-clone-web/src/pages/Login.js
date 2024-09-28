
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import login from "./image/login.png";

function Login({ onLogin, navigateToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      if (res.status === 200) {
        onLogin(res.data);
        navigate('/'); // Redirect to the home page after successful login
      }
    } catch (err) {
      setError('Login failed');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
        <img src={login} alt='login' />
      </div>
      <div className="login-right">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>

            </span>
          </div>
          <div className="password-field">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
            </span>
          </div>
          {error && <p className="error-message">{error}</p>}
          <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
          <button type="submit" className="login-button">Request Login</button>
          <p className='para'>
            New to Flipcart? <span onClick={navigateToSignup}>Create an account</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
