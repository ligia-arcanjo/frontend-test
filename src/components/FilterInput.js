import React, { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';

function FilterInput() {
  const { createNameFilter, createOrderDateFilter } = useContext(FilmsContext);

  return (
    <div>
      <label htmlFor="search-input">
        Search by name:
        <input
          id="search-input"
          type="text"
          onChange={(event) => createNameFilter(event.target.value)}
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
