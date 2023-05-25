import React from "react";
import "../styles/components/Banner.css";


function Banner(props) {
    return (
        <div className="Banner">
            <img src={props.img} alt={props.name}/>
            <div className="Banner-Text">
                {props.title ? <h1>{props.title}</h1> : null}
            </div>
        </div>
    );
}

export default Banner;