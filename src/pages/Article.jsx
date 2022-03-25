import React from "react";
import SingleArticle from "../components/SingleArticle";
import NavBar from "../components/NavBar";
import TopSeller from "../components/TopSeller";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function Article() {
  return (
    <Container>
      <NavBar />
      <SingleArticle />
      <TopSeller />
      <Footer />
    </Container>
  );
}

export default Article;
