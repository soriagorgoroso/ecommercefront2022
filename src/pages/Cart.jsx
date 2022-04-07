import React, { useState } from "react";
import NavBar from "../components/NavBar";

import SubtotalCard from "../components/SubtotalCard";
import Loader from "../components/Loader";

import "./Cart.css";
import ShoppingCart from "../components/ShoppingCart";
import { useSelector } from "react-redux";
import { Col, Container } from "react-bootstrap";

function Cart() {
  const [done, setDone] = useState(true);
  const articlesInCart = useSelector((state) => state.cart);

  return (
    <>
      {!done ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Container>
            <div className="row flex-row">
              <Col xs={12} lg={6}>
                <ShoppingCart articlesInCart={articlesInCart} />
              </Col>
              <Col xs={12} lg={6}>
                <SubtotalCard
                  articlesInCart={articlesInCart}
                  setDone={setDone}
                />
              </Col>
            </div>
          </Container>
        </>
      )}
    </>
  );
}

export default Cart;
