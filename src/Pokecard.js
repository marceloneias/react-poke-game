import { Component } from "react";
import './Pokecard.css';

const POKE_IMG_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonData: props.pokemonData
        }
    }

    lpad(string, padString, length) {
        while (string.length < length)
            string = padString + string;
        return string;
    }

    render() {
        const imgId = this.lpad(this.props.pokemonData.id.toString(), 0, 3);
        const imgSrc = `${POKE_IMG_API}${imgId}.png`

        return (
            <div>
                <div className="Pokecard">
                    <h1 className="Pokecard-title">{this.props.pokemonData.name}</h1>
                    <div className="Pokecard-image">
                        <img className="PokemonImage" src={ imgSrc } alt={this.props.pokemonData.name} />
                    </div>
                    <div className="Pokecard-data">Type: {this.props.pokemonData.type}</div>
                    <div className="Pokecard-data">EXP: {this.props.pokemonData.base_experience}</div>
                </div>
            </div>
        )
    }
}

export default Pokecard;