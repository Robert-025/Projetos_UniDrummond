import '../styles/test.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import {  useRef } from 'react';
import Logo from '../img/logo.png'

export default function Navbar() {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toogle("responsive_nav");
    }

    return (
        <header>
            <div className="content-cabecalho">
                <div className="esquerdo-header">
                    <img src={Logo} alt="Logo do site" />
                </div>
                <div className="direito-header">
                    <nav className="links-cabecalho" ref={navRef}>
                        <a href="/">Início</a>
                        <a href="/quiz">Quiz</a>
                        <a href="/about">Sobre</a>
                        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                            <FaTimes   />
                        </button>
                    </nav>
                    <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                        <FaBars />
                    </button>
                </div>
            </div>
        </header>
    );
}