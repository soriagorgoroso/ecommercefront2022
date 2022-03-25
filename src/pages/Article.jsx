import React from "react";
import SingleArticle from "../components/SingleArticle";
import NavBar from "../components/NavBar";
import TopSeller from "../components/TopSeller";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function Article() {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article);

  //Llamada para traer los tweets de la DB, se renderiza solo cuando se carga el componente
  //Necesito guardar los tweets en la store para que cuando agregue uno nuevo no se recargue la pagina
  //Podría tener un archivo con tweets falsos y que cargue esos

  useEffect(() => {
    const getArticle = async () => {
      const response = await axios.get(
        `http://localhost:8000/articles/${article.name}`
      );
      console.log(response.data);
      dispatch({
        //manda los tweets a la store
        type: "GET_ARTICLE",
        payload: response.data,
      });
    };

    getArticle();
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <SingleArticle article={article} />
      <TopSeller />
      <Footer />
    </div>
  );
}

export default Article;
