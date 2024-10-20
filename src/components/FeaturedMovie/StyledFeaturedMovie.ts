import APP_COLORS from "constants/colors";
import APP_SIZES from "constants/sizes";
import styled from "styled-components";

export const StyledFuturedMovie = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const StyledFuturedMovieCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 20;
`;

export const StyledFuturedMovieContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 32px;
  padding-left: 20px;
  width: 100%;
  bottom: 0;
  z-index: 100;
`;

export const StyledButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledTitle = styled.h1`
  font-size: ${APP_SIZES.fonts.extraLarge};
  color: ${APP_COLORS.white};
`;

export const StyledDescription = styled.p`
  font-size: ${APP_SIZES.fonts.regular};
  color: ${APP_COLORS.white};
`;
