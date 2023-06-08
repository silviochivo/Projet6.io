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
  //console.log(logementList.filter(logement => logement.id===InfoURL.id))
  
  if (FilteredLogements.length === 0) {
    // Redirection vers la page ERREUR
    return <Error404 />;
  }


  
    return (
      <div>
        <Header />

        {FilteredLogements.map((logement, Logementindex) => (
          <Carousel
            key={`${logement.id}-${Logementindex}`}
            images={logement.pictures} 
          />
        ))}

        <div className="Info-Logements">

          <div className="Left-Info">
            <div className="Nom-Logement">
              {FilteredLogements.map((logement) => (
                <h1 key={`${logement.id}-${logement.title}`}>
                  {logement.title}
                </h1>
              ))}
            </div>

            <div className="Localisation-Logement">
              {FilteredLogements.map((logement) => (
                <h2 key={`${logement.id}-${logement.location}`}>
                  {logement.location}
                </h2>
              ))}
            </div>

            <div className="Tags-Logement">
              {FilteredLogements.map((logement) => (
                logement.tags.map((tag) => (
                  <h2 key={`${logement.id}-${tag}`}>
                    {tag}
                  </h2>
                ))
              ))}
            </div>
          </div>

          <div className="Right-Info">
            <div className="Info-Proprietaire">
              {FilteredLogements.map((logement) => (
                <h3 key={`${logement.id}-${logement.host.name}`}>
                  {logement.host.name}
                </h3>
              ))}

              {FilteredLogements.map((logement) => (
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                key={`${logement.id}+${logement.host.name}`}
              />
              ))}
            </div>

            <div className="Rating-Box">
              {FilteredLogements.map((logement) => (
                <Rating
                  key={`${logement.id}-${logement.rating}`}
                  Note={logement.rating}
                />
              ))}
            </div>
          </div>

        </div>

        {FilteredLogements.map((logement, Logindex) => (
          <div className="Info-Container" key={`${logement.id}-${Logindex}`}>
            <Collapse
              title="Description"
              key={`${logement.id}-${Logindex}-description`}
              content={logement.description}
            /> 

            <Collapse
              title="Équipements"
              key={`${logement.id}-${Logindex}-equipments`}
              content={
                <>
                  {logement.equipments.map((equipment, equipmentIndex) => (
                    <React.Fragment  key={`${logement.id}-${Logindex}-${equipment}-${equipmentIndex}`}>
                      {equipment}
                      <br />
                    </React.Fragment>
                  ))}
                </>
              }
              
            />

          </div>
        ))}

        <Footer />
      </div>
    );
   }
  
  export default FicheLogements;