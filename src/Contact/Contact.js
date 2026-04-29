import React from "react";
import "./Contact.css";
import Header from "../HeaderFooter/Header";

const Contact = () => {
  return (

    <div>
    <Header/>
    <section className="contactSection">
          <h1>Parlons de votre projet</h1>
          <p>
            Une question, une demande de partenariat ou un besoin d’information ?
            Notre équipe est à votre écoute.
          </p>
      <div className="contactWrapper">
        <div className="contactIntro">
          <div className="contactCards">
            <div className="contactCard">
              <h3>Téléphone</h3>
              <p>01 23 45 67 89</p>
            </div>

            <div className="contactCard">
              <h3>Email</h3>
              <p>contact@enerchoice.fr</p>
            </div>

            <div className="contactCard">
              <h3>Localisation</h3>
              <p>Île-de-France</p>
            </div>
          </div>
        </div>

        <div className="contactFormBox">
          <form className="contactForm">
            <div className="doubleField">
              <div className="field">
                <label htmlFor="nom">Nom</label>
                <input id="nom" type="text" placeholder="Votre nom" />
              </div>

              <div className="field">
                <label htmlFor="prenom">Prénom</label>
                <input id="prenom" type="text" placeholder="Votre prénom" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Votre email" />
            </div>

            <div className="field">
              <label htmlFor="sujet">Sujet</label>
              <input id="sujet" type="text" placeholder="Objet de votre demande" />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Écrivez votre message ici..."
              ></textarea>
            </div>

            <button type="submit" className="contactBtn">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;