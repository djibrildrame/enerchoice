import React, { useState } from "react";
import "../Rejoindre/Rejoindre.css";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import { Link } from "react-router-dom";

const offres = [
  {
    titre: "Formateur Manager",
    icon: "fa-solid fa-chalkboard-user",
    description:
      "Vous accompagnez les équipes commerciales sur le terrain et participez à leur montée en compétence. Votre rôle est de former, suivre et transmettre les bonnes méthodes pour améliorer les performances.",
  },
  {
    titre: "Manager Commercial",
    icon: "fa-solid fa-briefcase",
    description:
      "Vous encadrez une équipe commerciale et suivez les objectifs de vente. Vous êtes présent sur le terrain pour motiver, organiser et aider les commerciaux à progresser.",
  },
  {
    titre: "Manager Réseau",
    icon: "fa-solid fa-network-wired",
    description:
      "Vous développez et structurez le réseau commercial Enerchoice. Vous assurez le lien entre les équipes, les partenaires et les différents points de vente.",
  },
  {
    titre: "Commercial",
    icon: "fa-solid fa-handshake",
    description:
      "Vous représentez Enerchoice auprès des clients et présentez nos solutions avec clarté. Votre mission est d’écouter, conseiller et accompagner chaque client dans sa démarche.",
  },
];

const Rejoindre = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [offreChoisie, setOffreChoisie] = useState(null);

  const ouvrirModal = (offre) => {
    setOffreChoisie(offre);
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
            <p>Bénéficiez d’opportunités d’évolution et de formations continues.</p>
          </div>

          <div className="avantageCard">
            <i className="fa-solid fa-heart"></i>
            <h3>Équilibre</h3>
            <p>Nous favorisons l’équilibre entre vie professionnelle et vie personnelle.</p>
          </div>
        </div>
      </section>

      <section className="offresSection">
        <h2>Nos offres d’emploi</h2>

        <p>
          Découvrez nos offres ouvertes et trouvez votre place au sein de
          l’aventure Enerchoice.
        </p>

        <div className="offresList">
          {offres.map((offre, index) => (
            <div className="offre" key={index}>
              <div className="offreLeft">
                <i className={offre.icon}></i>
                <p>{offre.titre}</p>
              </div>

              <div className="offreLocation">
                <i className="fa-solid fa-location-dot"></i>
                <p>Île-de-France</p>
              </div>

              <button onClick={() => ouvrirModal(offre)}>Voir l’offre</button>
            </div>
          ))}
        </div>
      </section>

      {modalOpen && offreChoisie && (
        <div className="modalOverlay">
          <div className="modalBox">
            <button className="closeModal" onClick={fermerModal}>
              ×
            </button>

            <div className="modalIcon">
              <i className={offreChoisie.icon}></i>
            </div>

            <h2>{offreChoisie.titre}</h2>

            <p className="modalLocation">
              <i className="fa-solid fa-location-dot"></i> Île-de-France
            </p>

            <p className="modalDescription">{offreChoisie.description}</p>

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