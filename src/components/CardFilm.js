import React from 'react';
import PropTypes from 'prop-types';

import '../css/CardFilm.css';

function CardFilm({ title, description, banner }) {
  return (
    <div className="card-film">
      <p className="title-film">{title}</p>
      <p className="description-film">{description}</p>
      <img className="banner" src={banner} alt={`${title} movie banner`} />
    </div>
  );
}

CardFilm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
};

export default CardFilm;
