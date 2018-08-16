import React, { Component } from "react";
import cards from "../../cards.json";
import Card from "../card/card.js";
import Scoreboard from "../scoreboard";


class Game extends Component {

    state = {
        pokemon: cards,
        matches: 0,
        highScore: 0,
        matchedPokemon: 3,
        click: 0
    }

// mainGame function 
// onClick add 1 to the click state, if click state is greater than 0 tell user they lost,reset score, shuffle divs
// else add 1 to score and shuffle div



    render() {
        return (
            <div className="container">
                <Scoreboard
                    matches={this.state.matches}
                    highScore={this.state.highScore}
                />
                <div className="row">
                    {this.state.pokemon.map(pokemon => (
                        <Card
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            getPokemon={this.getPokemon}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Game;