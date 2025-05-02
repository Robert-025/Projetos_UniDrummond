import React from 'react';
import Questions from './Questions.js'; 

import { Link } from 'react-router-dom';

import '../styles/Quiz.css';
import Logo from '../img/logo.png'

export default function Quiz(){
    return(
        <div className='body'>
        <header>
          <div className="content-cabecalho">
            <div className="esquerdo-header">
              <img src={Logo} alt="Logo do site" />
            </div>
            <div className="direito-header">
              <nav className="links-cabecalho">
                <a href="/">Início</a>
                <a href="/quiz">Quiz</a>
              </nav>
            </div>
          </div>
        </header>
  
        <main className='main-quiz'>
          <div className="content">
            <div className="espaco-titulo">
              <div className="titulo">
                <h1>Quiz</h1>
              </div>
            </div>
  
            <Questions />
  
            <div className="espaco-vazio"></div>
          </div>
        </main>
  
        <footer>
          <div className="background-direitos">
            <p className="direitos">
              Copyright 2025 © Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    );
}