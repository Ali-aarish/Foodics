// Inventory controller — Demo (in-memory sample data, no database yet)

let inventory = [
  { id: 1, name: "Chicken Breast", quantity: 40, unit: "kg", lowStockThreshold: 10 },
  { id: 2, name: "Burger Buns", quantity: 8, unit: "packs", lowStockThreshold: 12 },
  { id: 3, name: "Orange Concentrate", quantity: 25, unit: "liters", lowStockThreshold: 5 },
];

// GET /api/inventory
exports.getInventory = (req, res) => {
  res.json(inventory);
};

// PUT /api/inventory  → adjust stock for an item
exports.updateStock = (req, res) => {
  const { id, quantity } = req.body;
  const item = inventory.find((i) => i.id === Number(id));
  if (!item) return res.status(404).json({ error: "Item not found" });
  item.quantity = quantity;
  res.json(item);
};
