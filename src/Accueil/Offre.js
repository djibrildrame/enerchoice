import React from 'react';
import "../Accueil/Accueil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faChartLine } from "@fortawesome/free-solid-svg-icons";
import convial from "../Image/Capture d’écran 2026-02-22 à 16.12.58.png";




const Offre = () => {
  return (
    <div>
      <h2 className='offre'>Les avantages</h2>
      <p>L'occasion de faire une grande carrière</p>
      

<div className='offre-icons'>



      <div className='objectif'>
        <FontAwesomeIcon className="offre-icon" icon={faMoneyBill} />

        <div>
          <h2>Gagner beaucoup d'argent</h2>
          <h4>Touchez entre 5000 à 2000 euros</h4>


        </div>
      </div>


      <div className='objectif'>
       <FontAwesomeIcon className="offre-icon" icon={faChartLine} />
        <div>
         <h2>Perspective d'évolution</h2>
         <h4>Possibilité d'avoir une équipe</h4>


        </div>
      </div>
      </div>

      <div>
        <img src={convial} className='convivial' alt='image convivial'/>
        <img src={convial} className='convivial' alt='image convivial'/>
      </div>



  </div>
  );
};

export default Offre;