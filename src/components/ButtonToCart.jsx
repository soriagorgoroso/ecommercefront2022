import React from "react";
import { Col, Row, Form, Button, FormControl } from "react-bootstrap";
import "./singleArticle.css";
import { useDispatch } from "react-redux";

function ButtonToCart() {
  const dispatch = useDispatch();

  return (
    <div className="to-cart-form my-4">
      <Form method="post" action="">
        <Row>
          <Col>
            <div className="article-qty-container d-flex justify-space-around align-items-center">
              <div className="minus-btn-container float-start">
                <Button className="plus-minus-btn fs-5"> - </Button>
              </div>

              <div className="article-qty">1</div>

              <div className="plus-btn-container float-end">
                <Button className="plus-minus-btn fs-5"> + </Button>
              </div>
            </div>
          </Col>
          <Col>
            <Button
              className="to-cart-btn px-3"
              variant="outline-dark rounded-0"
              type="submit"
              value={"Submit"}
            >
              AGREGAR A MI CARRITO
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ButtonToCart;
