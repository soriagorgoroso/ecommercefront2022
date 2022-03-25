import React from "react";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

export default Home;
