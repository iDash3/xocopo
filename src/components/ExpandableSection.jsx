import React, { useState } from "react";
import "./ExpandableSection.css";

import colors from "../config/colors";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ExpandableSection = ({ title, children, inverted, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);

  const levelColors = [colors.levelOne, colors.levelTwo, colors.levelThree];
  const componentStyle = [
    { text: "white", backgroundColor: levelColors[level] },
    { text: "black", backgroundColor: levelColors[level] },
    { text: "black", backgroundColor: levelColors[level] },
  ][level];

  const componentStyles = !inverted
    ? { text: "white", backgroundColor: levelColors[0] }
    : { text: "black", backgroundColor: levelColors[1] };

  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="ExpandableSection__container"
      style={{
        backgroundColor: componentStyle.backgroundColor,
      }}
    >
      <div
        className={`ExpandableSection__title`}
        style={{
          color: componentStyle.text,
        }}
        onClick={() => handleExpanded()}
      >
        <span>{title}</span>
        <span>{expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>

      {expanded && <div>{children}</div>}
    </div>
  );
};

export default ExpandableSection;
