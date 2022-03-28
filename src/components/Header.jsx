import React from "react";
import { Carousel } from "react-bootstrap";
import "./Header.css";

// {<div className="header">
//   <img
//     className="img-fluid w-100 header"
//     src="/img/local/imagenDelLocal.png"
//     alt="imagen del local"
//   />
// </div>}

function Header() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="w-100 img-fluid"
          src="/img/local/imagenDelLocal.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 img-fluid"
          src="/img/local/imagenDelLocal2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 img-fluid"
          src="/img/local/imagenDelLocal3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
