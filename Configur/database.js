const mongoose = require("mongoose");
const dotenv = require('dotenv').config()
// const MONGO = process.env.MONGO
const connection = mongoose.connect(`mongodb+srv://dhanush:dhanush@cluster0.yvl98kv.mongodb.net/airticketbooking?retryWrites=true&w=majority`); //add your password and collection name. Here collection name is 'myfirstdb' (should be smaller in case, simple and only after '.net/')

module.exports = {
  connection
};
