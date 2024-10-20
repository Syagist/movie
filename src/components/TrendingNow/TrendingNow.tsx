import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie } from "models/Movie/Movie";
import TrendingNowItem from "components/TrandingNowItem/TrandingNowItem";
import { StyledTrendingNow } from "./StyledTrendingNow";
import { sliderSettings } from "constants/appConstants";

interface TrendingNowProps {
  trendingNowMovies: Movie[];
  onItemClick: (movie: Movie) => void;
}

const TrendingNow: React.FC<TrendingNowProps> = ({
  trendingNowMovies,
  onItemClick,
}) => {
  return (
    <StyledTrendingNow>
      {trendingNowMovies.length && (
        <Slider {...sliderSettings}>
          {trendingNowMovies.map((movie: Movie) => (
            <TrendingNowItem
              movie={movie}
              key={movie.Id}
              onItemClick={onItemClick}
            />
          ))}
        </Slider>
      )}
    </StyledTrendingNow>
  );
};

export default TrendingNow;
