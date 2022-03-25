import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
  return (
    <div>
      <NavBar />
      <Header />
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-left">
              <h1>HISTORIA</h1>
              <p>
                El nombre Malafama surge a raíz del logo, el charrúa. Es un
                reconocimiento hacia los indígenas que lucharon en la creación
                de esta patria y luego fueron aniquilados por su supuesta “mala
                fama”. El logo parte de un retrato del cacique charrúa Tabaré,
                un poema escrito por nuestro tatarabuelo, Don Juan Zorrilla de
                San Martín. Esta cervecería formada por cuatro hermanos le hace
                honor a todo lo que es Uruguay: su bandera, su gran historia y
                sus costumbres. En 2016 arrancamos a producir cerveza de forma
                nómade, ya que buscábamos tomar cervezas que no encontrábamos en
                el mercado. Para 2018 pudimos armar nuestro propio brewpub, y
                así tener control sobre todos los procesos, ingredientes y
                calidad. Consideramos que somos una cervecería experimental,
                estamos en constante búsqueda de nuevos ingredientes y técnicas
                para hacer cervezas distintas. Nos apasionan la maduración en
                madera, los ingredientes exóticos y, ni que hablar, poder
                compartirla con amigos. Todas nuestras cervezas están vivas, sin
                filtrar, sin clarificantes y sin pasteurizar.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
