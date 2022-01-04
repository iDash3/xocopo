import React, { useState } from "react";

import Board from "./Board";
import ExpandableSection from "./ExpandableSection";
import MenuItem from "./MenuItem";

const dummyMenu = [
  {
    menu_id: 1,
    menu_title: "Menu Enfants",
    menu_items: [
      {
        section_title: "Enfant Commence / Infant Starters",
        expandable: true,
        section_items: [
          {
            title: "Soupe a l'onion",
            price: 8.1,
            description: "Oignon Soup",
          },
          {
            title: "Terrine de campagne Maison",
            price: 5.2,
            description: "Country style pate",
          },
          {
            title: "Assiette de crevettes Rose, mayonaisse Mauson",
            price: 9.3,
            description: "12 Snails, homemade garclic butter",
          },
        ],
      },
      {
        section_title: "A partager / To share",
        expandable: true,
        section_items: [
          {
            title: "FRENCH Degustation: 6 scargots + 4 cuisses",
            price: 19.5,
            description: "6 snails, 4 frog legs",
          },
          {
            title: "Nos planches (2 pers)",
            price: 18,
            description: "Plance de fromages | Planhce mixte",
          },
        ],
      },
      {
        section_title: "Nos Boissons",
        expandable: true,
        section_items: [
          {
            expandable: true,
            subsection_title: "Les Boissons Fraiches",
            subsection_items: [
              {
                title: "Coca Cola",
                price: 6.5,
                description: "250 ml",
              },
            ],
          },
          {
            expandable: true,
            subsection_title: "Les Boissons Chaudes",
            subsection_items: [
              {
                title: "Expresso",
                price: 3,
                description: "200ml",
              },
            ],
          },
          {
            expandable: true,
            subsection_title: "Les Bieres",
            subsection_items: [
              {
                title: "Heineken",
                price: 9,
                description: "400ml",
              },
            ],
          },
        ],
      },
    ],
  },
];

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
      <ExpandableSection title="La Carte / Menu" level={0}>
        <ExpandableSection
          title="Pour commencer / Our starters"
          inverted={true}
          level={1}
        >
          <MenuItem
            title="Soupe a l'oinion"
            subTitle="Oignon Soup"
            price={8.01}
          ></MenuItem>
          <MenuItem
            title="Terrine de campagne Maison"
            subTitle="Country style pate"
            price={8.01}
          ></MenuItem>
          <MenuItem
            title="Assiette de crevettes Rose, mayonaisse Maison"
            subTitle="12 Snails, homeade garlic butter"
            price={9.01}
          ></MenuItem>
        </ExpandableSection>
        <ExpandableSection
          title="A partager / To share"
          inverted={true}
          level={1}
        >
          <MenuItem
            title="FRENCH Degustation : 6 scargots + 4 cuisses de grenouilles"
            subTitle="6 snails and 4 frog legs"
            price={19.01}
          ></MenuItem>
          <MenuItem
            title="Nos planches (2 pers)"
            subTitle="Planche de fromages | Planche mixte"
            price={19.01}
          ></MenuItem>
        </ExpandableSection>
        <ExpandableSection title="Nos Boissons" inverted={true} level={1}>
          <ExpandableSection
            title="Les Boissons Fraiches"
            inverted={true}
            level={2}
          >
            <MenuItem
              title="Coca Cola"
              subTitle="250ml"
              price={19.01}
            ></MenuItem>
          </ExpandableSection>
          <ExpandableSection
            title="Les Boissons Chaudes"
            inverted={true}
            level={2}
          >
            <MenuItem
              title="Expresso"
              subTitle="250ml"
              price={19.01}
            ></MenuItem>
          </ExpandableSection>
          <ExpandableSection title="Les Bieres" inverted={true} level={2}>
            <MenuItem
              title="Heineken"
              subTitle="250ml"
              price={19.01}
            ></MenuItem>
          </ExpandableSection>
        </ExpandableSection>
      </ExpandableSection>

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
