import { useEffect, useState } from "react";
import FeaturedMovie from "components/FeaturedMovie/FeaturedMovie";
import SideMenu from "components/SideMenu/SideMenu";
import TrendingNow from "components/TrendingNow/TrendingNow";
import { Movie } from "models/Movie/Movie";
import { sortMoviesByLastClicked } from "helpers/movieSortHelper";
import movieData from "data.json";
import { AppStyles, MainContainer } from "AppStyles";

function App() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>(
    movieData.TrendingNow,
  );

  const [featured, setFeatured] = useState<Movie>(movieData.Featured);

  const onItemClick = (selectedMovie: Movie) => {
    sessionStorage.setItem("lastClickedMovie", selectedMovie.Id);
    setFeatured(selectedMovie);
  };

  useEffect(() => {
    const lastClickedId = sessionStorage.getItem("lastClickedMovie");
    const lastCicked = trendingMovies.find(
      (movie) => movie.Id === lastClickedId,
    );
    if (lastCicked) {
      const sortedMovies = sortMoviesByLastClicked(trendingMovies);

      if (sortedMovies && sortedMovies.length) {
        setTrendingMovies(sortedMovies);
        setFeatured(lastCicked);
      }
    }
  }, [featured]);

  return (
    <>
      <AppStyles />
      <SideMenu />
      <MainContainer>
        <FeaturedMovie featuredMovie={featured} />
        <TrendingNow
          trendingNowMovies={trendingMovies}
          onItemClick={onItemClick}
        />
      </MainContainer>
    </>
  );
}

export default App;
