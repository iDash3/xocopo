import React, { useState } from "react";

import Board from "./Board";
import ExpandableSection from "./ExpandableSection";
import MenuItem from "./MenuItem";

import dummyMenu from "./dummyMenu";

const MenuComponent = () => {
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleItemClick = (item) => {
    alert("Yeahh");
    if (item.delete)
      setSelectedDishes(selectedDishes.filter((i) => i.title !== item.title));
    else setSelectedDishes([...selectedDishes, item]);
    console.log(selectedDishes);
  };

  return (
    <div>
      {dummyMenu &&
        dummyMenu.map((menu) => (
          <ExpandableSection
            title={menu.menu_title}
            key={menu.menu_title}
            level={0}
          >
            {menu.menu_items &&
              menu.menu_items.map((menu_item) =>
                menu_item.expandable ? (
                  <ExpandableSection
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
                                  title={subsectionItem.title}
                                  subTitle={subsectionItem.description}
                                  price={subsectionItem.price}
                                  onItemClick={(item) => {
                                    handleItemClick(item);
                                  }}
                                ></MenuItem>
                              ))}
                          </ExpandableSection>
                        ) : (
                          <MenuItem
                            title={item.title}
                            subTitle={item.description}
                            price={item.price}
                            onItemClick={(item) => {
                              handleItemClick(item);
                            }}
                          ></MenuItem>
                        )
                      )}
                  </ExpandableSection>
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
          </ExpandableSection>
        ))}

      {/* Whiteboard for specials and info */}
      <Board />
    </div>
  );
};

export default MenuComponent;
