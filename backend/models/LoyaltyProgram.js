// LoyaltyProgram model — Demo
// Example shape of a loyalty record (plain object placeholder schema).
// Replace with a real Mongoose/Sequelize model when a database is added.

const LoyaltyProgramSchema = {
  id: "Number — unique id",
  customerId: "Number — linked customer id",
  points: "Number — accumulated points",
  tier: "String — e.g. Bronze, Silver, Gold",
  joinedAt: "Date — enrollment date",
};

module.exports = LoyaltyProgramSchema;
