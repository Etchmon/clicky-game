import React from "react";
import "./card.css";
const Card = props => (

        <div className="card">
            <div key={props.id}
                className="chi-card"
                style={{ backgroundImage: `url("${props.image}")` }}
                onClick={() => alert("Sup Travis, Tanner, and/or Mark")}
            >
                <p>{props.name}</p>
            </div>
        </div>


);

export default Card;