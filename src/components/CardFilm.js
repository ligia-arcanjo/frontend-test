import React from 'react';
import PropTypes from 'prop-types';

function CardFilm({ title, description, banner }) {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <img src={banner} alt={`${title} movie banner`} />
    </div>
  );
}

CardFilm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
};

export default CardFilm;
