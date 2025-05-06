import React from 'react';

import '../styles/App.css';
import Logo from '../img/logo.png'

export default function Header(){
    return(
        <>
            <header>
                <div class="content-cabecalho">
                    <div class="esquerdo-header">
                        <img src={Logo} alt="Logo do site"/>
                    </div>
                    <div class="direito-header">
                        <nav class="links-cabecalho">
                            <a href="/">Início</a>
                            <a href="/quiz">Quiz</a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

