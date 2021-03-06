import React,  {Component} from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './Pokelist.scss'


class PokeList extends Component {
  render() {
    const {
      data,
      setFavorite} = this.props;
    return (
      <ul className="pokemon__list">
        {data.map(item => {
          return (
            <li className="pokemon__item" key={`p${item.id}`} id={item.id}>
              <Pokemon
                url={item.url}
                name={item.name}
                types={item.types}
                favorite={item.favorite}
                setFavorite={setFavorite}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

PokeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default PokeList;