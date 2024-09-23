import React from 'react';
import { Link } from 'react-router-dom';
import ALA from '/img/ALA.png';
import ATH from '/img/ATH.png';
import ATM from '/img/ATM.png';

const images = [ALA, ATH, ATM];

const ImageButtons = () => {
  return (
    <div>
        
        {images.map((image, index) => (
            <Link to={'/indice/'+ image.replace(/^.*\/(.*)\..*$/, '$1')} className='btn btn-warning'><i className='fa-solid fa-home'></i>
                <button key={index} >
                <img src={image}  style={{ width: '100px', height: '100px' }} />
                </button>
            </Link>
        ))}
    </div>
  );
};

export default ImageButtons;

