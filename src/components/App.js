import React, { Component } from 'react';
import PokeList from './PokeList';
import { pokemon } from './../services/PokemonData';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons : pokemon,
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="page__title">Mi lista de Pokemon</h1>
        <PokeList data={this.state.pokemons} />
      </React.Fragment>
    );
  }
}

export default App;
