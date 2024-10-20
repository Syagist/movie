import ReactPlayer from "react-player";
import { Movie } from "models/Movie/Movie";
import useLocalImageFetch from "hooks/useLocalImageFetch";
import Image from "components/Image/Image";
import Button from "components/Button/Button";
import APP_COLORS from "constants/colors";
import {
  StyledFuturedMovie,
  StyledTitle,
  StyledDescription,
  StyledFuturedMovieCover,
  StyledFuturedMovieContent,
  StyledButtonBox,
} from "./StyledFeaturedMovie";
import { useState, useRef } from "react";

interface FeaturedMovieProps {
  featuredMovie: Movie;
}

const FeaturedMovie: React.FC<FeaturedMovieProps> = ({ featuredMovie }) => {
  const { imageSrc, error } = useLocalImageFetch(featuredMovie.CoverImage);

  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLDivElement | null>(null);

  const enterFullScreen = () => {
    const playerElement = playerRef.current;
    if (playerElement) {
      playerElement.requestFullscreen();
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);

    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  return (
    <StyledFuturedMovie>
      <StyledFuturedMovieCover>
        <Image
          imageSrc={imageSrc}
          error={error}
          alt={featuredMovie.CoverImage}
        />
      </StyledFuturedMovieCover>
      <StyledFuturedMovieContent>
        <StyledTitle>{featuredMovie.Title}</StyledTitle>
        <StyledDescription>{featuredMovie.Description}</StyledDescription>
        <StyledButtonBox>
          <Button
            text="Play"
            onClick={() => {
              setIsPlaying(true);
            }}
            iconName="play.png"
            styles={{ backgroundcolor: APP_COLORS.white }}
          />
          <Button
            text="More Info"
            onClick={() => console.log("More info clicked")}
            styles={{
              gradient: `linear-gradient(45deg, ${APP_COLORS.lighBlue}, ${APP_COLORS.darkBlue})`,
              color: APP_COLORS.white,
            }}
          />
        </StyledButtonBox>
      </StyledFuturedMovieContent>
      {isPlaying && (
        <div ref={playerRef} style={{ position: "relative", zIndex: 9999 }}>
          <ReactPlayer
            url={featuredMovie.VideoUrl}
            playing={isPlaying}
            muted
            onEnded={handleVideoEnd}
            onReady={() => enterFullScreen()}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      )}
    </StyledFuturedMovie>
  );
};

export default FeaturedMovie;
