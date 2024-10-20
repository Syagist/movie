import { Movie } from "models/Movie/Movie";

export const sortMoviesByLastClicked = (movies: Movie[]) => {
  const lastClickedId = sessionStorage.getItem("lastClickedMovie");
  if (lastClickedId) {
    const lastClickedMovie = movies.find((movie) => movie.Id === lastClickedId);
    const otherMovies = movies.filter((movie) => movie.Id !== lastClickedId);

    if (lastClickedMovie) {
      return [lastClickedMovie, ...otherMovies];
    }
  }
  return movies;
};
