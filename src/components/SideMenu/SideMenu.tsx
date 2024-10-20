import React, { useState } from "react";
import {
  AdditionalItem,
  AdditionalItems,
  MenuContainer,
  MenuItem,
  MenuItems,
  SideMenuContainer,
} from "./StyledSideMenu";
import Image from "components/Image/Image";
import { additionalMenuItems, menuItems } from "constants/appConstants";

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <SideMenuContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MenuContainer
        initial={{ width: "50px" }}
        animate={isOpen ? { width: "200px" } : { width: "50px" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <MenuItems>
          {menuItems.map((item, index) => (
            <MenuItem key={index} visible={isOpen}>
              {item.icon && (
                <Image
                  imageSrc={`/assets/icons/${item.icon}`}
                  alt={item.icon}
                />
              )}
              {isOpen && (
                <span style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                  {item.label}
                </span>
              )}
            </MenuItem>
          ))}
        </MenuItems>
        <AdditionalItems>
          {additionalMenuItems.map((item, index) => (
            <AdditionalItem key={index}>
              {isOpen && <span>{item.label}</span>}
            </AdditionalItem>
          ))}
        </AdditionalItems>
      </MenuContainer>
    </SideMenuContainer>
  );
};

export default SideMenu;
