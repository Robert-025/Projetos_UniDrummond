import React from 'react';
import Header from './Header.js'; 
import Footer from './Footer.js'; 

import { Link } from 'react-router-dom';

import '../styles/Result.css';
import Logo from '../img/logo.png'

export default function Result(){
    return(
        <div className='body'>

            <Header />

            <main className='main-quiz'>
                <div className="content">
                    <div className="espaco-titulo">
                        <div className="titulo">
                            <h1>Quiz</h1>
                        </div>
                    </div>
        
                    <div className="espaco-vazio"></div>
                </div>
            </main>

            <Footer />

        </div>
    );
}   