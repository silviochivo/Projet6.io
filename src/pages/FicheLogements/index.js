import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import {logementList} from "../../data/logementList"
import Collapse from "../../components/Collapse";
import "../../styles/pages/FicheLogements.css";
import Error404 from "../Error404";
import Rating from "../../components/Rating";


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

        <div className="Info-Logements">

          <div className="Left-Info">
            <div className="Nom-Logement">
              {FilteredLogements.map((logement) => (
                <h1 key={logement.id}>
                  {logement.title}
                </h1>
              ))}
            </div>

            <div className="Localisation-Logement">
              {FilteredLogements.map((logement) => (
                <h2 key={logement.id}>
                  {logement.location}
                </h2>
              ))}
            </div>

            <div className="Tags-Logement">
              {FilteredLogements.map((logement) => (
                logement.tags.map((tag, index) => (
                  <h2 key={index}>
                    {tag}
                  </h2>
                ))
              ))}
            </div>
          </div>

          <div className="Right-Info">

            <div className="Info-Proprietaire">
              {FilteredLogements.map((logement) => (
                <h3>
                  {logement.host.name}
                </h3>
              ))}

              {FilteredLogements.map((logement, index) => (
              <img
                src={logement.host.picture}
                key={index}
              />
              ))}
            </div>

            <div className="Rating-Box">
              {FilteredLogements.map((logement, index) => (
                <Rating
                  key={index}
                  Note={logement.rating}
                />
              ))}
            </div>

          </div>

        </div>

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