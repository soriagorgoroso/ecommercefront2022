import "./ProductList.css";
import React from "react";
import axios from "axios";
import { Col, Container, Form, Row } from "react-bootstrap";

function ProductList() {
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get("http://localhost:8000/articles");
      setArticles(response.data);
    };
    getArticles();
  }, []);

  return (
    articles && (
      <Container>
        <h2>TIENDA</h2>
        <div className="d-flex align-items-center">
          <label htmlFor="category">Filtrar por tipo:</label>
          <Form.Select className="w-25 ms-3" aria-label="filter">
            <option>Sin filtro</option>
            <option value="1">IPA</option>
            <option value="2">APA</option>
            <option value="3">BELGA</option>
            <option value="4">LAGER</option>
            <option value="5">SOUR</option>
          </Form.Select>
        </div>
        <p>Prohibida venta menores de 18 años</p>
        <p>Llevando 16 latas o más: 20% descuento</p>
        <p>Envío sin cargo a partir de $1500</p>
        <Row>
          {articles.map((article) => (
            <Col md={6} lg={4} xl={3}>
              <img
                className="img-fluid"
                src={`/img/photos/${article.category}/${article.image}`}
                alt="imagen del producto"
              />
              <div className="d-flex justify-content-between">
                <h3>{article.name}</h3>
                <h3>US$ {article.price}</h3>
              </div>
              <div className="d-flex">
                <p>{article.category}</p>|<p>{article.ibus} ABV</p>
              </div>
              <div className="d-flex">
                <p>tipo?</p>|<p>{article.sizecc} ABV</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    )
  );
}

export default ProductList;
