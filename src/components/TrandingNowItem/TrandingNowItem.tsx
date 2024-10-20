import Image from "components/Image/Image";
import useLocalImageFetch from "hooks/useLocalImageFetch";
import { Movie } from "models/Movie/Movie";
import { StyledTrendingNowItem } from "./StyledTrandingNowItem";

interface TrendingNowItemProps {
  movie: Movie;
  onItemClick: (movie: Movie) => void;
}

const TrendingNowItem: React.FC<TrendingNowItemProps> = ({
  movie,
  onItemClick,
}) => {
  const { imageSrc, error, isLoading } = useLocalImageFetch(movie.CoverImage);
  return (
    <StyledTrendingNowItem
      onClick={() => {
        onItemClick(movie);
      }}
    >
      <Image
        imageSrc={imageSrc}
        error={error}
        alt={movie.TitleImage}
        isLoading={isLoading}
      />
    </StyledTrendingNowItem>
  );
};

export default TrendingNowItem;
