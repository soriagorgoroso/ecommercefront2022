import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
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
        category: article.category,
        image: article.image,
      })
    );
    setNum(1);
  };

  return (
    <div className="to-cart-form my-4">
      <Form method="post" action="post" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <div className="px-2 input-group mb-3" style={{ width: "100%" }}>
              {num === 1 ? (
                <button
                  className="btn text-center rounded-0 fw-bold input-group-text bg-secondary"
                  onClick={(ev) => ev.preventDefault()}
                  disabled
                >
                  -
                </button>
              ) : (
                <button
                  className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                  onClick={takeNum}
                >
                  -
                </button>
              )}
              <span className="text-center rounded-0 fw-bold input-group-text">
                {num}
              </span>
              <button
                className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                onClick={addNum}
              >
                +
              </button>
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
