import React,  {Component} from 'react';
import PropTypes from 'prop-types';
import './Pokelist.scss'
import Pokemon from './Pokemon';

class PokeList extends Component {
  render() {
    const {data} = this.props;
    return (
      <ul className="pokemon__list">
        {data.map(item => {
          return (
            <li className="pokemon__item" key={`p${item.id}`} id={item.id}>
              <Pokemon url={item.url} name={item.name} types={item.types} />
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