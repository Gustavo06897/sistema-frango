import React from "react";
import FiltroData from '../../components/FiltroData'; // Ajuste o caminho conforme necessário

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <FiltroData />
      {/* Aqui entra a tabela de vendas */}
    </div>
  );
};

export default Dashboard;
