import React, { useState } from "react";
import "../Rejoindre/Rejoindre.css";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import { Link } from "react-router-dom";

const Rejoindre = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posteChoisi, setPosteChoisi] = useState("");

  const ouvrirModal = (poste) => {
    setPosteChoisi(poste);
    setModalOpen(true);
  };

  const fermerModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Header />

      <section className="avantagesSection">
        <h2>Les avantages</h2>

        <div className="avantagesGrid">
          <div className="avantageCard">
            <i className="fa-solid fa-users"></i>
            <h3>Esprit d’équipe</h3>
            <p>Évoluez dans un environnement bienveillant et collaboratif.</p>
          </div>

          <div className="avantageCard">
            <i className="fa-solid fa-lightbulb"></i>
            <h3>Impact positif</h3>
            <p>Contribuez à la transition énergétique et à un avenir durable.</p>
          </div>

          <div className="avantageCard">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Développement</h3>
            <p>
              Bénéficiez d’opportunités d’évolution et de formations continues.
            </p>
          </div>

          <div className="avantageCard">
            <i className="fa-solid fa-heart"></i>
            <h3>Équilibre</h3>
            <p>
              Nous favorisons l’équilibre entre vie professionnelle et vie
              personnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="offresSection">
        <h2>Nos Offres d'emploi</h2>

        <p>
          Découvrez nos offres ouvertes et trouvez votre place au sein de
          l'aventure Enerchoice :
        </p>

        <div className="offre">
          <div>
            <i className="fa-solid fa-chalkboard-user"></i>
            <p>Formateur Manager</p>
          </div>

          <div>
            <i className="fa-solid fa-location-dot"></i>
            <p>Île-de-France</p>
          </div>

          <button onClick={() => ouvrirModal("Formateur Manager")}>
            Voir Offre
          </button>
        </div>

        <div className="offre">
          <div>
            <i className="fa-solid fa-briefcase"></i>
            <p>Manager Commercial</p>
          </div>

          <div>
            <i className="fa-solid fa-location-dot"></i>
            <p>Île-de-France</p>
          </div>

          <button onClick={() => ouvrirModal("Manager Commercial")}>
            Voir Offre
          </button>
        </div>

        <div className="offre">
          <div>
            <i className="fa-solid fa-network-wired"></i>
            <p>Manager Réseau</p>
          </div>

          <div>
            <i className="fa-solid fa-location-dot"></i>
            <p>Île-de-France</p>
          </div>

          <button onClick={() => ouvrirModal("Manager Réseau")}>
            Voir Offre
          </button>
        </div>

        <div className="offre">
          <div>
            <i className="fa-solid fa-handshake"></i>
            <p>Commercial</p>
          </div>

          <div>
            <i className="fa-solid fa-location-dot"></i>
            <p>Île-de-France</p>
          </div>

          <button onClick={() => ouvrirModal("Commercial")}>
            Voir Offre
          </button>
        </div>
      </section>

      {modalOpen && (
        <div className="modalOverlay">
          <div className="modalBox">
            <button className="closeModal" onClick={fermerModal}>
              ×
            </button>

            <h2>{posteChoisi}</h2>

            <p className="modalLocation">
              <i className="fa-solid fa-location-dot"></i> Île-de-France
            </p>

            <p>
              Rejoignez Enerchoice et participez au développement d’une équipe
              ambitieuse, dynamique et tournée vers la performance.
            </p>

            <h3>Profil recherché</h3>

            <ul>
              <li>Bon relationnel</li>
              <li>Esprit d’équipe</li>
              <li>Motivation et sérieux</li>
              <li>Envie d’évoluer dans un environnement commercial</li>
            </ul>

            <Link to="/Postuler" className="postulerBtn">
  Postuler maintenant
</Link>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Rejoindre;