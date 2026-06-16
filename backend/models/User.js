// User model — Demo
// Example shape of a staff user (plain object placeholder schema).
// Replace with a real Mongoose/Sequelize model when a database is added.

const UserSchema = {
  id: "Number — unique id",
  name: "String — full name",
  email: "String — login email",
  role: "String — e.g. Manager, Cashier, Chef",
  passwordHash: "String — hashed password",
};

module.exports = UserSchema;
