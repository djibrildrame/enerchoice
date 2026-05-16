import React from "react";
import "./Postuler.css";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";

const Postuler = () => {
  return (
    <div>
      <Header />

      <section className="postulerSection">
        <div className="postulerContainer">

          <h1>Postuler chez Enerchoice</h1>

          <p>
            Remplissez le formulaire ci-dessous afin de rejoindre
            l’aventure Enerchoice.
          </p>

          <form className="postulerForm">

            <div className="doubleInput">

              <div className="inputBox">
                <label>Nom</label>
                <input type="text" placeholder="Votre nom" />
              </div>

              <div className="inputBox">
                <label>Prénom</label>
                <input type="text" placeholder="Votre prénom" />
              </div>

            </div>

            <div className="doubleInput">

              <div className="inputBox">
                <label>Email</label>
                <input type="email" placeholder="Votre email" />
              </div>

              <div className="inputBox">
                <label>Téléphone</label>
                <input type="tel" placeholder="Votre téléphone" />
              </div>

            </div>

            <div className="doubleInput">

              <div className="inputBox">
                <label>Ville</label>
                <input type="text" placeholder="Votre ville" />
              </div>

              <div className="inputBox">
                <label>Poste souhaité</label>

                <select>
                  <option>Choisissez un poste</option>
                  <option>Formateur Manager</option>
                  <option>Manager Commercial</option>
                  <option>Manager Réseau</option>
                  <option>Commercial</option>
                </select>
              </div>

            </div>

            <div className="inputBox">
              <label>Votre message</label>

              <textarea
                rows="6"
                placeholder="Présentez-vous ou ajoutez un message..."
              ></textarea>
            </div>

            <div className="fileUpload">

  <i className="fa-solid fa-file-pdf"></i>

  <h3>Ajouter votre CV</h3>

  <p>
    Formats acceptés : PDF, DOC, DOCX
  </p>

  <input type="file" />

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