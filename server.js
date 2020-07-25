/**
 * This file contains essential packages to make the server up and running
 */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./api/calcRoutes");
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// To make sure the server is running
app.get("/", (req, res) => res.status(200).send("App is working!"));

// Using routes for organizing view
app.use("/api/calc", routes);

app.listen(port, () => console.log(`App listening on port ${port}`));

module.exports = {
  app,
};
