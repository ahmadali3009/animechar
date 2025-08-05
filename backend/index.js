const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { Sequelize } = require('sequelize');
const route = require("./router/route")
const cors = require("cors");
// Middleware 
app.use(express.json()); // Parses incoming JSON requests
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST'],

    credentials: true, // if you need cookies or auth headers

}));
//Passing a connection URI
const sequelize = new Sequelize('postgres://postgres:123456789@localhost:5432/animechar')
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
    sequelize.sync({ alter: true }) // or sync({ force: true }) for development
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((err) => {
    console.error("Failed to sync models:", err);
  });
// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use("/signup", route)
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});