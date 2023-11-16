import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import style from '../componentes/MidiaSocial.module.css';

const MidiaSocial = () => {
  return (
    <div className="social-icons">
    <a href="https://twitter.com/seuusuario" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="icon" size={30} />
    </a>
    <a href="https://www.facebook.com/suapagina" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="icon"  size={30}/>
    </a>
    <a href="https://www.instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="icon" size={30}/>
    </a>
  </div>
  );
};

export default MidiaSocial;