import React, { useState, useEffect } from "react";

import "../pages/Cart.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PlacedOrder() {
  const params = useParams();
  //const [order, setOrder] = useState({});
  const orderArticles = useSelector((state) => state.cart);

  console.log(orderArticles);

  //React.useEffect(() => {});

  //console.log(order);

  return (
    <div className="body">
      <div className="flex-element">
        <div id="pictures" className="column half">
          <img
            className="bg-image"
            src={`${process.env.REACT_APP_IMG_URL}/portadaOrder.png`}
          ></img>
        </div>
        <div className="last">
          <div className="summary-container pt-2">
            <div className="flex-interior-element ps-5">
              <div className="summary-element w-75">
                <h1 className="fw-bold">Muchas gracias por tu compra!</h1>
              </div>
              <div style={{ paddingLeft: "2rem" }}>
                Ya estamos preparando tu pedido. Que disfrutes de nuestra
                cerveza!
              </div>
              <div className="summary-element w-75 bg-light">
                <h2 className="cart-title">Tu orden</h2>
                <div className="itemlist">
                  {orderArticles.map((article) => {
                    console.log(article);
                    <div className="item">
                      <img
                        src={`/img/photos/${article.category}/${article.image}`}
                        alt={article.name}
                        className="img-thumbnail"
                      ></img>
                      <div className="article-name mx-2 pb-2">
                        <h5>{article.name}</h5>
                      </div>
                      <div className="interior-row d-flex flex-row justify-content-center align-items-center">
                        <div className="article-price input-group mb-3 ">
                          <span className="rounded-0 px-2">
                            US$ {article.price}
                          </span>
                        </div>

                        <div className="article-quantity-container px-2 input-group mb-3">
                          <span className="text-center rounded-0 fw-bold input-group-text">
                            {article.quantity}
                          </span>
                        </div>

                        <div className="article-total pb-3">
                          <span className="fw-bold">
                            US$ {article.price * article.quantity}
                          </span>
                        </div>
                      </div>
                    </div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlacedOrder;
