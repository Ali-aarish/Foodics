// Auth controller — Demo (fake token, no real auth or database yet)

// POST /api/auth/login
exports.login = (req, res) => {
  const { email } = req.body;
  // Demo only: accept anything and return a fake token.
  res.json({
    token: "demo-token-123456",
    user: { id: 1, email, role: "Manager" },
  });
};

// POST /api/auth/register
exports.register = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now(), name, email, role: "Staff" };
  res.status(201).json({ token: "demo-token-123456", user: newUser });
};
