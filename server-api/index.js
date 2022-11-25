require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoData = process.env.DATABASE_URL;
// console.log(mongoData)
mongoose.connect(mongoData);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error); 
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());

const routes = require('./routes/routes')
app.use('/api', routes)

app.listen(8080, () => {
  console.log(`Server Started at ${8080}`);
});

