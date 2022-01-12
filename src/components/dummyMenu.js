const dummyMenu = [
  {
    menu_id: 1,
    menu_title: "Menu",
    menu_items: [
      {
        section_title: "Entradas",
        expandable: true,
        section_items: [
          {
            title: "Tostadas de pulpo",
            price: 8.1,
            description: "Pulpo en forma de tostada",
          },
          {
            title: "Tostadas de camaron",
            price: 5.2,
            description: "Camaron en forma de tostada",
          },
          {
            title: "Empanada de camaron",
            price: 9.3,
            description: "12 Snails, homemade garclic butter",
          },
        ],
      },
      {
        section_title: "Sopas",
        expandable: true,
        section_items: [
          {
            title: "Cazuela de mariscos",
            price: 19.5,
            description: "Camaron, pulpo, pescada en cazuela",
          },
          {
            title: "Clam chowder",
            price: 18,
            description: "Sopa de almejas",
          },
        ],
      },
      {
        section_title: "Mariscos",
        expandable: true,
        section_items: [
          {
            expandable: true,
            subsection_title: "Pulpos",
            subsection_items: [
              {
                title: "Encebollados",
                price: 6.5,
                description: "Pulpo con cebolla y ajo",
              },
              {
                title: "A la veracruzana",
                price: 6.5,
                description: "Con mucho picante",
              },
            ],
          },
          {
            expandable: true,
            subsection_title: "Camarones",
            subsection_items: [
              {
                title: "Agua chile",
                price: 3,
                description: "Agua con chile",
              },
              {
                title: "Empanizados",
                price: 3,
                description: " ",
              },
            ],
          },
          {
            expandable: true,
            subsection_title: "Calamares",
            subsection_items: [
              {
                title: "En su tinta",
                price: 9,
                description: "",
              },
              {
                title: "A la plancha",
                price: 9,
                description: "",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    menu_id: 1,
    menu_title: "Coctelería",
    menu_items: [
      {
        section_title: "Bebidas sin alcohol",
        expandable: true,
        section_items: [
          {
            title: "Limonada Fish",
            price: 8.1,
            description: "Jugo de limon con hierba buena",
          },
          {
            title: "Frapuchino",
            price: 5.2,
            description: "Café con leche a punto de nieve",
          },
          {
            title: "Limonada flotante",
            price: 9.3,
            description: "Limonada fish + Coca regular a punto de nieve",
          },
        ],
      },
      {
        section_title: "Bebida con alcohol",
        expandable: true,
        section_items: [
          {
            title: "Mojito",
            price: 19.5,
            description: "Limon con hierba buena y ron",
          },
          {
            title: "Pasaje al cielo",
            price: 18,
            description:
              "Crema de coco, curazao, jugo de piña y naranaja con vodka",
          },
        ],
      },
      {
        section_title: "Otras bebidas",
        expandable: true,
        section_items: [
          {
            title: "Coca Cola",
            price: 6.5,
            description: "250 ml",
          },
          {
            title: "Clericot",
            price: 6.5,
            description: "Clericot 250ml - 1/2 L - 1L - 2L",
          },
          {
            title: "Coca Cola Zero",
            price: 6.5,
            description: "250 ml",
          },
        ],
      },
    ],
  },
];
export default dummyMenu;
