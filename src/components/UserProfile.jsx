import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  CardHeader,
  CardBody,
} from "react-bootstrap";
import "./UserProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function UserProfile() {
  /*const [users, setUsers] = React.useState(null)*/

  const [orders, setOrders] = React.useState(null);
  const userdata = useSelector((state) => state.user);

  React.useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(`http://localhost:8000/orders/`, {
        headers: {
          Authorization: "Bearer " + userdata.token,
        },
      });

      setOrders(response.data);
    };
    getOrders();
  }, []);
  //   React.useEffect(() => {
  //     const getUsers = async () => {
  //       const response = await axios.get(
  //         `http://localhost:8000/users/${params}`,
  //         {
  //           headers: {
  //             Authorization: "Bearer " + userdata.token,
  //           },
  //         }
  //       );

  //       setUsers(response.data);
  //     };
  //     getUsers();
  //   }, []);

  return (
    orders && (
      <>
        <Container className="mt-4 border border-1 ">
          <h1 className="text-center mb-5">
            Bienvenido a tu perfil
            {/* {userdata.username} */}
          </h1>
          <Row>
            <Col xs={6} sm={6} lg={4}>
              <div className="text-center">
                {/* <img
                  src="/img/logos/logosinfondo.png"
                  alt="LogoHackBier"
                  width="350px"
                  className="rounded mx-auto d-block "
                /> */}
                <h2>Vip Memeber</h2>
                <img
                  src="/img/logos/deadpool.png"
                  alt="LogoHackBier"
                  width="350px"
                  className="rounded mx-auto d-block "
                />
              </div>
            </Col>
            <Col xs={6} sm={6} lg={8} className="pe-0">
              <p className="p-2 fs-3 text">
                Nombre: <span> </span> {userdata.firstname}
              </p>
              <p className="p-2 fs-3 text">
                Apellido: <span> </span> {userdata.lastname}
              </p>
              <p className="p-2 fs-3 text">
                Direccion: <span> </span> {userdata.direction}
              </p>
              <p className="p-2 fs-3 text">
                Correo: <span> </span> {userdata.email}
              </p>
              <p className="p-2 fs-3 text">
                Nro Contacto: <span> </span> {userdata.telephone}
              </p>
            </Col>
          </Row>
          <Row className="containerOrders">
            {orders.map((order) => (
              <Card
                border=""
                className="m-2 p-0 "
                key={order.id}
                style={{ width: "18rem" }}
              >
                <Card.Header className="cardHeader" as="h5">
                  <i class="fa-thin fa-beer-mug-empty"></i>
                  <FontAwesomeIcon icon="fa-thin fa-beer-mug-empty" />
                  Orden nro: {order.orderNumber}
                </Card.Header>

                <Card.Body>
                  <ul style={{ listStyle: "none" }}>
                    {order.articles.map((article) => (
                      <li key={article.id}>
                        <span>{article.article}</span>
                        <span> Cantidad: {article.quantity}</span>
                        <span>Precio: {article.price}</span>
                      </li>
                    ))}
                    <li>Subtotal:</li>
                  </ul>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </>
    )
  );
}

export default UserProfile;
