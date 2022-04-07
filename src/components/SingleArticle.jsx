import React from "react";
import ButtonToCart from "./ButtonToCart";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./singleArticle.css";

function SingleArticle() {
  const [article, setArticle] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    const getArticle = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/articles/${params.id}`
      );

      setArticle(response.data);
    };
    getArticle();
  }, [params.id]);
  return (
    article && (
      <Row className="justify-content-start g-5">
        <Col xs={12} sm={12} lg={6} className="pt-4">
          <img
            src={`${process.env.REACT_APP_IMG_URL}/${article.image}`}
            alt="Cerveza IPA"
            className="article-image shadow-sm w-100"
          />
        </Col>
        <Col xs={12} sm={12} lg={6} className="pt-4 ps-4 ">
          <div className="d-flex flex-column justify-content-center">
            <div className="text-left article-info-container pt-2 w-100">
              <div className="product-name-container">
                <h1 className="product-name fw-bold">{article.name}</h1>
              </div>
              <h1 className="fw-bold">USD {article.price}</h1>
              <span className="fs-4 fw-bold">
                {article.category} | {article.sizecc}cc | {article.ibus}
              </span>
              <ButtonToCart article={article} />
              <hr className="separator mt-4"></hr>
              <span className="fs-6">SOBRE LA CERVEZA</span>
              <p className="fs-6 pt-2">{article.description}</p>

              <hr className="separator"></hr>
              <span>Prohibida su venta a menores de 18 años</span>
            </div>
          </div>
        </Col>
      </Row>
    )
  );
}

export default SingleArticle;
