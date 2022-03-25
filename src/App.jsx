import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
<<<<<<< Updated upstream
import Stores from "./pages/Stores";
=======
import AboutUs from "./pages/AboutUs";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulos/:id" element={<Article />} />
<<<<<<< Updated upstream
        <Route path="/locales" element={<Stores />} />
=======
        <Route path="/nosotros" element={<AboutUs />} />
>>>>>>> Stashed changes
      </Routes>
    </div>
  );
}

export default App;
