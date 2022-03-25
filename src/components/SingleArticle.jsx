import React from "react";
import ButtonToCart from "./ButtonToCart";
import { Row, Col } from "react-bootstrap";
import "./singleArticle.css";

function SingleArticle({ article }) {
  return (
    <Row xs={1} md={2} className="justify-content-center space g-5">
      <Col className="pt-4">
        <img
          src="https://cervezamalafama.com/files/tmp/compressed/normal/qg8j5bt64domn95utrs0.jpg"
          alt="Cerveza IPA"
          className="article-image float-end shadow-sm"
        />
      </Col>
      <Col className="pt-4 ps-4">
        <div className="d-flex flex-column justify-content-center">
          <div className="text-left article-info-container pt-2">
            <div className="product-name-container">
              <h1 className="product-name fw-bold">FLOR DE LIO</h1>
            </div>
            <h1 className="fw-bold">$120</h1>
            <span className="fs-4 fw-bold">IPA | 500cc | 7.8%</span>
            <ButtonToCart />
            <hr className="separator mt-4"></hr>
            <span className="fs-6">SOBRE LA CERVEZA</span>
            <p className="fs-6 pt-2">
              Literalmente un flor de lio, para esta neipa usamos 6 lupulos
              diferentes que combinan para hacer una cerveza muy tomable,
              ligera, y muy citrica. Los lupulos que elegimos fueron: Citra,
              Mosaic, Columbus, El Dorado, Sabro y Idaho 7.
            </p>

            <hr className="separator"></hr>
            <span>Prohibida su venta a menores de 18 años</span>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SingleArticle;
