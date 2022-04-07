import React from "react";
import NavBar from "../components/NavBar";

import { Container } from "react-bootstrap";

function Stores() {
  return (
    <>
      <NavBar />
      <header>
        <img
          className="img-fluid w-100"
          src="/img/local/locales.jpg"
          alt="imagen del local"
        />
      </header>
      <Container>
        <h1 className="mt-5">NUESTROS LOCALES</h1>
        <h2 className="mb-5">MONTEVIDEO / PUNTA DEL ESTE</h2>
        <p className="fs-3 mb-5">
          Nuestros locales ubicados en los centros de Montevideo y Punta del
          este disponen de 10+ canillas de nuestra cerveza que va rotando
          semanalmente, variedes de birras en lata y botellas. Nuestra cocina a
          fuego de leña esta enfocada en comida autóctona uruguaya con toques
          modernos de europa y asiáticos.
        </p>
        <p className="fs-3 mb-5">
          También contamos con agua mineral y natural de la Vertiente Del Angel,
          una barra completa con cocktails c/ y sin alcohol, y la selección de
          nuestros vinos preferidos disponibles de tirada, botella y algunos por
          copa.
        </p>
        <h3 className="fs-1">MONTEVIDEO</h3>
        <h4>
          MALDONADO 1970 /
          <a href="https://malafama.meitre.com/"> Reservar mesa →</a>
        </h4>
        <img
          className="img-fluid w-100 mt-2"
          src="/img/local/montevideo.jpg"
          alt="local montevideo"
        />
        <h3 className="fs-1 mt-5">PUNTA DEL ESTE</h3>
        <h4>
          PEDRAGOSA SIERRA 20100 /
          <a href="https://www.instagram.com/malafama_puntadeleste/">
            Reservar mesa →
          </a>
        </h4>
        <img
          className="img-fluid w-100 mb-5"
          src="/img/local/punta.jpg"
          alt="local montevideo"
        />
      </Container>
    </>
  );
}

export default Stores;
