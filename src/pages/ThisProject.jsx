import React from "react";
import "./AboutUs.css";
import { Container, Row, Col, Nav, Card, CardGroup } from "react-bootstrap";
import NavBar from "../components/NavBar";

function ThisProject() {
  return (
    <>
      <NavBar />
      <Container>
        <h1 className="mt-5">SOBRE ESTE PROYECTO</h1>

        <Row className="mt-5">
          <CardGroup>
            <Col sm={12} md={12} lg={4}>
              <Card className="mx-3 mb-2 rounded shadow cardAboutUs  ">
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold pb-3">Desafíos</Card.Title>
                  <Card.Text className="fs-4">
                    Tuvimos 3 semanas para realizar el e-commerce por lo que el
                    tiempo fue un factor determinante, en la cual la forma en la
                    que nos organizamos marco la diferencia a la hora de
                    enfrentarnos a diversas situaciones.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <Card className="mx-3 mb-2 rounded shadow cardAboutUs ">
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold pb-3">Organización</Card.Title>
                  <Card.Text className="fs-4">
                    Decidimos utilizar Trello para organizarnos y dividir
                    tareas. La metodlogia adoptada para el desarrollo del
                    proyecto fue Scrum, donde se intento llevar el proyecto
                    sobre los estándares de MVP, presentando una demo al final
                    de cada semana.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <Card className="mx-3 mb-2 rounded shadow cardAboutUs">
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold pb-3">Tecnologías</Card.Title>
                  <Card.Text className="fs-4">
                    <p>
                      <i className="m-2 fa-brands fa-react"></i> ReactJs
                    </p>
                    <p>
                      <i className="m-2 fa-brands fa-node-js"></i> NodeJs
                    </p>
                    <p>
                      <i className="m-2 fa-brands fa-mdb"></i>MongoDB
                    </p>
                    <p>
                      <i className="m-2 fa-brands fa-html5"></i>HTML
                    </p>
                    <p>
                      <i className="m-2 fa-brands fa-css3-alt"></i>CSS
                    </p>
                    <p>
                      <i className="m-2 fa-solid fa-bolt"></i>Supabase
                    </p>
                    <p>
                      <i className="m-2 fa-solid fa-atom"></i>Redux
                    </p>
                    <p>
                      <svg
                        className="m-2"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 22.525H0l12-21.05 12 21.05z"></path>
                      </svg>
                      Vercel
                    </p>
                    <p>
                      <i className="m-2 fa-brands fa-bootstrap"></i>Bootstrap
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </CardGroup>
        </Row>
        <Row className="mt-3 d-flex justify-content-between ">
          <h2 className="mt-5">Los desarrolladores</h2>
          <Col
            className="border  border-1 p-0 contenedor  pe-1 "
            lg={4}
            md={12}
          >
            <div>
              <img
                src={`./img/facheros/FotoCV.jpeg`}
                alt="GBarg"
                className="photoAboutUs mx-auto object-fit"
              />

              <div>
                <ul>
                  <h3 className="text-center">Gonzalo Barg</h3>

                  <li>
                    <Nav.Link
                      href="https://www.linkedin.com/in/gonzalo-barg/"
                      to
                      className="text-decoration-none mx-1 "
                    >
                      <img
                        src={"./img/icon/linkedin.png"}
                        alt=""
                        className="iconAboutUs"
                      />
                      <span className=" ps-2 redesAboutUs"> /gonzalo-barg</span>
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      className="text-decoration-none mx-1 "
                      href="https://github.com/gonzabarg/"
                    >
                      <img
                        src={"./img/icon/github.png"}
                        alt="GitHub"
                        className="iconAboutUs"
                      />
                      <span className="ps-2 redesAboutUs"> /gonzabarg</span>
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
                        gonza.barg.999@gmail.com
                      </span>
                    </Nav.Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            className=" border  border-1 p-0 contenedor  pe-1 "
            lg={4}
            md={12}
          >
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
                    <Nav.Link
                      className="text-decoration-none mx-1 
                  "
                      href="https://github.com/fnma88"
                    >
                      <img
                        src={"./img/icon/github.png"}
                        alt="GitHub"
                        className="iconAboutUs"
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
          <Col
            className=" border  border-1 p-0 contenedor  pe-1 "
            lg={4}
            md={12}
          >
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
                        /soriagorgoroso
                      </span>
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      className="text-decoration-none mx-1 "
                      href="https://github.com/soriagorgoroso"
                    >
                      <img
                        src={"./img/icon/github.png"}
                        alt="GitHub"
                        className="iconAboutUs"
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
        <Row className="mt-5">
          <h2 className="mt-5">El proyecto Hack Bier</h2>
          <p className="fs-5 mt-3 ">
            Este proyecto nace como el trabajo final del bootcamp de desarrollo
            web full stack que realizamos entre enero y abril de 2022, en este
            curso dedicamos más de 600 horas prácticas de desarrollo tanto en
            front-end como en back-end. Este proyecto nace como el trabajo final
            del bootcamp de desarrollo web full stack que realizamos entre enero
            y abril de 2022, en este curso dedicamos más de 600 horas prácticas
            de desarrollo tanto en front-end como en back-end.
          </p>
          <p className="fs-5 mt-3 ">
            El mismo consistía en realizar un sitio de e-commerce, con su sitio
            de administrador, y su base de datos en un periodo de tres semanas,
            en el cual invertimos 200 horas de trabajo cada uno.
          </p>
          <p className="fs-5 mt-3 ">
            Para poder cumplir con la consigna en el tiempo disponible
            utilizamos la metodología Scrum, dividiendo nuestro trabajo en tres
            sprints de una semana, realizando daily meetings, y una demo al
            final de cada sprint; manteniendo una lista de tareas actualizada
            mediante Trello y nuestro código en GitHub.
          </p>
          <p className="fs-5 mt-3 ">
            Para el desarrollo del front-end utilizamos HTML, CSS, JavaScript,
            Bootstrap, y ReactJs. Para el back-end Node.js, y MongoDB para
            nuestra base de datos. Al momento de realizar el deployment
            utilizamos Supabase, Vercel, y MongoDB Atlas.
          </p>
          <p className="fs-5 mt-3 ">
            Nuestro trabajo está inspirado en el sitio web de la cervecería Mala
            Fama y sus productos, ya que es un tema que a los tres nos apasiona
            y tiene gran posibilidad de desarrollo.
          </p>
        </Row>
        <Row className="mb-5">
          <h2 className="my-5">Funcionamiento</h2>
          <Col>
            <h3 className="mb-3">Información para ingresar al sitio</h3>
            <a className="mt-5" href="/">
              <h5>https://front-hackbier.vercel.app/</h5>
            </a>
            <p>email: user@hackbier.com</p>
            <p>contraseña: user</p>
          </Col>
          <Col>
            <h3 className="mb-3">Información para ingresar al administrador</h3>
            <a className="mt-5" href="/">
              <h5>https://frontadmin-hackbier.vercel.app/</h5>
            </a>
            <p>email: admin@hackbier.com</p>
            <p>contraseña: admin</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ThisProject;
