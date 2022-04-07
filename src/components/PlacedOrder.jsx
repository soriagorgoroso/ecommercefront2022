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
      <div className="flex-element m-4 bg-light shadow-md border border-light rounded">
        <div id="pictures" className="column half h-100">
          <img
            className="img-fluid"
            src={`${process.env.REACT_APP_IMG_URL}/portadaOrder.jpg`}
          ></img>
        </div>
        <div className="last h-100">
          <div className="summary-container pt-2">
            <div className="flex-interior-element">
              <div
                className="summary-element w-100"
                style={{ position: "relative" }}
              >
                <h1 className="fw-bold">Gracias por tu compra!</h1>
                <p>
                  Ya estamos preparando tu pedido. Que disfrutes de nuestra
                  cerveza!
                </p>
                <a
                  href={"/"}
                  className="btn btn-dark rounded-0 text-center fw-bold back-to-home"
                >
                  Volver al inicio
                </a>
              </div>

              <div className="summary-element w-100">
                <h2 className="cart-title">Tu orden</h2>

                <div className="itemlist">
                  {/* <div className="item">
                    <div className="article-name mx pb-2">
                      <p>Cerveza</p>
                    </div>
                    <div className="interior-row d-flex flex-row justify-content-center align-items-center">
                      <div className="article-price input-group mb-3">
                        <span className="rounded-0 px-2">US$ 5</span>
                      </div>

                      <div className="article-quantity-container px-2 input-group mb-3">
                        <span className="text-center rounded-0 fw-bold input-group-text">
                          2
                        </span>
                      </div>

                      <div className="article-total pb-3">
                        <span className="fw-bold">US$ 10</span>
                      </div>
                    </div>
                  </div> */}
                  {orderArticles.map((art) => (
                    <>
                      <div className="item">
                        <img
                          src={`/img/photos/${art.category}/${art.image}`}
                          alt={art.name}
                          className="thumbnail-summary border border-light rounded"
                        ></img>
                        <div className="article-name-summary mx-2 pb-2">
                          <h5>{art.name}</h5>
                        </div>
                        <div className="interior-row d-flex flex-row justify-content-center align-items-center">
                          <div className=" mb-3 mx-2" style={{ width: "120" }}>
                            <span className="rounded-0 ">
                              Precio:
                              <span className="fw-bold ps-2">
                                US${art.price}
                              </span>
                            </span>
                          </div>

                          <div className="mx-2 mb-3" style={{ width: "100px" }}>
                            <span className="text-center rounded-0 fs-6">
                              Cantidad:{" "}
                              <span className="fw-bold ps-2">
                                {art.quantity}
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="article-total pb-3 mx-2">
                          <span className="fw-bold">
                            US$ {art.price * art.quantity}
                          </span>
                        </div>
                      </div>
                    </>
                  ))}
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
