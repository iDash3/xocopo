import React from "react";
import "./Footer.css";
import colors from "../config/colors";

import { MdRestaurantMenu, MdHome, MdList } from "react-icons/md";

const Footer = ({
  backgroundColor = colors.levelOne,
  onButtonClick,
  home,
  displayList = false,
}) => {
  const handleClick = () => {
    console.log("Main button clicked");
    onButtonClick();
  };

  return (
    <div className="Footer" style={{ backgroundColor }}>
      <div
        className="Footer__button"
        onClick={() => handleClick()}
        style={{ color: "white" }}
      >
        {!home ? <MdHome /> : <MdRestaurantMenu />}
      </div>
      {displayList && (
        <div className="Footer__list" style={{ color: "white" }}>
          <MdList />
        </div>
      )}
    </div>
  );
};

export default Footer;
