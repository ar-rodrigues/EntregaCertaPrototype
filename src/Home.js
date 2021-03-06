import React from "react";

function Home() {
  const imageBgTwo =
    "/161211-flexibilidade-logistica-entenda-o-que-e-e-saiba-como-implementar.jpg";
  return (
    <header
      id="home"
      className="header"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.35)), url(${imageBgTwo})`
      }}
    >
      <div className="header-box">
        <h3>Entrega Certa</h3>
        <h4>Mais tranquilidade no recebimento das suas encomendas</h4>
      </div>
    </header>
  );
}

export default Home;
