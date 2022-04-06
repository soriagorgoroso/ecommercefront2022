import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function EditUser() {
  const params = useParams();
  const userLogged = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [warning, setWarning] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [editedUser, setEditedUser] = React.useState({});

  React.useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/${params.username}`,
        {
          headers: {
            Authorization: "Bearer " + userLogged.token,
          },
        }
      );
      setUser(response.data);
    };
    getUser();
  }, [params.username]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in editedUser) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/users/${user.username}`,
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
        data: editedUser,
      },
      {
        validateStatus: function (status) {
          return status >= 200;
        },
      }
    );
    if (response.status === 200) {
      navigate("/usuarios");
    } else {
      setWarning(response.data.msg);
    }
  };

  return (
    user && (
      <>
        <NavBar />
        <Container>
          <Row className="mt-5">
            <Col className="text-white">
              {" "}
              <h1 className="text-dark">Edita tus datos: {user.username}</h1>
              <form onSubmit={handleSubmit} className="mb-5">
                <label
                  className="mt-3 w-75 form-label text-dark"
                  htmlFor="firstname"
                >
                  Nombre
                </label>
                <input
                  required
                  defaultValue={user.firstname}
                  className="w-75 form-control border border-warning rounded-0"
                  id="firstname"
                  type="text"
                  onChange={(ev) => {
                    setUser({ ...user, firstname: ev.target.value });
                    setEditedUser({
                      ...editedUser,
                      firstname: ev.target.value,
                    });
                  }}
                />
                <label
                  className="mt-3 w-75 form-label text-dark"
                  htmlFor="lastname"
                >
                  Apellido
                </label>
                <input
                  required
                  defaultValue={user.lastname}
                  className="w-75 form-control border border-warning rounded-0"
                  id="lastname"
                  type="text"
                  onChange={(ev) => {
                    setUser({ ...user, lastname: ev.target.value });
                    setEditedUser({ ...editedUser, lastname: ev.target.value });
                  }}
                />
                <label
                  className="mt-3 w-75 form-label text-dark"
                  htmlFor="address"
                >
                  Domicilio
                </label>
                <input
                  required
                  defaultValue={user.address}
                  className="w-75 form-control border border-warning rounded-0"
                  id="address"
                  type="text"
                  onChange={(ev) => {
                    setUser({ ...user, address: ev.target.value });
                    setEditedUser({ ...editedUser, address: ev.target.value });
                  }}
                />
                <label
                  className="mt-3 w-75 form-label text-dark"
                  htmlFor="telephone"
                >
                  Teléfono
                </label>
                <input
                  required
                  defaultValue={user.telephone}
                  className="w-75 form-control border border-warning rounded-0"
                  id="telephone"
                  type="text"
                  onChange={(ev) => {
                    setUser({ ...user, telephone: ev.target.value });
                    setEditedUser({
                      ...editedUser,
                      telephone: ev.target.value,
                    });
                  }}
                />

                {warning && <p className="text-danger">{warning}</p>}
                <button
                  className="btn btn-white border border-warning mt-3"
                  type="submit"
                >
                  Guardar cambios
                </button>
              </form>
              <a
                className="my-3 btn btn-warning"
                href={`/mi_perfil/${user.username}`}
              >
                Ir atrás
              </a>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )
  );
}

export default EditUser;
