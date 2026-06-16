// Helpers — Demo (small reusable utility functions)

// Format a number as a currency string, e.g. 15 → "SAR 15.00"
const formatCurrency = (amount, currency = "SAR") =>
  `${currency} ${Number(amount).toFixed(2)}`;

// Generate a simple unique-ish id (demo only, not collision-proof)
const generateId = () => Date.now() + Math.floor(Math.random() * 1000);

module.exports = { formatCurrency, generateId };
