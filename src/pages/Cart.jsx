//import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
//import Loader from "../components/Loader";
import "./Cart.css";
import ShoppingCart from "../components/ShoppingCart";

function Cart() {
  //const [done, setDone] = useState(false);

  return (
    <>
      <NavBar />
      <ShoppingCart />
      <Footer />
    </>
  );
}

export default Cart;
