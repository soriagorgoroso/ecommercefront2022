import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Container, Row, Col, Accordion } from "react-bootstrap";

function UserProfile() {
  const [users, setUsers] = React.useState(null);
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
        <Container className="mt-4 border border-5 rounded-3 shadow-lg">
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
            <Col xs={6} sm={6} lg={8}>
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

          <Row>
            {" "}
            <Col xs={6} sm={6} lg={8}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {orders.map((order) => order._id)}
                  </Accordion.Header>
                  {orders.map((order) =>
                    order.articles.map((article) => (
                      <Accordion.Body>
                        {/* <p className="p-2 fs-3 text"> */}
                        <span>{article.article}</span>
                        <span> {article.price}</span>
                        <span>{article.quantity}</span>
                        {/* </p> */}
                        <span>Cantidad {article.quantity}</span>
                        <span>Total {article.price}</span>
                      </Accordion.Body>
                    ))
                  )}
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </>
    )
  );
}

export default UserProfile;
