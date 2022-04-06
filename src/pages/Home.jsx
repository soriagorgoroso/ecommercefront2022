import React from "react";
import NavBar from "../components/NavBar";
import ArticleList from "../components/ArticleList";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <ArticleList />
      <Footer />
    </>
  );
}

export default Home;
