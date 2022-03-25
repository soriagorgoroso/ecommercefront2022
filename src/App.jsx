import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Stores from "./pages/Stores";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulos/:id" element={<Article />} />
        <Route path="/locales" element={<Stores />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
