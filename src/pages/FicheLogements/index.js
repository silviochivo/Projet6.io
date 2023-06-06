import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import {logementList} from "../../data/logementList"
import Collapse from "../../components/Collapse";
import "../../styles/pages/FicheLogements.css";
import Error404 from "../Error404";


function FicheLogements() {

  const InfoURL = useParams ();
  //returne Key / value de l´URL

  const FilteredLogements = logementList.filter (ListeLogements => ListeLogements.id === InfoURL.id);
  console.log(InfoURL)
  console.log(logementList.filter(logement => logement.id==InfoURL.id))
  
  if (FilteredLogements.length === 0) {
    // Redirection vers la page ERREUR
    return <Error404 />;
  }
  
    return (
      <div>
        <Header />

        {FilteredLogements.map((logement) => (
          <Carousel
            key={logement.id}
            images={logement.pictures} 
          />
        ))}

        {FilteredLogements.map((logement) => (
          <div className="Info-Container" key={logement.id}>
            <Collapse
              title="Description"
              content={logement.description}
            />

            <Collapse
              title="Équipements"
              content={
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
              key={logement.id}
            />

          </div>
        ))}

        <Footer />
      </div>
    );
   }
  
  export default FicheLogements;