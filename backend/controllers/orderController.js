// Order controller — Demo (in-memory sample data)

let orders = [];

// GET /api/orders
exports.getOrders = (req, res) => {
  res.json(orders);
};

// POST /api/orders
exports.createOrder = (req, res) => {
  const { items, total, type } = req.body; // type: "pos" or "online"
  const newOrder = {
    id: orders.length + 1,
    items,
    total,
    type,
    status: "pending",
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
};
