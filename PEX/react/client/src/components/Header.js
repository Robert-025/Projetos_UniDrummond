import React from 'react';

import '../styles/App.css';
import Logo from '../img/logo.png'

export default function Header() {
    return (
        <>
            <header>
                <div className="content-cabecalho">
                    <div className="esquerdo-header">
                        <img src={Logo} alt="Logo do site" />
                    </div>
                    <div className="direito-header">
                        <nav className="links-cabecalho">
                            <a href="/">Início</a>
                            <a href="/quiz">Quiz</a>
                            <a href="/about">Sobre</a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

