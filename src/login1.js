// LoginPage.js
import React, { useState } from 'react';
import "./login.css";
const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    if (username === 'sabarish' && password === '16797') {
      onLogin();
    } 
    else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='containers'>
    <form className='form'>
    <div>
      
      <h1 className="h1">Login</h1>
      <label className='label'>Username</label>
     
      <input
        type="text"
        placeholder="Username"
        required
        value={username}
        className='input'
        onChange={(e) => setUsername(e.target.value)}
      />
       <label className='label'>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        className='input'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='button' onClick={handleLogin}>Login</button>
      <a className='a'>Forget Password?</a>
      
    </div>
    </form>
    </div>
  );
};

export default LoginPage;
