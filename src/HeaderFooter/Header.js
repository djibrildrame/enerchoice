import React from "react";
import { Link } from "react-router-dom";
import Enerchoice from "../Image/Enerchoice.jpeg";
import "../HeaderFooter/header.css";

export const Accueil = () => {
  return (
    <div>
      <header className="header">
        <div className="head">
          <Link to="/" className="brand" aria-label="Accueil Enerchoice">
            <img src={Enerchoice} className="logo" alt="logo enerchoice" />
          </Link>

          <nav className="nav">
            <Link to="/" className="navLink">Accueil</Link>
            <Link to="/galerie" className="navLink">Galerie</Link>
            <Link to="/rejoindre" className="navLink">Nous rejoindre</Link>
            <Link to="/contact" className="navLink">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Accueil;
