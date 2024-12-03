const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Dinesh@123'; 

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let users = [
  { id: 1, name: 'Dinesh', email: 'dinesh@gmail.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jasie', email: 'Jasie@gmail.com', role: 'Editor', status: 'Active' },
];
let roles = [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && password === 'password123'); 
  if (user) {
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, SECRET_KEY, {
      expiresIn: '1h',
    });
    res.json({ token, user });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.json(newUser);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  users = users.filter(user => user.id !== id);
  res.status(204).end();
});

app.get('/roles', (req, res) => res.json(roles));
app.post('/roles', (req, res) => {
  const newRole = { id: Date.now(), ...req.body };
  roles.push(newRole);
  res.json(newRole);
});

app.put('/roles/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = roles.findIndex(role => role.id === id);
  if (index !== -1) {
    roles[index] = { ...roles[index], ...req.body };
    res.json(roles[index]);
  } else {
    res.status(404).json({ message: 'Role not found' });
  }
});

app.delete('/roles/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  roles = roles.filter(role => role.id !== id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});