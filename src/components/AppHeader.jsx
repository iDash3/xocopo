import React from "react";
import colors from "../config/colors";

const AppHeader = () => {
  return (
    <header>
      <div
        style={{
          backgroundColor: colors.levelOne,
          margin: "0 18vw 3vh 18vw",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          textAlign: "center",
        }}
      >
        <img
          style={{ width: 180, marginBottom: "20px" }}
          src={
            "https://image.freepik.com/free-vector/restaurant-logo_23-2148558726.jpg"
          }
        ></img>
      </div>
    </header>
  );
};

export default AppHeader;
