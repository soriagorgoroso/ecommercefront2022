import React from "react";
import SingleArticle from "../components/SingleArticle";
import NavBar from "../components/NavBar";
import TopSeller from "../components/TopSeller";

import { Container } from "react-bootstrap";

function Article() {
  return (
    <>
      <NavBar />
      <Container>
        <SingleArticle />
        <TopSeller />
      </Container>
    </>
  );
}

export default Article;
