import React from "react";
import "./AdminTmp.css";

import MenuItem from "./MenuItem";
import dummyMenu from "./dummyMenu";
import ExpandableSection from "./ExpandableSection";
import ExpandableInput from "./ExpandableInput";

import { IoMdAddCircle } from "react-icons/io";

const AdminTmp = () => {
  const handleItemClick = () => {
    console.log("yeahh");
  };

  const AddButton = ({ iconComponent, text, style, color }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "10px",
          color,
        }}
      >
        {iconComponent}
        <small>{text}</small>
      </div>
    );
  };

  const AddButtons = ({ color = "whitesmoke" }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        {/* New menu button */}
        <AddButton
          iconComponent={<IoMdAddCircle size={25} />}
          text="Add section"
          color={color}
        ></AddButton>
        <AddButton
          iconComponent={<IoMdAddCircle size={25} />}
          text="Add item"
          color={color}
        ></AddButton>
      </div>
    );
  };

  const InputItem = ({ title, subTitle, price, onItemClick }) => {
    return (
      <div onClick={onItemClick} className="InputItem" style={{}}>
        <input
          defaultValue={title}
          style={{
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            padding: "5px",
            border: "1px solid lightgray",
          }}
        ></input>
        <input
          defaultValue={subTitle}
          style={{
            padding: "5px",
            border: "1px solid lightgray",
          }}
        ></input>
        <input
          defaultValue={price}
          type="number"
          style={{
            padding: "5px",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            border: "1px solid lightgray",
            borderRight: "2px solid black",
          }}
        ></input>
      </div>
    );
  };

  return (
    <div className="AdminTmp">
      <div>Esta página será movida a su propia app.</div>

      <p style={{ marginTop: "40px" }}>Editor de menu nuevo:</p>

      {dummyMenu &&
        dummyMenu.map((menu) => (
          <ExpandableInput
            title={menu.menu_title}
            key={menu.menu_title}
            level={0}
          >
            {menu.menu_items &&
              menu.menu_items.map((menu_item) =>
                menu_item.expandable ? (
                  <ExpandableInput
                    title={menu_item.section_title}
                    key={menu_item.section_title}
                    level={1}
                  >
                    {menu_item.section_items &&
                      menu_item.section_items.map((item) =>
                        item.expandable ? (
                          <ExpandableSection
                            title={item.subsection_title}
                            key={item.subsection_title}
                            level={2}
                          >
                            {item.subsection_items &&
                              item.subsection_items.map((subsectionItem) => (
                                <MenuItem
                                  key={subsectionItem.title}
                                  title={subsectionItem.title}
                                  subTitle={subsectionItem.description}
                                  price={subsectionItem.price}
                                  onItemClick={(item) => {
                                    handleItemClick(item);
                                  }}
                                ></MenuItem>
                              ))}
                            <AddButton
                              iconComponent={<IoMdAddCircle size={25} />}
                              text="Add item"
                              color="brown"
                            ></AddButton>
                          </ExpandableSection>
                        ) : (
                          <MenuItem
                            title={item.title}
                            key={item.title}
                            subTitle={item.description}
                            price={item.price}
                            onItemClick={(item) => {
                              handleItemClick(item);
                            }}
                          ></MenuItem>
                        )
                      )}
                    <AddButtons color="black" />
                  </ExpandableInput>
                ) : (
                  <MenuItem
                    title="Heineken"
                    subTitle="250ml"
                    price={19.01}
                    onItemClick={(item) => {
                      handleItemClick(item);
                    }}
                  ></MenuItem>
                )
              )}
            <AddButtons />
          </ExpandableInput>
        ))}

      {/* New menu button */}
      <AddButton
        iconComponent={<IoMdAddCircle color="red" size={30} />}
        text="Add menu"
        color="red"
      ></AddButton>

      <p style={{ marginTop: "40px" }}>Editor de menu viejo:</p>

      {dummyMenu &&
        dummyMenu.map((menu) => (
          <div className="AdminTmp__one">
            <h3>{menu.menu_title}</h3>
            {menu.menu_items &&
              menu.menu_items.map((menu_item) =>
                menu_item.expandable ? (
                  <div className="AdminTmp__two">
                    <h5>{menu_item.section_title}</h5>
                    {menu_item.section_items &&
                      menu_item.section_items.map((item) =>
                        item.expandable ? (
                          <div className="AdminTmp__three">
                            <small>{item.subsection_title}</small>
                            {item.subsection_items &&
                              item.subsection_items.map((subsectionItem) => (
                                <InputItem
                                  title={subsectionItem.title}
                                  subTitle={subsectionItem.description}
                                  price={subsectionItem.price}
                                  onItemClick={(item) => {
                                    handleItemClick(item);
                                  }}
                                />
                              ))}
                          </div>
                        ) : (
                          <InputItem
                            title={item.title}
                            subTitle={item.description}
                            price={item.price}
                            onItemClick={(item) => {
                              handleItemClick(item);
                            }}
                          ></InputItem>
                        )
                      )}
                  </div>
                ) : (
                  <MenuItem
                    title="Heineken"
                    subTitle="250ml"
                    price={19.01}
                    onItemClick={(item) => {
                      handleItemClick(item);
                    }}
                  ></MenuItem>
                )
              )}
          </div>
        ))}
    </div>
  );
};

export default AdminTmp;
