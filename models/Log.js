const mongoose = require("mongoose");

// Log Schema

const logSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
