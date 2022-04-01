import React from "react";
import "./AboutUs.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import NavBar from "../components/NavBar";

function ThisProject() {
  return (
    <>
      <NavBar />
      <Row>
        <img
          className="flex-image"
          src="./img/logos/logosinfondo.png"
          alt="logo"
        />
      </Row>
      <Container>
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
        <Row className="mt-5">
          <h2 className="mt-5">El proyecto Hack Bier</h2>
          <p className="fs-3 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ab
            eligendi ratione nesciunt incidunt placeat totam officia quis
            repellat saepe distinctio accusantium, ea possimus? Perferendis
            aperiam deserunt sit voluptatem suscipit!
          </p>
          <p className="fs-3 mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            impedit libero, tenetur ea natus ex velit, corrupti, laudantium
            assumenda totam ipsum sint illo? Ullam nesciunt ipsa consequuntur.
            Consequuntur, cumque minima?
          </p>
          <p className="fs-3 mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vitae
            maxime numquam iusto in quas, doloribus, officia distinctio nulla
            odio asperiores corporis, ex dolorem reprehenderit perspiciatis?
            Maiores reiciendis quasi porro?
          </p>
          <p className="fs-3 mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ad totam debitis perferendis est, minima beatae cumque incidunt
            harum, ab labore expedita ea corporis asperiores, aliquid nisi unde?
            Recusandae, voluptatibus.
          </p>
          <p className="fs-3 mt-3 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            asperiores esse quod saepe ipsa, ipsam tempore, corrupti harum quos
            voluptate iste odit aspernatur assumenda eos voluptatem incidunt
            blanditiis cupiditate repellendus!
          </p>
        </Row>
        <Row>
          <h2 className="mt-5">El proyecto Hack Bier</h2>
        </Row>
      </Container>
    </>
  );
}

export default ThisProject;
