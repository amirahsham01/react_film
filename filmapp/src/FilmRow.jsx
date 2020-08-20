import React, {Component} from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {

    // handleDetailsClick = (film) => {
    //     console.log("Fetching details for " + film);
    // };

    render() {
        const year = new Date(this.props.film.release_date)
        return (
            <div className="film-row" onClick={this.props.handleDetailsClick}>
            <FilmPoster poster_path={this.props.film.poster_path}/>
            <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{year.getFullYear()}</p>
                <Fave 
                onFaveToggle={this.props.onFaveToggle} 
                isFave={this.props.isFave}
                />
            </div>
            </div>
        )
    }
}

export default FilmRow;