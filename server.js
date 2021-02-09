//mongodb uri is hidden in .env
require('dotenv').config();

//dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
// const Workout = require("./seeders/seed");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connection using our db, hidden in dotenv
mongoose.connect(process.env.MONGODB_URI || "mongodb:localhost/workout", { useNewUrlParser: true });

//html route
app.use(require("./routes/html-routes"))
//api route
app.use(require("./routes/api-routes"))


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
