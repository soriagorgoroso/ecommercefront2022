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
        <Container className="mt-4 border border-1">
          <h1 className="text-center my-3">MI PERFIL</h1>
          <Row className="px-5">
            <Col md={12} lg={6} className="p-3 border border-1">
              <h2 className="text-center mb-1">MIS DATOS</h2>
              <p className="p-2 fs-3 text">Usuario: {userdata.username}</p>
              <p className="p-2 fs-3 text">Nombre: {userdata.firstname}</p>
              <p className="p-2 fs-3 text">Apellido: {userdata.lastname}</p>
              <p className="p-2 fs-3 text mb-1">Correo: {userdata.email}</p>
              <a
                className="btn btn-white border border-warning"
                href={`/editarusuario/${userdata.username}`}
              >
                Editar mis datos
              </a>
            </Col>
            {/* <Col md={12} lg={6} className="p-3 border border-1">
              <h2 className="text-center mb-1">CAMBIAR CONTRASEÑA</h2>
              <p className="p-2 fs-3 text">Usuario: {userdata.username}</p>
              <p className="p-2 fs-3 text">Nombre: {userdata.firstname}</p>
              <p className="p-2 fs-3 text">Apellido: {userdata.lastname}</p>
              <p className="p-2 fs-3 text mb-1">Correo: {userdata.email}</p>
              <a className="btn btn-outline-warning" href="/editar">
                Editar mis datos
              </a>
            </Col> */}
          </Row>
          <Row className="p-3 border border-1">
            <h2>Ordenes:</h2>
            {orders.map((order) => (
              <Col key={order.id}>
                <Card border="" className="m-2 p-0" style={{ width: "18rem" }}>
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
              </Col>
            ))}
          </Row>
        </Container>
      </>
    )
  );
}

export default UserProfile;
