import React from 'react';
import TMDB from './TMDB';
import FilmRow from  './FilmRow';

const FilmList = () => {
    const filmList = TMDB.films.map((film) => {
    return (
      <FilmRow film={film}/>
    );
  })
   return (
    <section className="film-list">
    <h1 className="section-title">FILMS</h1>
    {filmList}
    </section>
   );
};

export default FilmList;