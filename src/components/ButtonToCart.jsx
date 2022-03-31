import React from "react";
import { Col, Row, Form, Button, FormControl } from "react-bootstrap";
import "./singleArticle.css";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

function ButtonToCart({ article }) {
  const dispatch = useDispatch();

  const [num, setNum] = useState(1);

  const addNum = () => {
    setNum((num) => num + 1);
  };

  const takeNum = () => {
    if (num > 1) {
      setNum((num) => num - 1);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(
      addToCart({
        name: article.name,
        price: article.price,
        quantity: Number(num),
      })
    );
    setNum(1);
  };

  return (
    <div className="to-cart-form my-4">
      <Form method="post" action="post" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <div className="article-qty-container p-2 d-flex justify-space-around align-items-center">
              <div className="minus-btn-container float-start">
                <Button className="plus-minus-btn fs-5" onClick={takeNum}>
                  -
                </Button>
              </div>

              <div className="article-qty">{num}</div>

              <div className="plus-btn-container float-end">
                <Button onClick={addNum} className="plus-minus-btn fs-5">
                  +
                </Button>
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
