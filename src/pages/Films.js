import React, { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import CardFilm from '../components/CardFilm';

function Films() {
  const { filmList } = useContext(FilmsContext);

  return (
    <>
      <div>Films</div>

      {
        filmList.length > 0
          && filmList.map((film) => (
            <CardFilm
              key={film.id}
              title={film.title}
              banner={film.movie_banner}
              description={film.description}
            />
          ))
      }
    </>
  );
}

export default Films;
