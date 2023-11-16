import React from 'react';
import styles from './Portifolio.module.css';


import Image1 from '../../pages/Portifolio/imagens/image1.png';
import Image2 from '../../pages/Portifolio/imagens/image2.jpg';
import Image3 from '../../pages/Portifolio/imagens/image3.jpg';

const Portifolio = () => {
  return (
    <div className={styles.container}>
      {/* Primeira linha */}
      <div className={styles.imageRow}>
        {Array(5).fill().map((_, index) => (
          <div key={`image1_${index}`} className={styles.imageWithText}>
            <img src={Image1} alt={`Imagem 1 - ${index + 1}`} className={styles.portfolioImage} />
            <p className={styles.imageText}>Gerador Fotovoltaico</p>
          </div>
        ))}
      </div>
    {/* Segunda linha */}
    <div className={styles.imageRow}>
        {Array(5).fill().map((_, index) => (
          <div key={`image2_${index}`} className={styles.imageWithText}>
            <img src={Image2} alt={`Imagem 2 - ${index + 1}`} className={styles.portfolioImage} />
            <p className={styles.imageText}>Placa Solar</p>
          </div>
        ))}
      </div>

    {/* Terceira linha */}
    <div className={styles.imageRow}>
        {Array(5).fill().map((_, index) => (
          <div key={`image3_${index}`} className={styles.imageWithText}>
            <img src={Image3} alt={`Imagem 3 - ${index + 1}`} className={styles.portfolioImage} />
            <p className={styles.imageText}>Inversor</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portifolio;