import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./UserProfile.css";
import { v4 as uuidv4 } from "uuid";

function UserProfile() {
  /*const [users, setUsers] = React.useState(null)*/

  const [orders, setOrders] = React.useState(null);
  const userdata = useSelector((state) => state.user);

  React.useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/orders`,
        headers: {
          Authorization: "Bearer " + userdata.token,
        },
      });
      setOrders(response.data);
    };
    getOrders();
  }, [userdata.token]);

  //   React.useEffect(() => {
  //     const getUsers = async () => {
  //       const response = await axios.get(
  //         `process.env.REACT_APP_API_URL/${params}`,
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
    orders &&
    userdata && (
      <>
        <div className="container mt-5">
          <Row className="profile-row">
            <Col
              sm={10}
              lg={6}
              className="me-4 p-4 bg-light border border-1 shadow rounded"
            >
              <div className="user-info card-title pb-4 ">
                <h2>Mis datos</h2>
                <i class="fa-solid fa-circle-user fa-3x"></i>
              </div>
              <div className="p-2 user-info card-title">
                <p className="text fs-5">Usuario: </p>
                <span className="fs-4">{userdata.username}</span>
              </div>
              <div className="p-2 user-info card-title">
                <p className="text  fs-5">Nombre: </p>
                <span className="fs-4">{userdata.firstname}</span>
              </div>
              <div className="p-2 user-info card-title">
                <p className="fs-5 text">Apellido: </p>
                <span className="fs-4">{userdata.lastname}</span>
              </div>
              <div className="p-2 user-info card-title">
                <p className="fs-5 text">Correo: </p>
                <span className="fs-4">{userdata.email}</span>
              </div>

              <div className="mt-4">
                <a
                  className="btn btn-dark rounded float-end"
                  href={`/editarusuario/${userdata.username}`}
                >
                  Editar mis datos
                </a>
              </div>
            </Col>
            <Col
              sm={10}
              lg={6}
              className="orders-history-card p-4 bg-light border border-1 shadow rounded"
            >
              <div className="user-info card-title pb-4">
                <h2>Mis órdenes</h2>
                <i class="fa-solid fa-list fa-3x"></i>
              </div>
              {orders.map((order) => (
                <>
                  {console.log(order)}
                  <div
                    key={order.id}
                    className="order-history d-flex align-items-center justify-content-between card-title py-3"
                  >
                    <p className="m-1">
                      Orden
                      <span className="fw-bold ms-1">
                        #{order.id.slice(-10)}
                      </span>
                    </p>
                    <span className="text-secondary fs-6 ms-1">
                      Creada el {order.createdAt.slice(0, 10)}
                    </span>

                    <a className="btn btn-dark rounded">Ver más</a>
                  </div>
                </>
              ))}

              {/* {orders.map((order) => (
                <Card
                  key={order.id}
                  border=""
                  className="m-2 p-0"
                  style={{ width: "18rem" }}
                >
                  <Card.Header className="cardHeader" as="h5">
                    Fecha: {order.createdAt.slice(0, 10)}
                    <br />
                    Codigo: {order.id.slice(-10)}
                  </Card.Header>

                  <Card.Body>
                    <ul style={{ listStyle: "none" }}>
                      {order.articles.map((article) => (
                        <li key={uuidv4()}>
                          <span>Articulo: {article.name}</span>
                          <br />
                          <span> Cantidad: {article.quantity}</span>
                          <br />
                          <span>Precio: {article.price}</span>
                        </li>
                      ))}
                      <li>Subtotal:</li>
                    </ul>
                  </Card.Body>
                </Card>
              ))} */}
            </Col>
          </Row>
        </div>
      </>
    )
  );
}

export default UserProfile;
