import APP_COLORS from "constants/colors";
import APP_SIZES from "constants/sizes";
import styled from "styled-components";

export const StyledButton = styled.button<{
  paddingX?: string;
  paddingY?: string;
  backgroundcolor?: string;
  gradient?: string;
  fontSize?: string;
  color?: string;
  iconSize?: string;
  iconColor?: string;
}>`
  display: flex;
  align-items: center;
  border-radius: 18px;
  justify-content: center;
  padding: ${(props) =>
    `${props?.paddingY || "6px"} ${props?.paddingX || " 20px"}`};
  background: ${(props) =>
    props?.gradient || props?.backgroundcolor || "transparent"};
  font-size: ${(props) => props?.fontSize || APP_SIZES.fonts.small};
  color: ${(props) => props?.color || APP_COLORS.black};
  border: none;
  cursor: pointer;

  img {
    width: ${(props) => props?.iconSize || "14px"};
    height: ${(props) => props?.iconSize || "14px"};
    margin-right: 8px;
  }
`;
