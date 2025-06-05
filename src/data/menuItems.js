const menuItems = [
  // Starters
  {
    id: "item1",
    name: "Vegetable Samosa",
    description: "Crispy pastry filled with spicy potatoes and peas",
    categoryId: "cat1",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 3.5, delivery: 4.0 },
    image: "/images/samosa.jpg",
  },
  {
    id: "item2",
    name: "Paneer Pakora",
    description: "Deep-fried cottage cheese fritters",
    categoryId: "cat1",
    availableFor: ["table"],
    available: true,
    pricing: { table: 4.5 },
    image: "/images/paneer-pakora.jpg",
  },

  // Main Course
  {
    id: "item3",
    name: "Butter Chicken",
    description: "Boneless chicken in creamy tomato gravy",
    categoryId: "cat2",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 9.5, delivery: 10.5 },
    image: "/images/butter-chicken.jpg",
  },

  // Breads
  {
    id: "item4",
    name: "Butter Naan",
    description: "Soft flatbread topped with butter",
    categoryId: "cat3",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 2.0, delivery: 2.5 },
    image: "/images/butter-naan.jpg",
  },

  // Rice & Biryani
  {
    id: "item5",
    name: "Chicken Biryani",
    description: "Aromatic rice layered with spiced chicken",
    categoryId: "cat4",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 8.5, delivery: 9.5 },
    image: "/images/chicken-biryani.jpg",
  },

  // Desserts
  {
    id: "item6",
    name: "Gulab Jamun",
    description: "Sweet syrup-soaked milk dumplings",
    categoryId: "cat5",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 3.0, delivery: 3.5 },
    image: "/images/gulab-jamun.jpg",
  },

  // Drinks
  {
    id: "item7",
    name: "Mango Lassi",
    description: "Sweet mango yogurt drink",
    categoryId: "cat6",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 2.5, delivery: 3.0 },
    image: "/images/mango-lassi.jpg",
  },

  // Tandoori Starter
  {
    id: "item8",
    name: "Tandoori Chicken (Starter)",
    description: "Chicken marinated in spices, roasted in tandoor",
    categoryId: "cat7",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 6.5, delivery: 7.0 },
    image: "/images/tandoori-chicken.jpg",
  },

  // Tandoori Mains
  {
    id: "item9",
    name: "Tandoori Mixed Grill",
    description: "Assorted tandoori meats with salad",
    categoryId: "cat8",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 12.5, delivery: 13.5 },
    image: "/images/tandoori-mixed-grill.jpg",
  },

  // Traditional Curries
  {
    id: "item10",
    name: "Lamb Rogan Josh",
    description: "Slow-cooked lamb in rich tomato curry",
    categoryId: "cat9",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 10.0, delivery: 11.0 },
    image: "/images/lamb-rogan-josh.jpg",
  },
  {
    id: "item11",
    name: "Chasni Chicken Tikka",
    description: "Slow-cooked lamb in rich tomato curry",
    categoryId: "cat9",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 10.0, delivery: 11.0 },
    image: "/images/lamb-rogan-josh.jpg",
  },
  {
    id: "item12",
    name: "Chicken Tikka Masala",
    description: "Slow-cooked lamb in rich tomato curry",
    categoryId: "cat9",
    availableFor: ["table", "delivery"],
    available: true,
    pricing: { table: 10.0, delivery: 11.0 },
    image: "/images/lamb-rogan-josh.jpg",
  },
];

export default menuItems;
