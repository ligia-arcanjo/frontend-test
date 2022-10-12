import React, { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';

function FilterInput() {
  const {
    createNameFilter,
    createDirectorFilter,
    createOrderDateFilter,
  } = useContext(FilmsContext);

  return (
    <div>
      <label htmlFor="search-name">
        Search by name:
        <input
          id="search-name"
          type="text"
          onChange={(event) => createNameFilter(event.target.value)}
        />
      </label>

      <label htmlFor="search-director">
        Search by director:
        <input
          id="search-director"
          type="text"
          onChange={(event) => createDirectorFilter(event.target.value)}
        />
      </label>

      <label htmlFor="release-date-input">
        Order by release date:
        <input
          id="release-date-input"
          type="checkbox"
          name="order-date"
          onChange={(event) => createOrderDateFilter(event.target.checked)}
        />
      </label>
    </div>
  );
}

export default FilterInput;
