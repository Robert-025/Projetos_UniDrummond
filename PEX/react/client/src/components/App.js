import { Link } from 'react-router-dom';

import Header from './Header.js'; 
import Footer from './Footer.js'; 

import '../styles/App.css';

export default function App() {
  return (
    <div className='body'>
      
      <Header />
      
      <main className='main-home'>
        <div className="content">
          <div className="espaco-titulo">
            <div className="titulo">
              <h1>Início</h1>
            </div>
          </div>
          <div className="espaco-entrada">
            <div className="entrada">
              <p>
                Seja bem-vindo ao nosso quiz sobre segurança da informação. Esse questionário tem como principal missão saber como estão informados os usuários comuns sobre golpes, invasões e prevenções de vazamento de dados.
                <br /><br />
                Esse projeto foi construído por 4 alunos, que serão descritos abaixo. Esse será nosso projeto de avaliação semestral.
                <br /><br />
                Integrantes:
              </p>
              <p>
                Caio Dias<br />
                Gustavo Trevisani<br />
                Malcoln Franca<br />
                Robert Sena
              </p>
            </div>
          </div>
          <div className="espaco-dados">
            <div className="dados">
              <div className="frases">
                <p>
                  Em um mundo cada vez mais digital, a proteção de seus dados pessoais é uma prioridade, e garantir a segurança da informação nas organizações sociais significa que você pode continuar a confiar no serviço oferecido, sabendo que suas informações estão sendo tratadas com o máximo de cuidado.
                </p>
                <p>
                  Os golpes digitais estão se tornando cada vez mais sofisticados, e muitos tentam se disfarçar de ações legítimas de organizações sociais, enganando pessoas inocentes a fornecerem informações pessoais e financeiras. Seja por e-mails, mensagens ou sites falsos, os criminosos cibernéticos tentam enganar você para roubar dados importantes. Para se proteger, é fundamental verificar sempre a origem de qualquer comunicação que solicite dados sensíveis e nunca clicar em links suspeitos.
                </p>
              </div>
            </div>
          </div>
          <div className="espaco-dados">
            <div className="dados">
              <div className="frases">
                <p>
                  A segurança da informação não é apenas uma prática técnica, mas uma questão de respeito e responsabilidade com você, nosso usuário. Ao interagir com organizações sociais, muitas vezes você está fornecendo dados sensíveis, como suas preferências pessoais, informações de contato ou até mesmo detalhes financeiros. Por isso, estamos querendo saber o quanto esses dados.
                </p>
                <p>
                  A segurança da informação é muito importante, pois todos estamos cada vez mais expostos a riscos no mundo digital. O objetivo deste quiz é entender o quanto os usuários comuns sabem sobre golpes, invasões e como proteger seus dados pessoais online. Com tantas atividades acontecendo pela internet, como compras e serviços bancários, as pessoas se tornam alvos fáceis para criminosos digitais. Por isso, é essencial aprender sobre como se proteger desses riscos. Esse é o intuito do nosso quiz.
                </p>
              </div>
            </div>
          </div>
          <div className="espaco-botao">
            <Link to="/quiz">Iniciar o Quiz</Link>
          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
}