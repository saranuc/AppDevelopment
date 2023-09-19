import React, { useState } from 'react';
import bac from './logvec.jpg'
import Signup from './signup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'skct' && password === '1234') {
      alert('Login Successful');
      navigate("/home");
    
    } else {
      setError('Invalid username or password');
    }
  };
  return (
    <div>

      
    <div className="container">
      <h2>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            required
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
        <div >
        </div>
      </form>
      </div>
      <div className='wel'>
        <img src={bac} class = "logo" />
      </div>
      <div className='fi'>
      Don't have an account?
      <Link to="/up" type="submit"> Sign Up</Link>
      </div>
      </div>
  
  );
}
