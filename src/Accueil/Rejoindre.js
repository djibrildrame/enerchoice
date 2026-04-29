import React from "react";
import joindre from "../Image/eb7cb7d5-cc47-4f08-8e3d-f94511001bcd.png";
import "../Accueil/Accueil.css";

const Rejoindre = () => {
  return (
    <section className="hero" aria-label="Section recrutement">
      
      <img 
        src={joindre} 
        className="hero__img" 
        alt="Équipe professionnelle en discussion" 
      />

      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          Vous souhaitez nous rejoindre ?
        </h1>

        <p className="hero__subtitle">
          Rejoignez une équipe ambitieuse.<br />
          Construisez votre avenir dès aujourd’hui.
        </p>

        <button className="hero__btn">
          Postuler maintenant
        </button>
      </div>

    </section>
  );
};

export default Rejoindre;
