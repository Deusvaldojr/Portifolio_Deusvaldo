import { Link } from "react-router-dom";
import './style.css';

export const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link style={{textDecoration: 'none', color: '#fff'}} to="/App">Capa</Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'none', color: '#fff'}} to="/">Projeto Estácio</Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'none', color: '#fff'}} to="/ABC">Projeto ABC</Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'none', color: '#fff'}} to="/BF">Projeto Bula fácil</Link>
                </li>
            </ul>
        </nav>
    );
};