import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Accueil from "../src/Accueil/Accueil";
import Galerie from "../src/Galerie/Galerie";
import Contact from "./Contact/Contact";
import Rejoindre from "./Rejoindre/Rejoindre";
import Postuler from "./Postuler/Postuler";
import CandidatureEnvoyee from "./CandidatureEnvoyee/CandidatureEnvoyee";

function App() {
  return (
    <div className="App">

        <Router>
      <Routes>
        <Route path="/" element={<Accueil />} /> 
        <Route path="/Galerie" element={<Galerie />} /> 
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Nousrejoindre" element={<Rejoindre />} /> 
        <Route path="/Postuler" element={<Postuler />} />
        <Route path="/CandidatureEnvoyee" element={<CandidatureEnvoyee />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
