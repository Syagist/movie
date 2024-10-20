import React from "react";
import { StyledButton } from "./StyledButton";

interface ButtonProps {
  onClick: () => void;
  text?: string;
  iconName?: string;
  styles?: {
    paddingX?: string;
    paddingY?: string;
    backgroundcolor?: string;
    gradient?: string;
    fontSize?: string;
    color?: string;
    iconSize?: string;
  };
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  iconName,
  text,
  styles = {},
}) => {
  return (
    <StyledButton onClick={onClick} {...styles}>
      {iconName && <img src={`/assets/icons/${iconName}`} alt={iconName} />}
      {text && <span>{text}</span>}
    </StyledButton>
  );
};

export default Button;
