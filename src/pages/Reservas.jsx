import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Reservas.css";
function Reservas() {
  return (
    <>
      <NavBar />
      <Container className="containerReservas">
        <Row className="m-4">
          <h1>Reservas</h1>

          <p>Contacto mail: hola@cervezamalafama.com</p>
        </Row>
        <Row className="m-4 ">
          <Col>
            <div className="datosReservas">
              <Nav.Link
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
            <div className="datosReservas">
              <Nav.Link
                className="to-cart-btn px-3 "
                variant="outline-dark rounded-0"
                type="submit"
                href="https://malafama.meitre.com/"
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
      <Footer />
    </>
  );
}

export default Reservas;
