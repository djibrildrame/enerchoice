import React from "react";
import { Link } from "react-router-dom";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import "./MessageEnvoyee.css";

const MessageEnvoyee = () => {
  return (
    <div>
      <Header />

      <section className="messageSection">
        <div className="messageBox">
          <i className="fa-solid fa-envelope-circle-check"></i>

          <h1>Message envoyé</h1>

          <p>
            Merci pour votre message. Notre équipe l’a bien reçu et vous
            répondra dans les plus brefs délais.
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

export default MessageEnvoyee;