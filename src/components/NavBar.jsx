import React from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import "./NavBar.css";
import "./UserForm.css";
import { useState } from "react";

import "../pages/Login.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import actions from "../redux/userActions";
import Register from "./Register";
import SignIn from "./SignIn";
function NavBar() {
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
              <Offcanvas.Title id="offcanvasNavbarLabel "></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="navContainer">
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Nav.Link className="linkOffcanvas mx-1 " href="#pricing">
                  CARRITO (0)
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
                <div className="linkOffcanvas mx-1">
                  <SignIn />
                </div>
                <div className="linkOffcanvas mx-1">
                  <Register />
                </div>
              </Nav>
            </Offcanvas.Body>{" "}
          </Navbar.Offcanvas>
          <Navbar.Brand href="/">
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
          <Register className="linkMenu" />
          <SignIn className="linkMenu" />
          <Nav.Link className="carrito mx-1 " href="#pricing">
            CARRITO (0)
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
