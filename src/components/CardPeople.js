import React from 'react';
import PropTypes from 'prop-types';

import '../css/CardPeople.css';

function CardPeople({
  name, age, gender, eyeColor, hairColor,
}) {
  return (
    <div className="card-people">
      <p className="person-name">{name}</p>
      <p>{`Gender: ${gender}`}</p>
      <p>{`Age: ${age}`}</p>
      <p>{`Eye: ${eyeColor}`}</p>
      <p>{`Hair: ${hairColor}`}</p>
    </div>
  );
}

CardPeople.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
};

export default CardPeople;
