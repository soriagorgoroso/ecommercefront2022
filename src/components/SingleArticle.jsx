import React from "react";
import ButtonToCart from "./ButtonToCart";
import { Row, Col } from "react-bootstrap";

function SingleArticle({ article }) {
  return (
    <Row xs={1} md={2} className="justify-content-center ">
      <Col className="pe-4 pt-5">
        <img
          src="https://cervezamalafama.com/files/tmp/compressed/normal/qg8j5bt64domn95utrs0.jpg"
          alt="Cerveza IPA"
          className="w-100"
        />
      </Col>
      <Col className="ps-4 pt-5">
        <div className="d-flex flex-column justify-content-center">
          <div className="text-left pt-4">
            <h1>FLOR DE LÍO</h1>
            <h1>$120</h1>
            <span className="fs-2">IPA | 500cc | 7.8%</span>
            <ButtonToCart />
            <hr></hr>
            <span className="fs-6">SOBRE LA CERVEZA</span>
            <p className="fs-6 pt-4">
              Literalmente un flor de lio, para esta neipa usamos 6 lupulos
              diferentes que combinan para hacer una cerveza muy tomable,
              ligera, y muy citrica. Los lupulos que elegimos fueron: Citra,
              Mosaic, Columbus, El Dorado, Sabro y Idaho 7.
            </p>

            <hr></hr>
            <span>Prohibida su venta a menores de 18 años</span>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SingleArticle;
