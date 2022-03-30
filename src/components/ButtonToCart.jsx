import React from "react";
import { Col, Row, Form, Button, FormControl } from "react-bootstrap";
import "./singleArticle.css";
import { increment, decrement } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function ButtonToCart() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.myCount);
  const [num, setNum] = useState(1);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch({
      type: "ADD",
      payload: { quantity: Number(num) },
    });
    setNum("");
  };

  return (
    <div className="to-cart-form my-4">
      <Form method="post" action="post" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <div className="article-qty-container p-2 d-flex justify-space-around align-items-center">
              <div className="minus-btn-container float-start">
                <Button
                  className="plus-minus-btn fs-5"
                  onClick={() => setNum(num - 1)}
                >
                  {" "}
                  -{" "}
                </Button>
              </div>
              <input
                className="m-2 inputquantity"
                type="number"
                min={1}
                defaultValue="1"
                value={num}
              />
              {/* <div className="article-qty">{num}</div> */}

              <div className="plus-btn-container float-end">
                <Button
                  onClick={() => setNum(num + 1)}
                  className="plus-minus-btn fs-5"
                >
                  {" "}
                  +{" "}
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
