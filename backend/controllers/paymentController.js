// Payment controller — Demo (in-memory payments, no real gateway yet)

let payments = [];

// GET /api/payments
exports.getPayments = (req, res) => {
  res.json(payments);
};

// POST /api/payments  → "process" a payment
exports.processPayment = (req, res) => {
  const { amount, method } = req.body; // method: "cash" | "card"
  const payment = {
    id: payments.length + 1,
    status: "paid",
    amount,
    method,
  };
  payments.push(payment);
  res.status(201).json(payment);
};
