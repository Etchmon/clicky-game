import React from "react";
import "./scoreboard.css";

const Scoreboard = props => (
    <div className="jumbotron">
        <h1>Welcome to Poke-Swap</h1>
        <p>Score: {props.matches}</p>
        <p>Top Score{props.highScore}</p>
        <p>Try not to click the same pokemon more than once!</p>
    </div>
);

export default Scoreboard;