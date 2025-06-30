const express = require("express");
const {
  trackVisitor,
  getLogs,
  deleteLogs,
} = require("../controllers/logController");
const logRoutes = express.Router();

logRoutes.get("/track", trackVisitor);
logRoutes.get("/logs", getLogs);
logRoutes.delete("/logs", deleteLogs);

module.exports = logRoutes;
