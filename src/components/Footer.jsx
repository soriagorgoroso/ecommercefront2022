import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className=" py-3 my-4 border-top border-bottom">
        <div className="d-flex justify-items-center flex-wrap">
          <div className="col-md-4">
            <img className="w-50" src="/img/logos/logo-nosotros.png"></img>
          </div>
          <div className="col-md-4">
            <ul className="footer-list">
              <p className="fw-bold mb-2">Locales</p>
              <li>Maldonado 1111 esquina Jackson</li>
              <li>Gorlero 123 esquina No sé</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="footer-list">
              <p className="fw-bold mb-2">Redes sociales</p>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">GitHub</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
              <li>
                <a href="">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-2 text-center">
          <span className="small-text">@Hack Academy 2022</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
