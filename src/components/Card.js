import React from "react";
import {Link} from "react-router-dom";
import "../styles/components/Card.css";

function Card(props) {
    return (
        <div className="Card">
            <Link to={`/logement/${props.id}`}>
                <div className="Card-image-wrapper">
                    <img src={props.img} alt={props.title}/>
                    <div className="Card-overlay"></div>
                    <p>{props.title}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;    