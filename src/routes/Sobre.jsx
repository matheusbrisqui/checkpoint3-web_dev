import React from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link
import './sobre.css';

function Sobre() {
  return (
    <section className="hero">
      <img src="src/assets/imgsobre.jpg" alt="erro" />
      <h1>Sobre nós</h1>
      <div className="hero-content">
        <h2>TEMOS 3 UNIDADES!</h2>
        <p>
          A primeira Tuko Sushi foi inaugurada em 2006, por 5 donos Guilherme Rezende, Guilherme Dal Posolo, Gustavo Brisqui, Matheus Brisqui e Ryan Perez. A unidade na av.Paulista
          foi sucesso absoluto e permitiu que o restaurante se espalhasse por
          toda a cidade de São Paulo. A qualidade dos pratos oferecidos, aliada
          ao preço justo, faz da Tuko Sushi uma referência em restaurante
          oriental. Hoje a rede conta com mais de 26 unidades em diversas
          cidades brasileiras. Quer ficar por dentro da nossa culinaria?
        </p>
        {/* Use o componente Link para criar o link para Produtos.jsx */}
        <Link to="/produtos" className="btn">
          Ver Cardápio
        </Link>
      </div>
      <div className="hero-content2">
        <h2>REFERÊNCIA EM CULINÁRIA JAPONESA</h2>
        <p>
          A culinária japonesa, tão apreciada atualmente, traz a tradição oriental
          aliada à criatividade e ousadia da culinária contemporânea. A Tuko sushi
          faz disso um desafio diário, pois sabe que inovar é tão importante quanto
          preservar o ritual desta fascinante cultura gastronômica. O resultado do
          sucesso pode ser observado e degustado por você.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
