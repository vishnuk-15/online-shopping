const express = require('express');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

// Load or create users
let users = [];
if (fs.existsSync('users.json')) {
  users = JSON.parse(fs.readFileSync('users.json'));
}

// Middleware to protect routes
function isAuthenticated(req, res, next) {
  if (req.session.user) return next();
  res.redirect('/login.html');
}

const products = [
  { id: 1, name: 'T-Shirt', price: 20, image: '/images/tshirt.jpg', offer: '20% Off' },
  { id: 2, name: 'Shoes', price: 50, image: '/images/shoes.jpg', offer: 'Buy 1 Get 1 Free' },
  { id: 3, name: 'Cap', price: 10, image: '/images/cap.jpg', offer: null }
];

// Routes
app.get('/api/products', isAuthenticated, (req, res) => {
  res.json(products);
});

app.post('/api/order', isAuthenticated, (req, res) => {
  console.log('Order placed by:', req.session.user.email);
  res.json({ status: 'Order successful' });
});

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.send('User already exists. <a href="/signup.html">Try again</a>');
  }
  users.push({ name, email, password });
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
  res.redirect('/login.html');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    req.session.user = { email };
    res.redirect('/');
  } else {
    res.send('Invalid login. <a href="/login.html">Try again</a>');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login.html');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
