import React, { useState } from "react";
import "./Contact.css";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [messageValidation, setMessageValidation] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/contact/envoyer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          sujet: "",
          message: "",
        });

        navigate("/MessageEnvoyee");
      } else {
        setMessageValidation("❌ Une erreur est survenue.");
      }
    } catch (error) {
      setMessageValidation("❌ Impossible d’envoyer le message.");
    }
  };

  return (
    <div>
      <Header />

      <section className="contactSection">
        <h1>Parlons de votre projet</h1>

        <p>
          Une question, une demande de partenariat ou un besoin d’information ?
          Notre équipe est à votre écoute.
        </p>

        {messageValidation && (
          <p className="messageValidation">{messageValidation}</p>
        )}

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
                <p>Auvergne-Rhône-Alpes (Lyon)</p>
              </div>
            </div>
          </div>

          <div className="contactFormBox">
            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="doubleField">
                <div className="field">
                  <input
                    name="nom"
                    type="text"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="field">
                  <input
                    name="prenom"
                    type="text"
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="Votre prénom"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                />
              </div>

              <div className="field">
                <input
                  name="sujet"
                  type="text"
                  value={formData.sujet}
                  onChange={handleChange}
                  placeholder="Objet de votre demande"
                  required
                />
              </div>

              <div className="field">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Écrivez votre message ici..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contactBtn">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;