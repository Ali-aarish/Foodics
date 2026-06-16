// Branch controller — Demo (in-memory branch data, no database yet)

let branches = [
  { id: 1, name: "Downtown Branch", city: "Riyadh", address: "King Fahd Rd" },
  { id: 2, name: "Marina Branch", city: "Jeddah", address: "Corniche St" },
  { id: 3, name: "Mall Branch", city: "Dammam", address: "Prince Mohammed Blvd" },
];

// GET /api/branches
exports.getBranches = (req, res) => {
  res.json(branches);
};

// POST /api/branches
exports.addBranch = (req, res) => {
  const { name, city, address } = req.body;
  const newBranch = { id: branches.length + 1, name, city, address };
  branches.push(newBranch);
  res.status(201).json(newBranch);
};
