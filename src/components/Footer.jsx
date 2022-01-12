import React from "react";
import "./Footer.css";
import colors from "../config/colors";

import { Link } from "react-router-dom";
import { MdRestaurantMenu, MdHome, MdList, MdFoodBank } from "react-icons/md";

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
      <div onClick={() => handleClick()}>
        {!home ? (
          <Link to="/" className="Footer__button">
            <MdHome style={{ color: "white" }} />
          </Link>
        ) : (
          <Link to="/menu" className="Footer__button">
            <MdRestaurantMenu style={{ color: "white" }} />
          </Link>
        )}
      </div>
      <Link to="/admin">
        <div className="Footer__tmp" style={{ color: "white" }}>
          <MdFoodBank />
        </div>
      </Link>
      {displayList && (
        <div className="Footer__list" style={{ color: "white" }}>
          <MdList />
        </div>
      )}
    </div>
  );
};

export default Footer;
