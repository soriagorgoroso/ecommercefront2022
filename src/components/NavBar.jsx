import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Container>
        <Navbar variant="light" fixed="top">
          <img
            src="/img/logos/facebook_cover_photo_1.png"
            alt="LogoHackBier"
            className="navBarImg"
          />
          <Nav className="me-auto headerOptions">
            <Nav.Link className="linknavBar mx-4" href="#home">
              CERVEZAS
            </Nav.Link>
            <Nav.Link className="linknavBar mx-4" href="#features">
              LOCALES
            </Nav.Link>
            <Nav.Link className="linknavBar mx-4" href="#pricing">
              NOSOTROS
            </Nav.Link>
            <Nav.Link className="linknavBar mx-4" href="#pricing">
              RESERVAS
            </Nav.Link>
            <div className="containerRight">
              <Nav.Link className="linknavBarRight ms-5 mx-1" href="#pricing">
                CARRITO (0)
              </Nav.Link>
            </div>
            <div>
              {" "}
              <Nav.Link className="linknavBarRight mx-1" href="#pricing">
                UNITE | INICIA SESION
              </Nav.Link>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}

export default NavBar;
