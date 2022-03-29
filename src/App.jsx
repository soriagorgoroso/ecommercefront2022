import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Stores from "./pages/Stores";
import AboutUs from "./pages/AboutUs";
import Register from "./components/RegisterNavBarIzq";
import User from "./pages/User";
import { useSelector } from "react-redux";

function App() {
  // const loggedUser = useSelector((state) => state.users[0]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mi_perfil/:username" element={<User />} />
        <Route path="/articulos/:id" element={<Article />} />
        <Route path="/locales" element={<Stores />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
