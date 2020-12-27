import React from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

  

function App() {
  function handleSubmit() {

  }

  return (
    <div className="container">
      <img src={logo} alt="AirCNC"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu email principal" 
          />
          <button className="btn" type="submit">Entrar</button>
        </form>

      </div>
    </div>
  );
}

export default App;
