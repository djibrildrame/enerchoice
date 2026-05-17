import React from "react";
import { Link } from "react-router-dom";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import "./CandidatureEnvoyee.css";

const CandidatureEnvoyee = () => {
  return (
    <div>
      <Header />

      <section className="confirmationSection">
        <div className="confirmationBox">
          <i className="fa-solid fa-circle-check"></i>

          <h1>Candidature envoyée</h1>

          <p>
            Merci pour votre candidature. Notre équipe l’a bien reçue et
            reviendra vers vous rapidement.
          </p>

          <Link to="/" className="retourAccueilBtn">
            Retour à l’accueil
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CandidatureEnvoyee;
