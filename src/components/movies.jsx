import React, { Component } from "react";
import { deleteMovie, getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = { movies: getMovies() };

  onDelete(movieId) {
    deleteMovie(movieId);
    this.setState({ movies: getMovies() });
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) return <p>No movies found.</p>;
    return (
      <React.Fragment>
        <p>Showing {movies.length} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr scope="row" key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.onDelete(movie.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;