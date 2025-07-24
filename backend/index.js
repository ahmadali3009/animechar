const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { Sequelize } = require('sequelize');

// Middleware 
app.use(express.json()); // Parses incoming JSON requests

//Passing a connection URI
const sequelize = new Sequelize('postgres://postgres:123456789@localhost:5432/animechar')
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});