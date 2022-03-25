import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Image,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Container fluid className="navBarContiainer">
        <Navbar variant="light" fixed="top">
          {/* <img
            src="/img/logos/logosinfondo.png"
            alt="LogoHackBier"
            className="navBarImg"
          /> */}
          {/* <Nav className="me-auto headerOptions ">
            <Nav.Link className="linknavBar mx-4 hidelinkMenu" href="#home">
              CERVEZAS
            </Nav.Link>
            <Nav.Link className="linknavBar mx-4 hidelinkMenu" href="#features">
              LOCALES
            </Nav.Link>
            <Nav.Link className="linknavBar mx-4 hidelinkMenu" href="#pricing">
              NOSOTROS
            </Nav.Link>
            <Nav.Link className="linknavBar mx-4 hidelinkMenu" href="#pricing">
              RESERVAS
            </Nav.Link>
            <div className="containerRight">
              <Nav.Link className="linknavBarRight ms-5 mx-1 " href="#pricing">
                CARRITO (0)
              </Nav.Link>
            </div>
            <div>
              {" "}
              <Nav.Link
                className="linknavBarRight mx-1 hidelinkMenu"
                href="#pricing"
              >
                UNITE | INICIA SESION
              </Nav.Link>
            </div>
          </Nav> */}
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="hideButtonMenu"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>

      {/* <Container ">
        <Navbar variant="light" fixed="top">
        

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
      </Container> */}
    </>
  );
}

export default NavBar;
