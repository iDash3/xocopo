import React, { useState } from "react";
import "./ExpandableSection.css";

import colors from "../config/colors";
import { IoIosArrowUp, IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpandableInput = ({ title, children, inverted, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const levelColors = [colors.levelOne, colors.levelTwo, colors.levelThree];
  const componentStyle = [
    { text: "white", backgroundColor: levelColors[level] },
    { text: "black", backgroundColor: levelColors[level] },
    { text: "black", backgroundColor: levelColors[level] },
  ][level];

  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    alert("Delete!");
  };
  const handleEdit = (action) => {
    if (action === "open") {
      setIsEdit(true);
    } else if (action === "close") {
      setIsEdit(false);
    }
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
      >
        <div className="ExpandableInput__title">
          {!isEdit ? title : <input type="text" defaultValue={title} />}
          {isEdit && <IoMdClose onClick={() => handleEdit("close")} />}
          <span className="ExpandableInput__buttons">
            {!isEdit && <MdEdit onClick={() => handleEdit("open")} />}
            <MdDelete onClick={handleDelete} />
          </span>
        </div>
        <span onClick={() => handleExpanded()}>
          {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>

      {expanded && <div>{children}</div>}
    </div>
  );
};

export default ExpandableInput;
