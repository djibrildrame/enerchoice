import React from "react";
import Header from "../HeaderFooter/Header";
import Rejoindre from "../Accueil/Rejoindre";
import Offre from "../Accueil/Offre";
import Footer from "../HeaderFooter/Footer";

export const Accueil = () => {
  return (
    <div>
      <Header />
      <main>
        <Rejoindre />
      </main>
      <Offre />

      <Footer/>
    </div>
  );
};

export default Accueil;