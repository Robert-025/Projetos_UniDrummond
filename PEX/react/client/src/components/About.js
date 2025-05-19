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
                                    Entrei na área de Desenvolvimento de Sistemas motivado pela minha paixão por tecnologia, pelo desejo de entender como as coisas funcionam por trás das telas e pela vontade de criar soluções que façam a diferença. Já tenho um Técnico de Desenvolvimento de Sistemas pelo SENAI, onde obtive grandes experiências, através disso decidi iniciar a graduação na mesma área. Estou me formando em ADS no fim do primeiro semestre de 2025 .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="conteudo-dados">
                        <div className="frases-sobre">
                            <img src={Pulu} alt="Foto do integrante Caio Dias" />
                            <div className='info-pessoal'>
                                <p>
                                    Caio Dias Pulu, 23 anos, Brasileiro
                                </p>
                                <Link
                                    className='linkedin'
                                    to="https://www.linkedin.com/in/caio-pulu-1688791ba/">
                                    Meu LinkedIn
                                </Link>
                                <p>
                                    Atualmente, estou cursando tecnólogo no Centro Universitário Carlos Drummond de Andrade, onde comecei em fevereiro de 2023 e devo me formar em junho de 2025. Iniciei minha carreira em tecnologia por uma curiosidade constante sobre os mecanismos que fazem os sites e sistemas funcionarem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="conteudo-dados">
                        <div className="frases-sobre">
                            <img src={Malcoln} alt="Foto do integrante Malcoln França" />
                            <div className='info-pessoal'>
                                <p>
                                    Malcoln Batista da Silva França, 30 anos, Brasileiro
                                </p>
                                <Link
                                    className='linkedin'
                                    to="https://www.linkedin.com/in/malcoln-batista-da-silva-fran%C3%A7a-98059b53/">
                                    Meu LinkedIn
                                </Link>
                                <p>
                                    Atualmente, estou no 5º e último semestre do curso de Análise e Desenvolvimento de Sistemas na UniDrummond, uma escolha que reflete minha paixão por tecnologia e meu desejo de crescer profissionalmente. Já atuo na área de tecnologia, com foco em Infraestrutura, e decidi investir nessa formação para aprimorar minhas habilidades e me preparar ainda mais para as demandas do mercado de trabalho. Sou dedicado, proativo e estou sempre buscando evoluir, combinando minha experiência prática com o conhecimento acadêmico para construir uma carreira sólida e impactante no setor de tecnologia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="conteudo-dados-sobre">
                        <div className="frases-sobre">
                            <img src={Gustavo} alt="Foto do integrante Gustavo trevisani" />
                            <div className='info-pessoal'>
                                <p>
                                    Gustavo Trevisani Novais, 20 anos, Brasileiro
                                </p>
                                <Link
                                    className='linkedin'
                                    to="https://www.linkedin.com/in/gustavo-trevizani-653a31278/">
                                    Meu LinkedIn
                                </Link>
                                <p>
                                    Desde pequeno, sempre fui fascinado por tecnologia e curioso sobre o funcionamento dos sites e sistemas que usamos no dia a dia. Por isso, decidi investir na área e atualmente estou cursando um tecnólogo na UniDrummond. Comecei minha graduação em fevereiro de 2023 e a previsão é que eu conclua o curso em junho de 2025. Essa jornada tem sido fundamental para aprofundar meus conhecimentos e me preparar para os desafios do mercado de tecnologia.
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