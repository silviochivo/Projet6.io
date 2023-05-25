import React from "react";
import {Link} from 'react-router-dom';
import "../styles/components/Header.css";
import HeaderLogo from '../assets/logo-orange.svg';

function Header() {
    return (
        <header>
            <Link to="/">
               <img src={HeaderLogo} alt="Logo Kasa" /> 
            </Link>
            
            <nav> 
                <ul>
                    <li>
                        <Link to="/Home">
                        Acceuil
                        </Link>
                    </li>
                    <li>
                        <Link to="/About">
                        A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
