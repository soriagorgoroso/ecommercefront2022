import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

function UserProfile() {
  const [orders, setOrders] = React.useState(null);
  const userdata = useSelector((state) => state.user);
  const params = useParams();

  React.useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(`http://localhost:8000/orders/`, {
        headers: {
          Authorization: "Bearer " + userdata.token,
        },
      });

      setOrders(response.data);
      console.log(response.data);
    };
    getOrders();
  }, []);

  return (
    orders && (
      <>
        <h1>
          Bienvenido a tu perfil
          {/* {userdata.username} */}
        </h1>
        <Container className="border border-5 rounded-3 shadow-lg">
          <Row>
            <Col xs={6} sm={6} lg={4}>
              <div className="text-center">
                <img
                  src="/img/logos/logosinfondo.png"
                  alt="LogoHackBier"
                  width="350px"
                  className="rounded mx-auto d-block "
                />
                <h2>Vip Memeber</h2>
              </div>
            </Col>
            <Col xs={6} sm={6} lg={8}>
              <p className="p-2 fs-3 text">Nombre:{userdata.firstname}</p>
              <p className="p-2 fs-3 text">Apellido: {userdata.lastname}</p>
              <p className="p-2 fs-3 text">Direccion: {userdata.direction}</p>
              <p className="p-2 fs-3 text">Correo: {userdata.email}</p>
              <p className="p-2 fs-3 text">
                Nro Contacto: {userdata.telephone}
              </p>
            </Col>
          </Row>

          <Row>
            {" "}
            <Col xs={6} sm={6} lg={8}>
              {orders.map((order) =>
                order.articles.map((article) => (
                  <p className="p-2 fs-3 text">
                    Articulo:
                    <span>{article.article}</span>
                    <span> {article.price}</span>
                    <span>{article.quantity}</span>
                  </p>
                ))
              )}
            </Col>
          </Row>
        </Container>
      </>
    )
  );
}

export default UserProfile;
