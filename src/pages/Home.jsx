import React from "react";
import NavBar from "../components/NavBar";
import ArticleList from "../components/ArticleList";

import Header from "../components/Header";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <ArticleList />
    </>
  );
}

export default Home;
