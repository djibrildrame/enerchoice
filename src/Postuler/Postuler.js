import React, { useState } from "react";
import "./Postuler.css";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import { useNavigate } from "react-router-dom";

const Postuler = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    ville: "",
    poste: "",
    message: "",
  });

  const [cv, setCv] = useState(null);
  const [messageValidation, setMessageValidation] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setCv(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("nom", formData.nom);
    data.append("prenom", formData.prenom);
    data.append("email", formData.email);
    data.append("telephone", formData.telephone);
    data.append("ville", formData.ville);
    data.append("poste", formData.poste);
    data.append("message", formData.message);
    data.append("cv", cv);

    try {
      const response = await fetch(
        "http://localhost:8000/api/candidature/postuler",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          ville: "",
          poste: "",
          message: "",
        });

        setCv(null);

        navigate("/CandidatureEnvoyee");
      } else {
        setMessageValidation("❌ Une erreur est survenue.");
      }
    } catch (error) {
      setMessageValidation("❌ Impossible d’envoyer la candidature.");
    }
  };

  return (
    <div>
      <Header />

      <section className="postulerSection">
        <div className="postulerContainer">
          <h1>Postuler chez Enerchoice</h1>

          <p>
            Remplissez le formulaire ci-dessous afin de rejoindre l’aventure
            Enerchoice.
          </p>

          {messageValidation && (
            <p className="messageValidation">{messageValidation}</p>
          )}

          <form className="postulerForm" onSubmit={handleSubmit}>
            <div className="doubleInput">
              <div className="inputBox">
                <label>Nom</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="inputBox">
                <label>Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  required
                />
              </div>
            </div>

            <div className="doubleInput">
              <div className="inputBox">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                />
              </div>

              <div className="inputBox">
                <label>Téléphone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Votre téléphone"
                  required
                />
              </div>
            </div>

            <div className="doubleInput">
              <div className="inputBox">
                <label>Ville</label>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  placeholder="Votre ville"
                  required
                />
              </div>

              <div className="inputBox">
                <label>Poste souhaité</label>
                <select
                  name="poste"
                  value={formData.poste}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisissez un poste</option>
                  <option value="Formateur Manager">Formateur Manager</option>
                  <option value="Manager Commercial">Manager Commercial</option>
                  <option value="Manager Réseau">Manager Réseau</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            </div>

            <div className="inputBox">
              <label>Votre message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Présentez-vous ou ajoutez un message..."
                required
              ></textarea>
            </div>

            <div className="fileUpload">
              <i className="fa-solid fa-file-pdf"></i>

              <h3>Ajouter votre CV</h3>

              <p>Formats acceptés : PDF, DOC, DOCX</p>

              <input
                type="file"
                name="cv"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <button type="submit" className="envoyerBtn">
              Envoyer ma candidature
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Postuler;