import React from "react";
import {NavLink} from 'react-router-dom';
import "../styles/components/Header.css";
import HeaderLogo from '../assets/logo-orange.svg';

function Header() {
    return (
        <header>
            <NavLink to="/">
               <img src={HeaderLogo} alt="Logo Kasa" /> 
            </NavLink>
            
            <nav> 
                <ul>
                    <li>
                        <NavLink to="/Home" 
                            className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            Acceuil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About"
                            className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
