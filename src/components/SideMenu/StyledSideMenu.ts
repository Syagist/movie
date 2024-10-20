import APP_COLORS from "constants/colors";
import APP_SIZES from "constants/sizes";
import { motion } from "framer-motion";
import styled from "styled-components";

export const SideMenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 999;
  transition: width 0.3s ease;
`;

export const MenuContainer = styled(motion.div)`
  background-color: ${APP_COLORS.black};
  color: white;
  padding: 10px 15px;
  overflow: hidden;
  z-index: 200;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const MenuItem = styled.div<{ visible: boolean }>`
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
  color: ${APP_COLORS.white};
  font-size: ${APP_SIZES.fonts.regular};
  transition:
    color 0.2s,
    opacity 0.2s;
  width: 20px;
  height: 20px;

  span:first-child {
    font-size: 24px;
    whitespace: nowrap;
    margin-left: 10px;
  }

  img {
    object-fit: contain;
  }
  &:hover {
    color: ${APP_COLORS.hoverColor};
  }
`;

export const AdditionalItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdditionalItem = styled.div`
  margin: 10px 0;
  cursor: pointer;
  color: ${APP_COLORS.white};

  span {
    whitespace: nowrap;
  }

  &:hover {
    color: ${APP_COLORS.hoverColor};
  }
`;
