import React from "react";
import "./Footer.css";
//import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="mt-auto">
      <div className="container">
        <footer className="py-3 border-top border-bottom footer">
          {/* <div className="d-flex justify-items-center flex-wrap">
            <div className="col-md-4">
              <img
                alt="logo"
                className="w-50"
                src="/img/logos/logo-nosotros.png"
              ></img>
            </div>
            <div className="col-md-4">
              <ul className="footer-list">
                <p className="fw-bold mb-2">Locales</p>
                <li>Maldonado 1111</li>
                <li>Gorlero 123</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="footer-list">
                <p className="fw-bold mb-2">Redes sociales</p>
                <li>
                  <a href="https://www.facebook.com/cerveceriamalafama/">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/cerveceria_malafama/?hl=en">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.tripadvisor.com/Restaurant_Review-g294323-d14976397-Reviews-Cerveceria_Malafama-Montevideo_Montevideo_Department.html">
                    Tripadvisor
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="mt-2 text-center">
            <span className="small-text">@Hack Academy Students 2022</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
