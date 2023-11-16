// Formato de Uso de CSS para evitar vazar a outas páginas

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importe os estilos do carrossel
import { Carousel } from 'react-responsive-carousel';

import React from 'react';
import './Home.module.css';
import Imagem1 from '../Home/imagens/imagem1.png'
import Imagem2 from '../Home/imagens/imagem2.png'
import Imagem3 from '../Home/imagens/imagem3.png'

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Carousel>
            <div>
                <center><img src={Imagem1} alt="Placa solar" width={600} height={500}/></center>
            </div>
            <div>
                <center><img src={Imagem2} alt="Segunda Placa solar" width={600} height={500}/></center>
            </div>
            <div>
                <center><img src={Imagem3} alt="Terceira Placa solar" width={600} height={500}/></center>
            </div>
            </Carousel>

            <div className="content">
                <h4>A energia solar: uma fonte renovável e sustentável</h4>
                <p>
                    A energia solar é uma fonte alternativa, renovável e ecologicamente sustentável que deriva da radiação eletromagnética emitida diariamente pelo sol.
                    Ela oferece uma solução limpa e acessível para suprir as necessidades de eletricidade e calor.
                </p>
                <p>
                    Com o advento das tecnologias solares, é possível aproveitar essa energia de várias maneiras, como aquecedores solares, painéis fotovoltaicos e usinas heliotérmicas.
                    Os painéis fotovoltaicos convertem diretamente a luz solar em energia elétrica, alimentando residências, empresas e indústrias.
                </p>
                <p>
                    A energia solar fotovoltaica gera uma corrente elétrica quando os fótons provenientes da luz solar atingem os painéis solares.
                    Essa forma de energia oferece não apenas geração de eletricidade, mas uma fonte sustentável e amiga do meio ambiente.
                </p>
                <p>
                    Ao adotar sistemas fotovoltaicos, não apenas reduzimos a dependência de fontes não renováveis, mas também contribuímos para a mitigação dos impactos ambientais, tornando nosso futuro energético mais limpo e sustentável.
                </p>
                </div>
                <br></br>
            <div>
            <center><Link to="/about" className='botaoSaibaMais'> Saiba mais </Link></center>
        </div>
    </div>
    )
}
export default Home