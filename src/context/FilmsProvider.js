import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from './FilmsContext';
import fetchFilms from '../services/apiGhibli';

function FilmsProvider({ children }) {
  const [filmList, setFilmList] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [orderDateFilter, setOrderDateFilter] = useState(false);

  useEffect(() => {
    fetchFilms().then((response) => {
      setFilmList(response);
    });
  }, []);

  const createNameFilter = (textValue) => setNameFilter(textValue);

  const createOrderDateFilter = (checkboxValue) => setOrderDateFilter(checkboxValue);

  const contextValue = useMemo(() => (
    {
      filmList, createNameFilter, nameFilter, createOrderDateFilter, orderDateFilter,
    }
  ), [filmList, nameFilter, orderDateFilter]);

  return (
    <FilmsContext.Provider value={contextValue}>
      {children}
    </FilmsContext.Provider>
  );
}

FilmsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilmsProvider;
