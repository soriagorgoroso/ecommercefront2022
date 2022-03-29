import React from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function UserProfile() {
  const [orders, setOrders] = React.useState(null);
  const userdata = useSelector((state) => state.user);

  React.useEffect(() => {
    const setOrders = async () => {
      const response = await axios.get(`http://localhost:8000/orders`);

      setOrders(response.data);
    };
    setOrders();
  }, []);

  return (
    <>
      <div className="d-flex align-items-center bg-warning ronded shadow-sm">
        <h1>Bienvenido a tu perfil</h1>
        <h2>
          {userdata.firstname}
          {userdata.lastname}
        </h2>
      </div>
      <div className="d-flex align-items-center bg-warning ronded shadow-sm">
        <h1>Ordenes</h1>
        <h2>{userdata.orders}</h2>
      </div>
    </>
  );
}

export default UserProfile;
