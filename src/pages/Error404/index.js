import React from "react";
import {Link} from 'react-router-dom'
import Header from "../../components/Header";
import "../../styles/pages/Error.css";


function Error404() {
  return (
    <div>
      <Header />
      <main>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">
          <span>Retourner sur la page d´acceuil</span>
        </Link>
      </main>
    </div>
  );
}
  
export default Error404;