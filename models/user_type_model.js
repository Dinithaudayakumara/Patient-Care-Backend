const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userTypeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
  },
  { collection: "userTypes" }
);

module.exports = mongoose.model("UserType", userTypeSchema);
