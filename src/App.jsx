import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Stores from "./pages/Stores";
import AboutUs from "./pages/AboutUs";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulos/:id" element={<Article />} />
        <Route path="/locales" element={<Stores />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
