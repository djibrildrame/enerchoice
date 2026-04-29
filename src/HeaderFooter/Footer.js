import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <a href="/" className="footer__brand">
            <span className="footer__brand-mark"></span>
            <span className="footer__brand-text">EnerChoice</span>
          </a>

          <nav className="footer__nav">
            <a href="/">Accueil</a>
            <a href="/partenariats">Partenariats</a>
            <a href="/galerie">Galerie</a>
            <a href="/recrutement">Recrutement</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>

        <div className="footer__middle">
          <p className="footer__text">
            Intermédiaire en énergie, nous accompagnons nos partenaires avec une
            approche claire, humaine et professionnelle.
          </p>

          <div className="footer__contact">
            <a href="tel:+33123456789">01 23 45 67 89</a>
            <a href="mailto:contact@enerchoice.fr">contact@enerchoice.fr</a>
            <span>Île-de-France</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 EnerChoice</span>

          <div className="footer__legal">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/confidentialite">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;