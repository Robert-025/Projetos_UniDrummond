import '../styles/App.css';
import Logo from '../img/logo.png'

export default function Header() {
    return (
        <header>
            <div className="content-cabecalho">
                <div className="esquerdo-header">
                    <img src={Logo} alt="Logo do site" />
                </div>
                <div className="direito-header">
                    <nav className="links-cabecalho">
                        <ul>
                            <li><a href="/">Início</a></li>
                            <li><a href="/quiz">Quiz</a></li>                
                            <li><a href="/about">Sobre</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

