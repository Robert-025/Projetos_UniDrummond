import Malcoln from '../img/malcoln.png'
import Robert from '../img/robert.png'
import Pulu from '../img/pulu.png'
import Gustavo from '../img/gustavo.png'

import { Link } from 'react-router-dom';

import Header from './Header.js';
import Footer from './Footer.js';

import '../styles/App.css';

export default function About() {
    return (
        <div className='body'>

            <Header />

            <main className='main-home'>
                <div className="content">
                    <div className="conteudo-titulo">
                        <div className="titulo">
                            <h1>Sobre os Integrantes</h1>
                        </div>
                    </div>
                    <div className="conteudo-dados">
                        <div className="frases-sobre">
                            <img src={Robert} alt="Foto do integrante Robert Sena" />
                            <div className='info-pessoal'>
                                <p>
                                    Robert Sena Santos, 21 anos, Brasileiro
                                </p>
                                <Link 
                                className='linkedin'
                                to="https://www.linkedin.com/in/robert-sena-940724210/">
                                    Meu LinkedIn
                                </Link>
                                <p>
                                    Entrei na área de Análise e Desenvolvimento de Sistemas motivado pela minha paixão por tecnologia, pelo desejo de entender como as coisas funcionam por trás das telas e pela vontade de criar soluções que façam a diferença. Já tenho um Técnico de Desenvolvimento de Sistemas pelo SENAI, onde obtive grandes experiências. Estou me formando em ADS no fim do primeiro semestre de 2025.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="conteudo-dados">
                        <div className="frases-sobre">
                            <img src={Pulu} alt="Foto do integrante Caio Dias" />
                            <div className='info-pessoal'>
                                <p>
                                    Robert Sena Santos, 21 anos, Brasileiro
                                </p>
                                <p>
                                    linkedin.com/in/robert-sena-940724210/
                                </p>
                                <p>
                                    Entrei na área de Análise e Desenvolvimento de Sistemas motivado pela minha paixão por tecnologia, pelo desejo de entender como as coisas funcionam por trás das telas e pela vontade de criar soluções que façam a diferença na vida das pessoas. Já tenho um Técnico de Desenvolvimento de Sistemas pelo SENAI, onde obtive grandes experiências. Estou me formando em ADS no fim deste semetre.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="conteudo-dados">
                        <div className="frases-sobre">
                            <img src={Malcoln} alt="Foto do integrante Malcoln França" />
                            <div className='info-pessoal'>
                                <p>
                                    Robert Sena Santos, 21 anos, Brasileiro
                                </p>
                                <p>
                                    linkedin.com/in/robert-sena-940724210/
                                </p>
                                <p>
                                    Entrei na área de Análise e Desenvolvimento de Sistemas motivado pela minha paixão por tecnologia, pelo desejo de entender como as coisas funcionam por trás das telas e pela vontade de criar soluções que façam a diferença na vida das pessoas. Já tenho um Técnico de Desenvolvimento de Sistemas pelo SENAI, onde obtive grandes experiências. Estou me formando em ADS no fim deste semetre.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="conteudo-dados-sobre">
                        <div className="frases-sobre">
                            <img src={Gustavo} alt="Foto do integrante Gustavo trevisani" />
                            <div className='info-pessoal'>
                                <p>
                                    Robert Sena Santos, 21 anos, Brasileiro
                                </p>
                                <p>
                                    linkedin.com/in/robert-sena-940724210/
                                </p>
                                <p>
                                    Entrei na área de Análise e Desenvolvimento de Sistemas motivado pela minha paixão por tecnologia, pelo desejo de entender como as coisas funcionam por trás das telas e pela vontade de criar soluções que façam a diferença na vida das pessoas. Já tenho um Técnico de Desenvolvimento de Sistemas pelo SENAI, onde obtive grandes experiências. Estou me formando em ADS no fim deste semetre.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

        </div>
    )
}