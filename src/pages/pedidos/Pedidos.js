import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pedidos.css';

function Pedidos() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <>
    <div>
          <button className="botao-sair">Sair</button>
          <div className="pesquisar">
          <input type="text" className="campo-pesquisa" placeholder="Pesquisar" />
          </div>
          <img src= "public/logofrango.png" alt="Logotipo" className="logotipo" />

      <div className="pedidos-container">
        {/* Categorias */}
        <nav className="categorias">
          <button className="categoria ativa">Frango</button>
          <button className="categoria">Comida</button>
          <button className="categoria">Açaí</button>
          <button className="categoria">Refrigerante</button>
        </nav>

        {/* Itens Listados */}
        <main className="lista-itens">
          <div className="item">
            <input type="radio" name="produto" id="produto1" />
            <label htmlFor="produto1" className="item-label">
              <span>Frango Assado inteiro</span>
              <span className="preco">R$41,00</span>
            </label>
          </div>
          <div className="item">
            <input type="radio" name="produto" id="produto2" />
            <label htmlFor="produto2" className="item-label">
              <span>Frango Assado banda</span>
              <span className="preco">R$20,00</span>
            </label>
          </div>
        </main>
      </div>

      <div>
        {/* Rodapé */}
        <footer className="rodape">
          <button
            className="botao-configuracoes"
            onClick={() => navigate('/configuracoes')} // Navega para a página de Configurações
          >
            Configurações
          </button>
          <button className="botao-carrinho">Carrinho</button>
        </footer>
      </div>
    </div>
    </>
  );
}

export default Pedidos;
