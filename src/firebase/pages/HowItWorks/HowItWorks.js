import React from 'react';
import styles from './How.module.css';

import BancoDoBrasilLogo from '../../pages/HowItWorks/imagens/banco-do-brasil.png';
import CaixaEconomicaLogo from '../../pages/HowItWorks/imagens/caixa-economica.png';
import SicrediLogo from '../../pages/HowItWorks/imagens/sicredi-logo.png';
import BradescoLogo from '../../pages/HowItWorks/imagens/Bradesco-logo.png';

const HowItWorks = () => {

  const bancoDoBrasilLink = 'https://www.bb.com.br/site/pra-voce/financiamentos/bb-credito-energia-renovavel/';
  const caixaEconomicaLink = 'https://www.caixa.gov.br/energias-renovaveis/Paginas/default.aspx';
  const sicrediLink = 'https://www.sicredi.com.br/coop/expansao/credito-energia-solar/';
  const bradescoLink = 'https://banco.bradesco/html/pessoajuridica/solucoes-integradas/emprestimo-e-financiamento/cdc-energia-fotovoltaica.shtm';

  return (
    <div className='container'>
      <div className='box'>
      <h2>Painéis Solares: Como Funcionam?</h2>
      <p>
        Os painéis solares são dispositivos compostos por células fotovoltaicas, geralmente feitas de silício, que convertem a luz solar em eletricidade. Quando a luz solar incide sobre essas células, os fótons contidos na luz estimulam os elétrons presentes no material semicondutor, gerando uma corrente elétrica. Essa corrente é então convertida por um inversor para ser usada na alimentação de eletricidade em residências, empresas ou na rede elétrica.
      </p>
      <br></br>

      <h2>Tipos de Painéis Fotovoltaicos</h2>
      <p>
        Existem diferentes tipos de painéis solares, cada um com suas características distintas. Os painéis de silício monocristalino possuem alta eficiência e ocupam menos espaço, sendo ideais para áreas limitadas. Já os painéis de silício policristalino são mais acessíveis em termos de custo e têm boa eficiência, sendo uma opção popular para uso residencial. Além disso, os painéis de filme fino são mais flexíveis e podem ser aplicados em superfícies variadas, embora possuam uma eficiência um pouco menor.
      </p>
      <br></br>
      <h2>Como Escolher o Sistema Fotovoltaico</h2>
      <p>
        Ao escolher um sistema solar, é crucial considerar a demanda de energia, o espaço disponível para a instalação dos painéis, o local e a inclinação do telhado, além do orçamento disponível. A avaliação do histórico e da reputação dos fabricantes e instaladores é fundamental para garantir um sistema confiável e durável. Profissionais especializados podem realizar cálculos detalhados para determinar a capacidade e o tipo ideais de sistema solar para atender às necessidades específicas de cada caso.
      </p>
      <br></br>
      <h2>Para Mais Informações</h2>
      <p>
        Ao se cadastrar, é possível obter informações detalhadas sobre os custos envolvidos na aquisição e instalação de um sistema solar. Ficar por dentro das atualizações e tendências do setor de energia solar permitirá tomar decisões mais informadas e adequadas às necessidades individuais.
      </p>
      <br></br>
      <div className={styles.banksSection}>
          <h3>Bancos com Financiamento para Energia Solar:</h3>
          <div className={styles.bankLogos}>
            <a href={bancoDoBrasilLink} target="_blank" rel="noopener noreferrer">
              <img src={BancoDoBrasilLogo} alt="Banco do Brasil" />
            </a>
            <a href={caixaEconomicaLink} target="_blank" rel="noopener noreferrer">
              <img src={CaixaEconomicaLogo} alt="Caixa Econômica" />
            </a>
            <a href={sicrediLink} target="_blank" rel="noopener noreferrer">
              <img src={SicrediLogo} alt="Sicredi" />
            </a>
            <a href={bradescoLink} target="_blank" rel="noopener noreferrer">
              <img src={BradescoLogo} alt="Bradesco" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
