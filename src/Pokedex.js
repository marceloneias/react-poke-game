import { Component } from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css'

export default class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonItems: props.pokemonItems,
            totalExperience: props.totalExperience,
            isWinner: props.isWinner
        };
    }

    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>;
        } else {
            title = <h1 className="Pokedex-loser">Loser Hand</h1>;
        }

        return (
            <div>
                <div className="Pokedex">
                    {title}
                    <h4>Total Experience: {this.props.totalExperience}</h4>
                    <div className="Pokedex-cards">
                        {
                            this.props.pokemonItems.map(function (item, index) {
                                return (<Pokecard key={index} pokemonData={item} />)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}