import React from "react";
import "./IconButton.css";

import { IoIosWifi, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";

const icons = {
  default: "def",
  wifi: <IoIosWifi />,
  instagram: <IoLogoInstagram />,
  facebook: <IoLogoFacebook />,
};

const IconButton = ({ name = icons.default, handleClick, text }) => {
  const icon = icons[name];

  return (
    <div className="IconButton" onClick={handleClick}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a>{icon}</a>
        <div className="IconButton__text">{text}</div>
      </div>
    </div>
  );
};

export default IconButton;
