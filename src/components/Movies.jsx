import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "../common/Pagination";
import Paginate from "../utils/paginate";
import Genre from "../common/Genre";
import MoviesTable from "../components/MoviesTable";

class Movies extends Component {
  state = {
    Movies: [],
    Genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const Genres = [{ name: "All Movies", _id: "" }, ...getGenres()];
    this.setState({
      Movies: getMovies(),
      Genres,
    });
  }

  handleDelete = (movie) => {
    const movies = this.state.Movies.filter((m) => m._id !== movie._id);
    this.setState({
      Movies: movies,
    });
  };
  handleLike = (movie) => {
    const Movies = [...this.state.Movies];
    const index = Movies.indexOf(movie);
    Movies[index] = { ...movie };
    Movies[index].liked = !Movies[index].liked;
    this.setState({
      Movies,
    });
  };
  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleGenreSelected = (genre) => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1,
    });
  };

  render() {
    const { length: count } = this.state.Movies;
    const { Movies, pageSize, currentPage, Genres, selectedGenre } = this.state;

    if (count === 0) {
      return <h4>There is no movie on this channel</h4>;
    }
    const filtered =
      selectedGenre && selectedGenre._id
        ? Movies.filter((m) => m.genre._id === selectedGenre._id)
        : Movies;

    const movies = Paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <Genre
            genre={Genres}
            selectedGenre={selectedGenre}
            onGenreSelect={this.handleGenreSelected}
          />
        </div>
        <div className="col">
          <h4>Showing {filtered.length} movie on this channel</h4>
          <MoviesTable
            movies={movies}
            onDeleteMovies={this.handleDelete}
            onLike={this.handleLike}
          />

          <Pagination
            currentPage={this.state.currentPage}
            itemCount={filtered.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
