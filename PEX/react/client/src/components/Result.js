import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

import { Link } from 'react-router-dom';

import '../styles/App.css';

export default function Result() {
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
                    <div className='conteudo-resultado'>
                        <div className='resultado'>
                            <h2>Resultado</h2>
                        </div>
                    </div>
                    <div className="espaco-botao">
                        <Link to="/">Restart</Link>
                    </div>

                    <div className="espaco-vazio"></div>
                </div>
            </main>

            <Footer />

        </div>
    );
}   