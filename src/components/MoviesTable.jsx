import React, { Component } from "react";
import Liked from "../common/liked";

import { Link } from "react-router-dom";

class MoviesTable extends Component {
  renderMovies = (movie) => {
    return (
      <tr key={movie._id}>
        <td>
          <Link to={`/movieDetail/${movie._id}`}>{movie.title}</Link>
        </td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Liked liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        </td>
        <td>
          <button
            onClick={() => this.props.onDeleteMovies(movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  render() {
    const { movies } = this.props;
    return (
      <div>
        <Link to="/movies/new">
          <button style={{ marginBottom: 20 }} className="btn btn-primary">
            New Movie
          </button>
        </Link>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{movies.map((movie) => this.renderMovies(movie))}</tbody>
        </table>
      </div>
    );
  }
}

export default MoviesTable;
