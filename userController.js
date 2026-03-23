// In-memory data store (replace with a real DB in production)
let users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "user" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "user" },
];
let nextId = 4;

// GET /api/users
const getAllUsers = (req, res) => {
  res.json({ success: true, count: users.length, data: users });
};

// GET /api/users/:id
const getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ success: false, error: "User not found" });
  }
  res.json({ success: true, data: user });
};

// POST /api/users
const createUser = (req, res) => {
  const { name, email, role = "user" } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ success: false, error: "Name and email are required" });
  }

  const exists = users.find((u) => u.email === email);
  if (exists) {
    return res
      .status(409)
      .json({ success: false, error: "Email already in use" });
  }

  const newUser = { id: nextId++, name, email, role };
  users.push(newUser);
  res.status(201).json({ success: true, data: newUser });
};

// PUT /api/users/:id
const updateUser = (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ success: false, error: "User not found" });
  }

  const { name, email, role } = req.body;
  users[index] = { ...users[index], ...(name && { name }), ...(email && { email }), ...(role && { role }) };
  res.json({ success: true, data: users[index] });
};

// DELETE /api/users/:id
const deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ success: false, error: "User not found" });
  }

  const deleted = users.splice(index, 1)[0];
  res.json({ success: true, message: "User deleted", data: deleted });
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
