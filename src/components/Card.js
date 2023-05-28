import React from "react";
import {Link} from "react-router-dom";
import "../styles/components/Card.css";

function Card(props) {
    return (
        <div className="Card">
            <Link to={`/logement/${props.id}`}>
                <img src={props.img} alt={props.title}/>
                <p>{props.title}</p>
            </Link>
        </div>
    )
}

export default Card;    