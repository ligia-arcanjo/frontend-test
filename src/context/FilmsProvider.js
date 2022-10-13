import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from './FilmsContext';
import { fetchFilms, fetchPeople } from '../services/apiGhibli';

function FilmsProvider({ children }) {
  const [filmList, setFilmList] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [directorFilter, setDirectorFilter] = useState('');
  const [orderDateFilter, setOrderDateFilter] = useState(false);
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    fetchFilms().then((response) => {
      setFilmList(response);
    });

    fetchPeople().then((response) => {
      setPeopleList(response);
    });
  }, []);

  const createNameFilter = (nameInputValue) => setNameFilter(nameInputValue);

  const createDirectorFilter = (directorInputValue) => setDirectorFilter(directorInputValue);

  const createOrderDateFilter = (checkboxValue) => setOrderDateFilter(checkboxValue);

  const contextValue = useMemo(() => (
    {
      filmList,
      createNameFilter,
      nameFilter,
      createOrderDateFilter,
      orderDateFilter,
      createDirectorFilter,
      directorFilter,
      peopleList,
    }
  ), [filmList, nameFilter, orderDateFilter, directorFilter, peopleList]);

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
