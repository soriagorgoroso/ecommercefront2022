import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function PlacedOrder() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8} sm={12}>
          <div className="bg-light mt-4 p-4">
            <h2>Tu orden fue colocada con éxito</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PlacedOrder;
