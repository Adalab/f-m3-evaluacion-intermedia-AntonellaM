import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Pokemon.scss';

library.add(faStar)

class Pokemon extends Component {

  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
    this.state = {
      selected: false,
    }
  }

  handlerClick() {
    this.setState((prevState, props) => {
      return {
        selected: prevState.selected ? false : true,
      };
    });
  }

  render() {
    const {
      name,
      types,
      url
    } = this.props;
    const selectedClass = this.state.selected ? 'card__favorite--selected' : 'card__favorite';
    return (
      <div className="card">
        <FontAwesomeIcon onClick={this.handlerClick} className={selectedClass} icon="star" />
        <img className="card__image" src={url} alt={name}/>
        <h2 className="card__title">{name}</h2>
        <div className="card__footer">
          {types.map(type => {
            return <p className="card__footer--type">{type.toUpperCase()  }</p>;
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