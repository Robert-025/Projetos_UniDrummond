import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Components.css';
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

