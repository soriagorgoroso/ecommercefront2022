import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./EditUser.css";
function EditUser() {
  const params = useParams();
  const userLogged = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [warning, setWarning] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [editedUser, setEditedUser] = React.useState({});

  //console.log(userLogged);
  //console.log(params.username);

  // React.useEffect(() => {
  //   const getUser = async () => {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/users/${params.username}`,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + userLogged.token,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     setUser(response.data);
  //   };
  //   getUser();
  // }, [params.username]);
  //console.log(user);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in editedUser) {
      if (field === "") return;
    }
    const response2 = await axios(
      {
        method: "PATCH",
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
    if (response2.status === 200) {
      console.log(response2.data);
      navigate(`/mi_perfil/${params.username}`);
    } else {
      setWarning(response2.data.msg);
    }
  };

  return (
    userLogged && (
      <>
        <NavBar />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <Col sm={10} lg={4}>
              <div className="bg-light my-4 mx-auto">
                <div className="d-flex flex-row justify-content-around align-items-center shadow rounded p-4">
                  <h3>{userLogged.username}</h3>
                  <i class="fa-solid fa-circle-user fa-3x"></i>
                </div>
              </div>
              <div className="bg-light my-4 mx-auto shadow rounded p-4">
                <div className="d-flex flex-column align-items-center">
                  <form onSubmit={handleSubmit} className="mb-5 w-75">
                    <label
                      className="my-2 form-label text-dark"
                      htmlFor="firstname"
                    >
                      Nombre
                    </label>
                    <input
                      required
                      defaultValue={userLogged.firstname}
                      className="form-control border border-dark rounded-0"
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
                      className="my-2 form-label text-dark"
                      htmlFor="lastname"
                    >
                      Apellido
                    </label>
                    <input
                      required
                      defaultValue={userLogged.lastname}
                      className="form-control border border-dark rounded-0"
                      id="lastname"
                      type="text"
                      onChange={(ev) => {
                        setUser({ ...user, lastname: ev.target.value });
                        setEditedUser({
                          ...editedUser,
                          lastname: ev.target.value,
                        });
                      }}
                    />
                    <label
                      className="my-2  form-label text-dark"
                      htmlFor="address"
                    >
                      Domicilio
                    </label>
                    <input
                      required
                      //defaultValue={user.address}
                      className="form-control border border-dark rounded-0"
                      id="address"
                      type="text"
                      onChange={(ev) => {
                        setUser({ ...user, address: ev.target.value });
                        setEditedUser({
                          ...editedUser,
                          address: ev.target.value,
                        });
                      }}
                    />
                    <label
                      className="my-2 form-label text-dark"
                      htmlFor="telephone"
                    >
                      Teléfono
                    </label>
                    <input
                      required
                      //defaultValue={user.telephone}
                      className="form-control border border-dark rounded-0"
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
                    <div className="float-end">
                      <a
                        className="mt-4 mx-2 btn btn-light border border-dark"
                        href={`/mi_perfil/${userLogged.username}`}
                      >
                        Ir atrás
                      </a>
                      <button
                        className="btn btn-dark rounded mt-4"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Guardar cambios
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </>
    )
  );
}

export default EditUser;
