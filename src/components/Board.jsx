import React from "react";
import "./Board.css";

const Board = () => {
  return (
    <div className="Board">
      <h2>Restaurant du Golf Bluegreen de Marolles-en-Brie</h2>
      <div className="littleSeparator"></div>
      <p>
        <h3>Meal of the day</h3>
        <span>Norway Salmon $69</span>
      </p>
      <p>Service from 9am - 18pm</p>
      <p>Contact, promotions, general information can go here.</p>
    </div>
  );
};

export default Board;
