import React, { useState } from 'react';
import Cookies from 'js-cookie';

import style from './Cookies.module.css';

const CookieBanner = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(
    Cookies.get('acceptedCookies')
  );

  const acceptCookies = () => {
    Cookies.set('acceptedCookies', 'true', { expires: 365 });
    setAcceptedCookies(true);
  };

  if (acceptedCookies) {
    return null; // Não exibe o banner se os cookies já foram aceitos.
  }

  return (
    <div className="cookie-banner">
      <p>Este site utiliza cookies para melhorar a sua experiência.</p>
      <center><button className={style.botao} onClick={acceptCookies}>Aceitar</button></center>
    </div>
  );
};

export default CookieBanner;