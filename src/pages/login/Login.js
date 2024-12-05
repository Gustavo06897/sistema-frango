// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css'; // Importando o arquivo CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'Fogonabrasa' && password === 'admin123') {
      window.location.href = '/pedidos';
    } else {
      setErrorMessage('Credenciais inválidas');
    }
  };

  return (
    <div className="box-container">
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-container">
            <input
              type="text"
              id="username"
              value={username}
              placeholder='Seu ID'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              placeholder='Sua Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
