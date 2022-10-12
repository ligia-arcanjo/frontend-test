import React, { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import CardFilm from '../components/CardFilm';
import FilterInput from '../components/FilterInput';

function Films() {
  const {
    filmList, nameFilter, directorFilter, orderDateFilter,
  } = useContext(FilmsContext);
  let allFilms = [...filmList];

  const renderFilms = () => {
    if (orderDateFilter) {
      allFilms.sort((a, b) => Number(b.release_date) - Number(a.release_date));
    }
    if (directorFilter) {
      allFilms = allFilms.filter(
        (film) => film.director.toLowerCase().includes(directorFilter.toLowerCase()),
      );
    }
    if (nameFilter) {
      allFilms = allFilms.filter(
        (film) => film.title.toLowerCase().includes(nameFilter.toLowerCase()),
      );
    }

    return allFilms.map((film) => (
      <CardFilm
        key={film.id}
        title={film.title}
        banner={film.movie_banner}
        description={film.description}
      />
    ));
  };

  return (
    <>
      <div>Films</div>

      <FilterInput />

      {
        renderFilms()
      }
    </>
  );
}

export default Films;
