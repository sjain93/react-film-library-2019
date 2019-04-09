import React from 'react';
import FilmList from './FilmListing';


const App = () => {
  return (
    <main className="film-library">
      <FilmList />

        <section className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </section>
    </main>
  );
}

export default App;
