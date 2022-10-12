import React, { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';

function FilterInput() {
  const { createNameFilter } = useContext(FilmsContext);

  return (
    <label htmlFor="search-input">
      Search:
      <input
        id="search-input"
        type="text"
        onChange={(event) => createNameFilter(event.target.value)}
      />
    </label>
  );
}

export default FilterInput;
