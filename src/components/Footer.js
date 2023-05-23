import React from "react";
import "../styles/components/Footer.css";
import FooterLogo from '../assets/logo-footer.png';


function Footer() {
    return (
        <footer>
             <img src={FooterLogo} alt="logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;