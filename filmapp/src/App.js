import React, { Component } from 'react';
import "./normalize.css";
import "./index.css";
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import FilmRow from './FilmRow';
import TMDB from './TMDB';


class App extends Component {
  render() {
    return (
      <div className="film-library">
      <FilmListing films = {TMDB.films}/>
      <FilmDetails />
      </div>
    );
}
}

export default App;
