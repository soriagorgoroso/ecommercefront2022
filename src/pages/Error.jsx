import React from "react";
import { Container } from "react-bootstrap";

import NavBar from "../components/NavBar";

function Error() {
  return (
    <>
      <NavBar />
      <Container className="text-center" style={{ marginBottom: "70px" }}>
        <h1 className="mt-5">Oops!</h1>
        <h2>Lo sentimos esa pagina no existe.</h2>
        <a className="btn btn-white border border-warning mt-3" href="/">
          Regresa a nuestra home
        </a>
        <br />
        <img
          className="img-fluid"
          src={`${process.env.REACT_APP_IMG_URL}/errorRemovebg.png`}
          alt="error"
        />
      </Container>
    </>
  );
}

export default Error;
