// User controller — Demo (in-memory sample staff data, no database yet)

let users = [
  { id: 1, name: "Sara Ahmed", role: "Manager", email: "sara@foodics.demo" },
  { id: 2, name: "Omar Khalid", role: "Cashier", email: "omar@foodics.demo" },
  { id: 3, name: "Lina Hassan", role: "Chef", email: "lina@foodics.demo" },
];

// GET /api/users
exports.getUsers = (req, res) => {
  res.json(users);
};

// POST /api/users
exports.addUser = (req, res) => {
  const { name, role, email } = req.body;
  const newUser = { id: users.length + 1, name, role, email };
  users.push(newUser);
  res.status(201).json(newUser);
};
