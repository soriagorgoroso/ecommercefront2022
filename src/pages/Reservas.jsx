import React from "react";
import NavBar from "../components/NavBar";

import { Container, Row, Col, Nav, Card } from "react-bootstrap";
import "./Reservas.css";
function Reservas() {
  return (
    <>
      <NavBar />
      <Container className="">
        <Row className="m-4 containerReservas"></Row>
        <Row className="m-4 pt-2 containerReservas">
          <h1>Reservas</h1>

          <p className="pb-2">Contacto mail: hola@cervezamalafama.com</p>
          <Col>
            <div className="datosReservas p-3">
              <Nav.Link
                href="https://malafama.meitre.com/"
                className="to-cart-btn px-3"
                variant="outline-dark rounded-0"
                type="submit"
                value={"Submit"}
              >
                RESERVA MONTEVIDEO
              </Nav.Link>
              <p>MALAFAMA MONTEVIDEO</p>
              <p>MALDONADO 1970</p>
              <p>+598 97 313 349</p>
              <p>Martes a Sábado: 19:30 a 00:00</p>
            </div>
          </Col>
          <Col>
            <div className="datosReservas p-3">
              <Nav.Link
                className="to-cart-btn px-3 "
                variant="outline-dark rounded-0"
                type="submit"
                href="https://www.instagram.com/malafama_puntadeleste/"
              >
                RESERVA MALDONADO{" "}
              </Nav.Link>
              <p>MALAFAMA PUNTA DEL ESTE</p>
              <p>PEDRAGOSA SIERRA 20100</p>
              <p>+598 95 748 812</p>
              <p> Miércoles a Sábados: 18:30 a 00:00</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Reservas;
