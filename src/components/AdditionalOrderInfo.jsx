import React from "react";
import { Row, Col, Accordion, Form } from "react-bootstrap";
import "../pages/Cart.css";

function AdditionalOrderInfo() {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Datos de envío</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group className="mb-3" controlId="form-name">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="form-adress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="form-city">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="form-country">
                  <Form.Label>País</Form.Label>
                  <Form.Select size="sm">
                    <option>Seleccionar</option>
                    <option>Uruguay</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="form-state">
                  <Form.Label>Provincia/Estado</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="form-zip-code">
                  <Form.Label>Código postal</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="form-phone">
                <Form.Label>Número de teléfono</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Información del pago</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group className="mb-3" controlId="form-card">
                <Form.Label>Número de tarjeta</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="form-card-name">
                <Form.Label>Nombre (tal como figura en la tarjeta)</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="form-expiration-date">
                  <Form.Label>Vencimiento</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group as={Col} controlId="form-security-code">
                  <Form.Label>Código de seguridad</Form.Label>
                  <Form.Control type="text" placeholder="xxx" />
                </Form.Group>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default AdditionalOrderInfo;
