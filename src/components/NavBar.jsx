import React from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import "./NavBar.css";
import "./UserForm.css";
import { useSelector } from "react-redux";
import RegisterNav from "./RegisterNavBar";
import SignInNav from "./SignInNavBar";
import RegisterNavBarIzq from "./RegisterNavBarIzq";
import SignInNavBarIzq from "./SignInNavBarIzq";

function NavBar() {
  const user = useSelector((state) => state.user);

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
            <Offcanvas.Header closeButton className="navContainer">
              <div className="p-0 d-flex justify-content-center modal-body">
                <div>
                  <div className="containerLogo">
                    <img
                      src="/img/logos/logosinfondo.png"
                      alt="LogoHackBier"
                      className="navBarImg"
                    />
                  </div>
                </div>
              </div>

              <Offcanvas.Title id="offcanvasNavbarLabel "></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="navContainer">
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Nav.Link className="linkOffcanvas  mx-1 " href="/cart">
                  CARRITO <span className="badge bg-secondary">4</span>
                </Nav.Link>
                <Nav.Link className="linkOffcanvas  mx-1 " href="/">
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
                {!user ? (
                  <div className="linkOffcanvas mx-1">
                    <SignInNavBarIzq className="" />
                    <RegisterNavBarIzq />
                  </div>
                ) : (
                  <Nav.Link
                    className="linkOffcanvas mx-1 "
                    href={`/mi_perfil/${user.username}`}
                  >
                    MI PERFIL
                  </Nav.Link>
                )}
                <div className="linkOffcanvas mx-1"></div>:
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="/">
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
          {!user ? (
            <div>
              <RegisterNav className="linkMenu" />
              <SignInNav className="linkMenu" />
            </div>
          ) : (
            <Nav.Link
              className=" mx-2 linkMenu"
              href={`/mi_perfil/${user.username}`}
            >
              MI PERFIL
            </Nav.Link>
          )}
          <Nav.Link className="carrito mx-1 " href="/cart">
            CARRITO (0)
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
