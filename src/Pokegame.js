import { Component } from "react";
import Pokedex from "./Pokedex";

export default class Pokegame extends Component {
    static defaultProps = {
        pokemonItems: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    };

    render() {
        const handOne = this.props.pokemonItems.sort(() => Math.random() - Math.random()).slice(0, 4);
        const handTwo = this.props.pokemonItems.sort(() => Math.random() - Math.random()).slice(0, 4);

        const handOneTotalExperience = handOne.reduce((total, currenteValue) => { return total + currenteValue['base_experience']; }, 0);

        const handTwoTotalExperience = handTwo.reduce((total, currenteValue) => { return total + currenteValue['base_experience']; }, 0);

        console.log(`handOneTotal: ${ handOneTotalExperience }`);
        console.log(`handTwoTotal: ${ handTwoTotalExperience }`);

        return (
            <div>
                <Pokedex pokemonItems={handOne} isWinner={ handOneTotalExperience >= handTwoTotalExperience } totalExperience={ handOneTotalExperience } />
                <Pokedex pokemonItems={handTwo} isWinner={ handOneTotalExperience <= handTwoTotalExperience } totalExperience={ handTwoTotalExperience } />
            </div>
        )
    }
}