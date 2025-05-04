import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Components.css';
import Logo from '../img/logo.png'

export default function Footer(){
    return(
        <>
            <footer>
                <div className="background-direitos">
                    <p className="direitos">
                    Copyright 2025 © Todos os direitos reservados.
                    </p>
                </div>
        </footer>
        </>
    )
}