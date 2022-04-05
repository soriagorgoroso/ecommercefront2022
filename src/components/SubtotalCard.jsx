import React from "react";
import { Row, Col, Accordion, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import "../pages/Cart.css";

function SubtotalCard({ articlesInCart }) {
  const loggedUser = useSelector((state) => state.user);
  //const [discountCode, setDiscountCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  let subtotal = articlesInCart.reduce(
    (total, article) => total + article.price * article.quantity,
    0
  );

  const iva = subtotal * 0.22;
  let envio = 0;

  const filteredArticles = articlesInCart.map(
    (article) =>
      Object.keys(article).reduce((accumulator, key) => {
        if (key === "name" || key === "price" || key === "quantity") {
          accumulator[key] = article[key];
        }
        return accumulator;
      }, {})
    // {
    //   delete article.image;
    //   delete article.category;
    //   return article;
    // }
  );

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log(filteredArticles);

    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/orders`,

        headers: {
          Authorization: "Bearer " + loggedUser.token,
        },
        data: {
          user: loggedUser.sub,
          articles: filteredArticles,
        },
      });
      console.log(response.data);
    } catch (error) {
      setErrorMessage("Error!");
      console.log(errorMessage);
    }
  };

  return (
    <Col xs={12} lg={6}>
      <div className="bg-light mt-4 p-4">
        <div id="cart--summary">
          <div className="subtotal-container">
            <div className="charge">
              <div className="charge--description">Total Productos</div>
              <div className="charge--amount">US$ {subtotal}</div>
            </div>
            <div className="charge">
              <div className="charge--description">Envio</div>
              <div className="charge--amount">
                US$ {articlesInCart.length >= 1 ? (envio = 10) : envio}
              </div>
            </div>
            <div className="charge pb-0">
              <div className="charge--description">IVA</div>
              <div className="charge--amount">US$ {iva}</div>
            </div>
          </div>
          <div className="chargetotal fw-bold pb-3">
            <div className="chargetotal--description">Total</div>
            <div className="chargetotal--amount">
              <span>US$ {subtotal + envio + iva}</span>
            </div>
          </div>
        </div>
        <div id="cart--controls">
          <div className="promotioncontrols">
            <div className="controlset">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control button button--secondary"
                  id="discount-code"
                  aria-describedby="basic-addon3"
                  // onChange={(event) => {
                  //   setDiscountCode(event.target.value);
                  //   console.log(discountCode);
                  // }}
                />
                <button
                  className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                  id="basic-addon3"
                  // onClick={() => {
                  //   discountCode === "HackBier2022"
                  //     ? setTotal(total * 0.8)
                  //     : console.log(discountCode);
                  // }}
                >
                  Aplicar codigo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Accordion flush>
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

      <div className="bg-light p-4">
        <div className="controlset mt-2">
          <button
            id="confirmBtn"
            className="btn btn-dark text-center rounded-0 fw-bold"
            type="submit"
            onClick={handleSubmit}
          >
            Confirmar compra
          </button>
        </div>
      </div>
    </Col>
  );
}

export default SubtotalCard;
