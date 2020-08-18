import React, {Component} from 'react';

class FilmListing extends Component {
    render() {
    return (
        <div className="film-library">
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div>
            {this.props.films.title}
            {this.props.films.map((film) => (
            <li> {film.title} </li>
            ))}
            </div>
        </div>
        </div>
    )
    }
}

export default FilmListing;