import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchFilmById } from '../services/apiGhibli';

function FilmDetails({ match: { params: { id } } }) {
  const [filmInfo, setFilmInfo] = useState({});

  useEffect(() => {
    fetchFilmById(id).then((response) => {
      setFilmInfo(response);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="film-details-container">
        <p>{filmInfo.title}</p>
        <p>{`Original title: ${filmInfo.original_title_romanised}`}</p>
        <p>{`Realease date: ${filmInfo.release_date}`}</p>
        <span>{filmInfo.description}</span>
        <p>{`Director: ${filmInfo.director}`}</p>
        <p>{`Running time: ${filmInfo.running_time}'`}</p>
        <img src={filmInfo.movie_banner} alt={`${filmInfo.title} movie banner`} />
      </div>
    </>
  );
}

FilmDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FilmDetails;
