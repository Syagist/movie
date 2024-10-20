import APP_COLORS from "constants/colors";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledImageError = styled.div`
  width: 100%;
  height: 100%;
  color: ${APP_COLORS.error};
`;
export const StyledImagePlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 1.2rem;
  color: gray;
  padding: 20px;

  .loader {
    display: flex;
    align-items: center;

    div {
      width: 10px;
      height: 10px;
      margin: 0 5px;
      background-color: gray;
      border-radius: 50%;
      animation: ${bounce} 0.6s infinite alternate;
    }

    div:nth-child(2) {
      animation-delay: 0.2s;
    }

    div:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;
