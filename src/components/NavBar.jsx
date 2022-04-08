import React from "react";
import { Navbar, Container, Nav, Offcanvas, Button } from "react-bootstrap";
import "./NavBar.css";
import "./UserForm.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import actions from "../redux/userActions";
import axios from "axios";
import RegisterNav from "./RegisterNavBar";
import SignInNav from "./SignInNavBar";
import RegisterNavBarIzq from "./RegisterNavBarIzq";
import SignInNavBarIzq from "./SignInNavBarIzq";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

function NavBar() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutToast = () =>
    toast.info("Cerraste sesión", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

  const handleLogout = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios({
        url: process.env.REACT_APP_API_URL + `/users/logout`,
        method: "POST",
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(response);
      navigate("/");
      dispatch(actions.logout());
      logoutToast();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Container fluid className="navBarContiainer"> */}
      <ToastContainer />
      <Navbar expand={false} className="navContainer sticky-top shadow-lg">
        {/* <Container className="p-0"> */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="ButtonMenu" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header
            closeButton
            className="navContainer justify-content-end align-items-start"
          ></Offcanvas.Header>
          <div className="p-0 d-flex justify-content-center modal-body  bg-hack-grey">
            <img
              src="img/logos/logosinfondo2.png"
              alt="LogoHackBier"
              className="navBarImg"
            />
          </div>
          {/* <Nav.Link className=" ms-1 linkMenu" href="/">
            CERVEZAS
          </Nav.Link>
          <Nav.Link className=" mx-2 linkMenu" href="/locales">
            <Nav.Link className=" mx-2 linkMenu" href="/nosotros">
              NOSOTROS
            </Nav.Link>
            LOCALES
          </Nav.Link>
          <Nav.Link className=" mx-2 linkMenu" href="/reservas">
            RESERVAS
          </Nav.Link> */}
          {/* <div className="d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "#ECEBEA",
                  color: "black",
                  border: "none",
                }}
              >
                <i className="fa-solid fa-user text-black"></i>
              </Dropdown.Toggle>
            </Dropdown>
            <Offcanvas.Title id="offcanvasNavbarLabel "></Offcanvas.Title>
          </div> */}
          <Offcanvas.Body className="navContainer p-0">
            <Nav className="justify-content-end  flex-grow-1">
              <a className="side-menu-btn d-grid" href="/">
                <div className="border border-top-secondary py-4 px-2 fs-5">
                  CERVEZAS
                </div>
              </a>
              <a className=" side-menu-btn d-grid" href="/proyecto">
                <div className="border border-top-secondary py-4 px-2 fs-5">
                  SOBRE ESTE PROYECTO
                </div>
              </a>
              <a className="side-menu-btn d-grid" href="/nosotros">
                <div className="border border-top-secondary py-4 px-2 fs-5">
                  EMPRESA
                </div>
              </a>
              <a className="side-menu-btn d-grid" href="/locales">
                <div className="border border-top-secondary py-4 px-2 fs-5">
                  LOCALES
                </div>
              </a>
              <a className="side-menu-btn d-grid" href="/reservas">
                <div className="border border-top-secondary py-4 px-2 fs-5">
                  RESERVAS
                </div>
              </a>
              <a className="side-menu-btn d-grid" href="/carrito">
                <div className="border border-top-secondary py-4 px-2 fs-5">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="badge text-dark ms-1">({cart.length})</span>
                </div>
              </a>
              <div className="linkOffcanvas mx-1"></div>:
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="/" className="ps-5">
          <img
            src="/img/logos/logosinfondo2v01.png"
            alt="LogoHackBier"
            className="navBarImg"
          />
        </Navbar.Brand>

        <Nav.Link className=" mx-2 linkMenu" href="/locales">
          LOCALES
        </Nav.Link>
        <Nav.Link className=" mx-2 linkMenu" href="/nosotros">
          NOSOTROS
        </Nav.Link>
        <Nav.Link className=" mx-2 linkMenu" href="/reservas">
          RESERVAS
        </Nav.Link>
        <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "#ECEBEA",
                color: "black",
                border: "none",
              }}
            >
              <i className="fa-solid fa-user text-black"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {!user ? (
                <>
                  <div className="linkMenuDropDown">
                    <SignInNav className="linkMenuDropDown" />
                    <RegisterNav className="linkMenuDropDown" />
                  </div>
                </>
              ) : (
                <>
                  <Dropdown.Item
                    className="buttonNavDos mx-1"
                    href={`/mi_perfil/${user.username}`}
                  >
                    MI PERFIL
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="buttonNavDos mx-1"
                    onClick={handleLogout}
                  >
                    CERRAR SESIÓN
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link className="carrito mx-1 p-1 cartHover" href="/carrito">
            <i className="fa-solid fa-cart-shopping"></i> ({cart.length})
          </Nav.Link>
        </div>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default NavBar;
