const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { collection: "admins" }
);
module.exports = model("Admin", adminSchema);
