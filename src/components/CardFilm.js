import React from 'react';
import PropTypes from 'prop-types';

import '../css/CardFilm.css';
import { Link } from 'react-router-dom';

function CardFilm({
  id, title, description, banner,
}) {
  return (
    <Link to={`/films/${id}`}>
      <div className="card-film">
        <p className="title-film">{title}</p>
        <p className="description-film">{description}</p>
        <img className="banner" src={banner} alt={`${title} movie banner`} />
      </div>
    </Link>
  );
}

CardFilm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
};

export default CardFilm;
