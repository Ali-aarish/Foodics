// Payment model — Demo
// Example shape of a payment (plain object placeholder schema).
// Replace with a real Mongoose/Sequelize model when a database is added.

const PaymentSchema = {
  id: "Number — unique id",
  orderId: "Number — linked order id",
  amount: "Number — paid amount",
  method: "String — e.g. cash, card",
  status: "String — e.g. paid, pending, refunded",
  createdAt: "Date — timestamp",
};

module.exports = PaymentSchema;
