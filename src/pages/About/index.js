import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import BannerAbout from "../../assets/banner-about.png";
import Collapse from "../../components/Collapse";
import "../../styles/pages/About.css";

function About() {

  const imgAlt = BannerAbout.split('/').pop().split('.')[0];
  const AboutInfo = [
    {
      titre: "Fiabilite",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      titre: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      titre: "Service",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      titre: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <Header />

      <Banner 
        img={BannerAbout}
        name={imgAlt}
      />

      {AboutInfo.map((e, index) => (
        <Collapse key={index}  
        title={e.titre}
        content={e.description}
      />))}

      <Footer />

    </div>
  );
}
  
export default About;