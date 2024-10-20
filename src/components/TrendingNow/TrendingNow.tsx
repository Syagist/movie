import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie } from "models/Movie/Movie";
import TrendingNowItem from "components/TrandingNowItem/TrandingNowItem";
import { StyledTrendingNow } from "./StyledTrendingNow";

interface TrendingNowProps {
  trendingNowMovies: Movie[];
  onItemClick: (movie: Movie) => void;
}

const TrendingNow: React.FC<TrendingNowProps> = ({
  trendingNowMovies,
  onItemClick,
}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  };

  return (
    <StyledTrendingNow>
      {trendingNowMovies.length && (
        <Slider {...settings}>
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
