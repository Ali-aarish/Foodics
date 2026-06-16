// Menu controller — Demo (uses in-memory sample data, no database yet)

let menu = [
  { id: 1, name: "Chicken Shawarma", price: 15, category: "Sandwiches" },
  { id: 2, name: "Beef Burger", price: 25, category: "Burgers" },
  { id: 3, name: "Fresh Orange Juice", price: 12, category: "Drinks" },
];

// GET /api/menu
exports.getMenu = (req, res) => {
  res.json(menu);
};

// POST /api/menu
exports.addMenuItem = (req, res) => {
  const { name, price, category } = req.body;
  const newItem = { id: menu.length + 1, name, price, category };
  menu.push(newItem);
  res.status(201).json(newItem);
};
