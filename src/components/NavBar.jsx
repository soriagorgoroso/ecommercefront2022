import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Image,
  Offcanvas,
  ListGroup,
} from "react-bootstrap";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Container fluid className="navBarContiainer"> */}
      <Navbar expand={false} className="navContainer sticky-top">
        <Container className=" ">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="ButtonMenu"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="linkOffcanvas mx-1 " href="#pricing">
                  CARRITO (0)
                </Nav.Link>
                <Nav.Link className="linkOffcanvas mx-1 " href="/">
                  CERVEZAS
                </Nav.Link>
                <Nav.Link className="linkOffcanvas mx-1 " href="/locales">
                  LOCALES
                </Nav.Link>
                <Nav.Link className="linkOffcanvas mx-1 " href="#pricing">
                  NOSOTROS
                </Nav.Link>
                <Nav.Link className="linkOffcanvas mx-1 " href="#pricing">
                  RESERVAS
                </Nav.Link>
                <div className="">
                  <Nav.Link className="linkOffcanvas mx-1 " href="#pricing">
                    UNITE | INICIA SESION
                  </Nav.Link>
                </div>
              </Nav>
            </Offcanvas.Body>{" "}
          </Navbar.Offcanvas>
          <Navbar.Brand href="#">
            {" "}
            <div className="containerLogo">
              <img
                src="/img/logos/logosinfondo.png"
                alt="LogoHackBier"
                className="navBarImg"
              />
            </div>
          </Navbar.Brand>{" "}
          <Nav.Link className=" ms-1 linkMenu" href="/">
            CERVEZAS
          </Nav.Link>
          <Nav.Link className=" mx-2 linkMenu" href="/locales">
            LOCALES
          </Nav.Link>
          <Nav.Link className=" mx-2 linkMenu" href="#pricing">
            NOSOTROS
          </Nav.Link>
          <Nav.Link className=" mx-2 linkMenu" href="#pricing">
            RESERVAS
          </Nav.Link>
          <Nav.Link className="linkMenu mx-1 " href="#pricing">
            UNITE
          </Nav.Link>
          <Nav.Link className="linkMenu mx-1 " href="#pricing">
            INICIA SESION
          </Nav.Link>
          <Nav.Link className="carrito mx-1 " href="#pricing">
            CARRITO (0)
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
