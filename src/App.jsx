import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Stores from "./pages/Stores";
import AboutUs from "./pages/AboutUs";
import Register from "./components/RegisterNavBarIzq";
import User from "./pages/User";
import Cart from "./pages/Cart";
import Reservas from "./pages/Reservas";
import ThisProject from "./pages/ThisProject";
import EditUser from "./pages/EditUser";
//import { useSelector } from "react-redux";
import AboutThis from "./components/AboutThis";
import CheckOut from "./pages/CheckOut";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import ModalMainPage from "./components/ModalMainPage";
import actions from "./redux/modalActions";

function App() {
  // const loggedUser = useSelector((state) => state.users[0]);
  const dispatch = useDispatch();

  const resetModal = () => {
    dispatch(actions.show());
  };

  useEffect(() => {
    window.addEventListener("unload", resetModal);
    return () => {
      window.removeEventListener("unload", resetModal);
    };
  }, []);

  return (
    <div className="main">
      <div className="App">
        <AboutThis />
        <ModalMainPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mi_perfil/:username" element={<User />} />
          <Route path="/articulos/:id" element={<Article />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/locales" element={<Stores />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/proyecto" element={<ThisProject />} />
          <Route path="/confirmacion" element={<CheckOut />} />
          <Route path="/editarusuario/:username" element={<EditUser />} />
          <Route path="*" element={<Error />} />
          <Route path="pruebamodal" element={<ModalMainPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
