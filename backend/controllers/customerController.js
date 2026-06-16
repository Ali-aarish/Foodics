// Customer controller — Demo (in-memory loyalty customers, no database yet)

let customers = [
  { id: 1, name: "Yousef Ali", phone: "0500000001", points: 120 },
  { id: 2, name: "Mona Saleh", phone: "0500000002", points: 45 },
  { id: 3, name: "Tariq Noor", phone: "0500000003", points: 300 },
];

// GET /api/customers
exports.getCustomers = (req, res) => {
  res.json(customers);
};

// POST /api/customers
exports.addCustomer = (req, res) => {
  const { name, phone, points } = req.body;
  const newCustomer = { id: customers.length + 1, name, phone, points: points || 0 };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
};
