import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.scss';

class Pokemon extends Component {
  render() {
    const {name,
    types,
    url} = this.props;
    return (
      <div className="card">
        <img className="card__image" src={url} alt={name}/>
        <h2 className="card__title">{name}</h2>
        <div className="card__footer">
          {types.map(type => {
            return <p className="card__footer--type">{type.toUpperCase()}</p>;
          })}
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
}

export default Pokemon;