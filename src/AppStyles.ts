import APP_COLORS from "constants/colors";
import styled, { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif; 
    background-color: ${APP_COLORS.black}; 
    margin: 0;
    padding: 0;
  }
`;

export const MainContainer = styled.div`
  padding-left: 50px;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;
