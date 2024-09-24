import React from 'react';
import { Link } from 'react-router-dom';
import './Equipos.css';
import ATH from '/img/Athletic Club.png';
import ATM from '/img/Atlético de Madrid.png';
import OSA from '/img/C.A. Osasuna.png';
import LEG from '/img/CD Leganés.png';
import ALA from '/img/Deportivo Alavés.png';
import BAR from '/img/FC Barcelona.png';
import GET from '/img/Getafe CF.png';
import GIR from '/img/Girona FC.png';
import RAY from '/img/Rayo Vallecano.png';
import CEL from '/img/RC Celta.png';
import ESP from '/img/RCD Espanyol de Barcelona.png';
import MAL from '/img/RCD Mallorca.png';
import BET from '/img/Real Betis.png';
import MAD from '/img/Real Madrid.png';
import RSO from '/img/Real Sociedad.png';
import VLL from '/img/Real Valladolid CF.png';
import SVF from '/img/Sevilla FC.png';
import UDP from '/img/UD Las Palmas.png';
import VAL from '/img/Valencia CF.png';
import VIL from '/img/Villarreal CF.png';


const images = [ALA, ATH, ATM, OSA, BET, LEG, BAR, GET, GIR, RAY, ESP, MAL, MAD, RSO, VLL, SVF, UDP, VAL, VIL, CEL];

const ImageButtons = () => {
  return (
    <div className='equipos'>
        
        {images.map((image, index) => {
          console.log(image)
          if (image != '/img/C.A.%20Osasuna.png') {
            return (
            <Link to={'/indice/'+ image.split('/').pop().split('.')[0]} className='btn'>
                <img src={image}/>
            </Link>)
          } else {
            return(
              <Link to={'/indice/'+ image.replace('/img/', '').replace('.png', '')} className='btn'>
                <img src={image}/>
            </Link>
            )

          }
})}
    </div>
  );
};

export default ImageButtons;

