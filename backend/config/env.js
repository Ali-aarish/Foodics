// Env config — Demo (hardcoded sample config; use real env vars in production)

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  JWT_SECRET: process.env.JWT_SECRET || "demo-secret",
  DB_URI: process.env.DB_URI || "in-memory",
};
