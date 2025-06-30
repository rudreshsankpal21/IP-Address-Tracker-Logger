const mongoose = require("mongoose");

// Log Schema

const logSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
    },
    userAgent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const log = mongoose.model("Log", logSchema);

module.exports = log;
