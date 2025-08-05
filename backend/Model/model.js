const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:123456789@localhost:5432/animechar');
const User = sequelize.define(
    "User",
    {
        username :  {type : DataTypes.STRING, allowNull:true  },
        email : { type : DataTypes.STRING , allowNull : false},
        password : {type : DataTypes.STRING , allowNull: false}

    })

    console.log(User === sequelize.models.User); // true
sequelize.sync({ alter: true }) // or sync({ force: true }) for development
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((err) => {
    console.error("Failed to sync models:", err);
  });
module.exports = User