import "./ArticleList.css";
import React from "react";
import axios from "axios";
import { Col, Container, Form, Row } from "react-bootstrap";

function ArticleList() {
  const [articles, setArticles] = React.useState(null);
  const [categoryValue, setCategoryValue] = React.useState("Sin filtro");
  const [categories, setcategories] = React.useState(null);

  React.useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `${process.env.DB_CONNECTION_STRING}/articles`
      );
      setArticles(response.data);
    };
    getArticles();
  }, []);

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        `${process.env.DB_CONNECTION_STRING}/categories`
      );
      setcategories(response.data);
    };
    getCategories();
  }, []);

  return (
    categories &&
    articles && (
      <Container>
        <h1 className="mt-5 mb-3">TIENDA</h1>
        <div className="d-flex align-items-center fs-4 mb-5">
          <label htmlFor="category">Filtrar por tipo:</label>
          <Form.Select
            className="w-25 ms-3 fs-4 form_color"
            aria-label="filter"
            onChange={(event) => {
              console.log(event.target.value);
              setCategoryValue(event.target.value);
            }}
          >
            <option value="Sin filtro">Sin filtro</option>
            {categories.map((category) => (
              <option value={category.name} key={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="fs-5 mb-5">
          <p>Prohibida venta menores de 18 años</p>
          <p>Llevando 16 latas o más: 20% descuento</p>
          <p>Envío sin cargo a partir de $1500</p>
        </div>
        <Row>
          {categoryValue === "Sin filtro"
            ? articles.map((article) => (
                <Col md={6} lg={4} xl={3} key={article.id} className="float">
                  <a href={`/articulos/${article.id}`}>
                    <img
                      className="img-fluid"
                      src={`/img/photos/${article.category}/${article.image}`}
                      alt="imagen del producto"
                    />
                    <div className="d-flex justify-content-between mt-3">
                      <h2 className="fs-5">{article.name}</h2>
                      <h2 className="fs-5">US$ {article.price}</h2>
                    </div>
                    <div className="d-flex">
                      <p>{article.category}</p>
                      <p>|</p>
                      <p>{article.ibus} ABV</p>
                    </div>
                    <div className="d-flex mb-4">
                      <p>{article.sizecc}ml</p>
                    </div>
                  </a>
                </Col>
              ))
            : //pilots.filter(pilot => pilot.faction === "Rebels");
              articles
                .filter((article) => article.category === categoryValue)
                .map((article) => (
                  <Col md={6} lg={4} xl={3} key={article.id} className="float">
                    <a href={`/articulos/${article.id}`}>
                      <img
                        className="img-fluid"
                        src={`/img/photos/${article.category}/${article.image}`}
                        alt="imagen del producto"
                      />
                      <div className="d-flex justify-content-between mt-3">
                        <h2 className="fs-5">{article.name}</h2>
                        <h2 className="fs-5">US$ {article.price}</h2>
                      </div>
                      <div className="d-flex">
                        <p>{article.category}</p>
                        <p>|</p>
                        <p>{article.ibus} ABV</p>
                      </div>
                      <div className="d-flex mb-4">
                        <p>{article.sizecc}ml</p>
                      </div>
                    </a>
                  </Col>
                ))}
        </Row>
      </Container>
    )
  );
}

export default ArticleList;
