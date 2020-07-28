import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovie } from "../services/fakeMovieService";

class MovieDetails extends Component {
  componentDidMount() {
    const genres = getGenres();
    this.setState({
      genres,
    });

    const movie_Id = this.props.match.params.id;
    if (movie_Id === "new") return;

    const movie = getMovie(movie_Id);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({
      data: this.mapToViewModel(movie),
    });
  }
  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  render() {
    const { match, history } = this.props;
    return (
      <div>
        <h1>Movies details: {match.params.id} </h1>
        <button className="bth btn-primary" onClick={() => history.push("/")}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
