import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from '../context/FilmsContext';

import '../css/FilterInput.css';

function FilterInput({ page }) {
  const {
    createNameFilter,
    createDirectorFilter,
    createOrderDateFilter,
  } = useContext(FilmsContext);

  return (
    <div className="filters-container">
      <label htmlFor="search-name">
        Search by name
        <input
          id="search-name"
          type="text"
          onChange={(event) => createNameFilter(event.target.value)}
        />
      </label>

      {
        page === 'films'
          && (
            <label htmlFor="search-director">
              Search by director
              <input
                id="search-director"
                type="text"
                onChange={(event) => createDirectorFilter(event.target.value)}
              />
            </label>
          )
      }

      {
        page === 'films'
        && (
          <label htmlFor="release-date-input" className="release-date-input">
            Order by release date
            <input
              id="release-date-input"
              type="checkbox"
              name="order-date"
              onChange={(event) => createOrderDateFilter(event.target.checked)}
            />
          </label>
        )
      }
    </div>
  );
}

FilterInput.propTypes = {
  page: PropTypes.string.isRequired,
};

export default FilterInput;
