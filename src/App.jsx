import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulos" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
