// Order model — Demo
// Example shape of an order. Replace with a real DB model later.

const OrderSchema = {
  id: "Number — unique id",
  items: "Array — list of menu items with quantity",
  total: "Number — total price",
  type: "String — 'pos' or 'online'",
  status: "String — pending / preparing / completed",
  createdAt: "Date — when the order was placed",
};

module.exports = OrderSchema;
