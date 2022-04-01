import React from "react";
import "./AboutUs.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import NavBar from "../components/NavBar";

function ThisProject() {
  return (
    <Container>
      <NavBar />
      <Row>
        <img
          className="flex-image"
          src="./img/logos/facebook_cover_photo_1.png"
          alt="logo"
        />
      </Row>
      <h1 className="mt-5">SOBRE ESTE PROYECTO</h1>
      <Row className="mt-3 d-flex justify-content-between ">
        <h2 className="mt-5">Los desarrolladores</h2>
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
                    <span className=" ps-2 redesAboutUs"> /soriagorgoroso</span>
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
                    <span className="ps-2 redesAboutUs"> /soriagorgoroso</span>
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
                    <span className=" ps-2 redesAboutUs">/soriagorgoroso</span>
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
                    <span className="ps-2 redesAboutUs"> /soriagorgoroso</span>
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
      <Row className="mt-5">
        <h2 className="mt-5">El proyecto Hack Bier</h2>
        <p className="fs-3 mt-3">
          Este proyecto nace como el trabajo final del bootcamp de desarrollo
          web full stack que realizamos entre enero y abril de 2022. El mismo
          consistía en realizar un sitio de e-commerce, con su sitio de
          administrador, y su base de datos en un periodo de tres semanas.
        </p>
        <p className="fs-3 mt-3">
          Para poder cumplir con la consigna en el tiempo disponible utilizamos
          la metodología SCRUM, dividiendo nuestro trabajo en tres Sprints de
          una semana y realizando Daily meetings, manteniendo una lista de
          tareas actualizada mediante Trello.
        </p>
        <p className="fs-3 mt-3">
          Con una sólida base de HTML, CSS, y JavaScript, comenzamos a aplicar
          las tecnologías instruidas en el bootcamp, Node.js, ReactJs, MongoDB,
          Redux, Vercel, y Supabace entre otros para darle forma a nuestro
          sitio.
        </p>
        <p className="fs-3 mt-3">
          Nuestro trabajo está basado estéticamente en el sitio web de la
          cervecería Mala Fama y sus productos, ya que es un producto que a los
          tres nos apasiona y tiene una posibilidad de desarrollo muy grande.
        </p>
        <p className="fs-3 mt-3 mb-5"></p>
      </Row>
    </Container>
  );
}

export default ThisProject;
