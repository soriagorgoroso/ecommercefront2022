import React from "react";
import "./AboutUs.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Nav } from "react-bootstrap";
function AboutUs() {
  return (
    <>
      <NavBar />
      <header className="mb-5">
        <img
          className="img-fluid w-100"
          src="https://cervezamalafama.com/files/nosotros1.jpg"
          alt="Nosotros"
        />
      </header>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-left">
              <h1 className="mb-5">HISTORIA</h1>
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
        <Row className="mt-5 d-flex justify-content-between ">
          <Col className="border  border-3 p-0 contenedor m-3  pe-1">
            <div>
              <img
                src={`./img/facheros/DSC00375.jpg`}
                alt="SSoria"
                className="photoAboutUs mx-auto object-fit"
              />

              <div>
                <ul>
                  <h3 className="text-center">Sebastian Soria</h3>

                  <li>
                    <Nav.Link
                      href="https://www.linkedin.com/in/soriagorgoroso/"
                      to
                      className="text-decoration-none mx-1 "
                    >
                      <img
                        src={"./img/icon/linkedin.png"}
                        alt=""
                        className="iconAboutUs"
                      />
                      <span className=" ps-2 redesAboutUs">
                        {" "}
                        /soriagorgoroso
                      </span>
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="text-decoration-none mx-1 ">
                      <img
                        src={"./img/icon/github.png"}
                        alt="GitHub"
                        className="iconAboutUs"
                        href="https://github.com/soriagorgoroso"
                      />
                      <span className="ps-2 redesAboutUs">
                        {" "}
                        /soriagorgoroso
                      </span>
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className=" text-decoration-none mx-1 ">
                      <img
                        src={"./img/icon/gmail(2).png"}
                        alt=""
                        className="iconAboutUs"
                      />
                      <span className="ps-2 redesAboutUs">
                        soriagorgoroso@gmail.com
                      </span>
                    </Nav.Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-end border  border-3 p-0 contenedor m-3  pe-1">
            <div>
              <img
                src={`./img/facheros/DSC00609.jpg`}
                alt="SSoria"
                className="photoAboutUs mx-auto object-fit"
              />

              <div>
                <ul>
                  <h3 className="text-center">Fernando Marco</h3>

                  <li className="">
                    <Nav.Link
                      href="https://www.linkedin.com/in/f-n-marco/"
                      to
                      className="text-decoration-none mx-1 "
                    >
                      <img
                        src={"./img/icon/linkedin.png"}
                        alt=""
                        className="iconAboutUs"
                      />
                      <span className=" ps-2 redesAboutUs"> /f-n-marco</span>
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="text-decoration-none mx-1 ">
                      <img
                        src={"./img/icon/github.png"}
                        alt="GitHub"
                        className="iconAboutUs"
                        href="https://github.com/fnma88"
                      />
                      <span className="ps-2 redesAboutUs"> /fnma88</span>
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className=" text-decoration-none mx-1 ">
                      <img
                        src={"./img/icon/gmail(2).png"}
                        alt=""
                        className="iconAboutUs"
                      />
                      <span className="ps-2 redesAboutUs">
                        fn.marcoarias@gmail.com
                      </span>
                    </Nav.Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-end border  border-3 p-0 contenedor m-3  pe-1">
            <div>
              <img
                src={`./img/facheros/DSC00375.jpg`}
                alt="SSoria"
                className="photoAboutUs mx-auto object-fit "
              />

              <div>
                <ul>
                  <h3 className="text-center">Sebastian Soria</h3>

                  <li>
                    <Nav.Link
                      href="https://www.linkedin.com/in/soriagorgoroso/"
                      to
                      className="text-decoration-none mx-1 "
                    >
                      <img
                        src={"./img/icon/linkedin.png"}
                        alt=""
                        className="iconAboutUs"
                      />
                      <span className=" ps-2 redesAboutUs">
                        {" "}
                        /soriagorgoroso
                      </span>
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="text-decoration-none mx-1 ">
                      <img
                        src={"./img/icon/github.png"}
                        alt="GitHub"
                        className="iconAboutUs"
                        href="https://github.com/soriagorgoroso"
                      />
                      <span className="ps-2 redesAboutUs">
                        {" "}
                        /soriagorgoroso
                      </span>
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className=" text-decoration-none mx-1 ">
                      <img
                        src={"./img/icon/gmail(2).png"}
                        alt=""
                        className="iconAboutUs"
                      />
                      <span className="ps-2 redesAboutUs">
                        soriagorgoroso@gmail.com
                      </span>
                    </Nav.Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;
