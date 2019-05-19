import React, { Component } from 'react';
import PokeList from './PokeList';
import { pokemonData } from './../services/PokemonData';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons : pokemonData,
    }
    this.setFavorite = this.setFavorite.bind(this);
  }

  setFavorite(event) {
    const name = event.currentTarget.getAttribute('name');
    const ind = this.state.pokemons.findIndex(pokemon => pokemon.name === name);
    console.log(this.state.pokemons[ind].favorite)

    this.setState(prevState => {
      return {
        pokemons: {
          ...prevState.pokemons,
          [prevState.pokemons[ind].favorite]: (prevState.pokemons[ind].favorite === true) ? false : true,
        }
      }
    });    
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="page__title">Mi lista de Pokemon</h1>
        <PokeList 
          data={this.state.pokemons}
          setFavorite={this.setFavorite}
        />
      </React.Fragment>
    );
  }
}

export default App;
