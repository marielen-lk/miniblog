import React from 'react';
import styles from './About.module.css';
import Quiz from '../../../componentes/Quiz'; // Certifique-se de ajustar o caminho do arquivo conforme necessário

const About = () => {

  const vantagensFotovoltaicas = [
    'Economia de custos a longo prazo', <br></br>,
    'Retorno sobre o investimento (ROI)',<br></br>,
    'Redução da dependência da rede elétrica',<br></br>,
    'Valorização do imóvel',<br></br>,
    'Sustentabilidade e redução da pegada de carbono',<br></br>,
    'Incentivos e subsídios',<br></br>,
    'Baixa manutenção',<br></br>,
    'Durabilidade e longa vida útil',<br></br>,
    'Independência energética',<br></br>,
    'Adaptação e escalabilidade'
  ];
  return (
    <div className={styles.about}>
      <h3>O que é energia fotovoltaica?</h3>
      <p>
        Energia fotovoltaica é a energia elétrica produzida a partir da luz solar, e pode ser gerada mesmo em dias nublados ou chuvosos.
        Quanto maior for a radiação solar, maior será a quantidade de eletricidade produzida.
        A energia fotovoltaica é considerada uma fonte de energia alternativa, renovável, limpa e sustentável.
      </p>

      <h3>Para que serve a placa de energia fotovoltaica?</h3>
      <p>A placa de energia fotovoltaica é o equipamento utilizado para captar a energia do sol e iniciar o processo de transformação em energia elétrica.</p>

      <h3>Qual a eficiência da energia fotovoltaica?</h3>
      <p>
        A produção de energia fotovoltaica é altamente eficiente! A eficiência de uma placa solar representa o seu potencial de conversão da luz solar em energia elétrica por metro quadrado.
      </p>

      {/* Vantagens do sistema fotovoltaico */}
      <h3>Vantagens do Sistema Fotovoltaico</h3>
      <ul>
        {vantagensFotovoltaicas.map((vantagem, index) => (
          <lo key={index}>{vantagem}</lo>
        ))}
      </ul>

    <h4>Teste seu conhecimento sobre Energia Fotovoltaica:</h4>
      {/* Adicione a seção interativa com o componente Quiz aqui */}
      <Quiz></Quiz>
    </div>
  );
};

export default About;
