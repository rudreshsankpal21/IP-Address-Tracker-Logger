const express = require("express");
const logRoutes = require("./routes/logRoutes");
const app = express();

app.use(express.json());
app.use("/api", logRoutes);

module.exports = app;
