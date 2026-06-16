// Customer model — Demo
// Example shape of a customer (plain object placeholder schema).
// Replace with a real Mongoose/Sequelize model when a database is added.

const CustomerSchema = {
  id: "Number — unique id",
  name: "String — full name",
  phone: "String — contact number",
  email: "String — email address",
  loyaltyPoints: "Number — loyalty points balance",
};

module.exports = CustomerSchema;
