import React from "react";
import {NavLink, useLocation} from 'react-router-dom';
import "../styles/components/Header.css";
import HeaderLogo from '../assets/logo-orange.svg';

function Header() {

    const Location = useLocation();

    return (
        <header>
            <NavLink to="/">
               <img src={HeaderLogo} alt="Retourner à l´Acceuil" />
            </NavLink>
            
            <nav> 
                <ul>
                    <li>
                        <NavLink to="/Home" 
                            className={Location.pathname === "/" || Location.pathname === '/Home/' ? "active" : ""}>
                            Acceuil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About"
                            className={Location.pathname === '/About/' ? "active" : ""}>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
