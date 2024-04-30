import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você faria a verificação das credenciais
    navigate('/home');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1><b><u>Login</u></b></h1>
        <label>
          E-mail:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
