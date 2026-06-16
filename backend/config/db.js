// DB config — Demo (no real database connection yet)

// In a real app this would connect to MongoDB/Postgres.
const connectDB = () => {
  console.log("Demo: pretending to connect to the database...");
  console.log("Demo: database connected (in-memory).");
};

module.exports = connectDB;
