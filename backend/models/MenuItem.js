// MenuItem model — Demo
// Example shape of a menu item (using a plain object as a placeholder schema).
// Replace with a real Mongoose/Sequelize model when a database is added.

const MenuItemSchema = {
  id: "Number — unique id",
  name: "String — item name",
  price: "Number — price",
  category: "String — e.g. Burgers, Drinks",
  available: "Boolean — in stock or not",
};

module.exports = MenuItemSchema;
