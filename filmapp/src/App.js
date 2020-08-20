import React, { Component } from 'react';
import "./normalize.css";
import "./index.css";
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    };
  }

  handleDetailsClick = (film) => {
    console.log("Fetching details for " + film);
  };

  handleFaveToggle = (film) => {
    let faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex === -1) {
      faves.push(film);
      console.log(`Adding ${film} to faves...`)
    } else {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film} from faves...`)
    }

    this.setState({ faves });
  }

  render() {
    return (
      <div className="film-library">
      <FilmListing films = {this.state.films} onFaveToggle={this.handleFaveToggle} faves={this.state.faves} handleDetailsClick={this.handleDetailsClick}/>
      <FilmDetails films = {this.state.current}/>
      </div>
    );
}
}

export default App;
