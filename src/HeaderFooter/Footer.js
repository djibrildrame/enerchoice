import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerMain">
        <div className="footerLogo">
          <span className="logoIcon">C</span>
          <span>ENERCHOICE</span>
        </div>

        <p className="footerCopyright">
          © 2024 Enerchoice. Tous droits réservés.
        </p>

        <div className="footerSocials">
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-regular fa-envelope"></i>
        </div>
      </div>

      <div className="footerBottom">
        Made with <span>♥</span> by Enerchoice
      </div>
    </footer>
  );
};

export default Footer;