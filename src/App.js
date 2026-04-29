import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Accueil from "../src/Accueil/Accueil";
import Galerie from "../src/Galerie/Galerie";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">

        <Router>
      <Routes>
        <Route path="/" element={<Accueil />} /> 
        <Route path="/galerie" element={<Galerie />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>

    </div>
  );
}

export default App;
