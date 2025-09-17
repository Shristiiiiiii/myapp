const express = require('express');
const app = express();

// Serve static files (like CSS, images) from "public" folder
app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to MyApp!</h1>
    <p>This is the home page.</p>
    <a href="/about">About</a> | <a href="/contact">Contact</a>
  `);
});

// About page
app.get('/about', (req, res) => {
  res.send(`
    <h1>About Us</h1>
    <p>We make awesome apps!</p>
    <a href="/">Home</a> | <a href="/contact">Contact</a>
  `);
});

// Contact page
app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <p>Email: example@example.com</p>
    <a href="/">Home</a> | <a href="/about">About</a>
  `);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));