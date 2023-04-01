const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
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
    specialty: {
      type: String,
    },
  },
  { collection: "doctors" }
);

module.exports = model("Doctor", doctorSchema);
