// InventoryItem model — Demo
// Example shape of a stock item (plain object placeholder schema).
// Replace with a real Mongoose/Sequelize model when a database is added.

const InventoryItemSchema = {
  id: "Number — unique id",
  name: "String — item name",
  quantity: "Number — current stock amount",
  unit: "String — e.g. kg, packs, liters",
  lowStockThreshold: "Number — alert level",
};

module.exports = InventoryItemSchema;
