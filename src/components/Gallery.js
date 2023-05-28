import React from "react";
import "../styles/components/Gallery.css";
import Card from "../components/Card"
import {logementList} from "../data/logementList"

function Gallery() {
    return (
        <div className="Gallery">
            <div className="Container">
                {logementList.map((Logement) => (
                    <Card 
                        key={Logement.id}
                        id={Logement.id}
                        title={Logement.title}
                        img={Logement.cover}
                    />
                    ))
                }
            </div>
        </div>
    ); 
}
export default Gallery;    