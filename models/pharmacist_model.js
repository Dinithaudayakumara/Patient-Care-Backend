const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const pharmacistSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    password: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { collection: "pharmacists" }
);

module.exports = model("Pharmacist", pharmacistSchema);
