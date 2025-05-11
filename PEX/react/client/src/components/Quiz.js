import React from 'react';
import Questions from './Questions.js';
import Header from './Header.js';
import Footer from './Footer.js';

import '../styles/App.css';

export default function Quiz() {
  return (
    <div className='body'>
      <Header />

      <main className='main-quiz'>
        <div className="content">
          <div className="conteudo-titulo">
            <div className="titulo">
              <h1>Quiz</h1>
            </div>
          </div>

          <Questions />

          <div className="espaco-vazio"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}