import React, { useState } from "react";

const FiltroData = () => {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  const dias = Array.from({ length: 31 }, (_, i) => i + 1);
  const meses = Array.from({ length: 12 }, (_, i) => i + 1);
  const anos = Array.from({ length: 11 }, (_, i) => 2020 + i);

  const handleFiltrar = () => {
    console.log(`Data selecionada: ${dia}/${mes}/${ano}`);
  };

  return (
    <div>
      <h2>Filtrar Vendas por Data</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <select value={dia} onChange={(e) => setDia(e.target.value)}>
          <option value="">Dia</option>
          {dias.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select value={mes} onChange={(e) => setMes(e.target.value)}>
          <option value="">Mês</option>
          {meses.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select value={ano} onChange={(e) => setAno(e.target.value)}>
          <option value="">Ano</option>
          {anos.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleFiltrar}>Filtrar</button>
    </div>
  );
};

export default FiltroData;
