import React, { useState } from "react";
import "./MenuItem.css";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const MenuItem = ({ price, title, subTitle, onItemClick }) => {
  const [hearted, setHearted] = useState(false);

  const handleHeartClick = () => {
    if (!hearted) onItemClick({ title, price, delete: false });
    else onItemClick({ title, price, delete: true });
    setHearted(!hearted);
    alert(`You bought ${title} for ${price}. \nThis will look better.`);
  };

  return (
    <div className="MenuItem__container">
      <div
        className="MenuItem__icon"
        onClick={() => {
          handleHeartClick();
        }}
      >
        {hearted ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
      <div className="MenuItem__text">
        <span className="MenuItem__dish">{title}</span>
        <span>{subTitle}</span>
      </div>
      <span>$ {price}</span>
    </div>
  );
};

export default MenuItem;
