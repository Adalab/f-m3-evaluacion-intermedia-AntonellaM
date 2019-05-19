import React, { Component } from 'react';
import PokeList from './PokeList';
import { pokemon } from './../services/PokemonData';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.getPokemons = this.getPokemons.bind(this);
    this.getPokemons();
    this.state = {
      pokemons : [],
    }
  }

  getPokemons() {
    this.setState({
      pokemons: { pokemon },
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="page__title">Mi lista de Pokemon</h1>
        <PokeList data={pokemon} />
      </React.Fragment>
    );
  }
}

export default App;
