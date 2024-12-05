import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Pedidos from './pages/pedidos/Pedidos';
import Configuracoes from './pages/configuracoes/Configuracoes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/pedidos' element={<Pedidos />} />
        <Route path='/configuracoes' element={<Configuracoes />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


