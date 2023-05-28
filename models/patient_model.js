const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const patientSchema = new Schema(
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
    dateofBath: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    password: {
      type: String,
    },
    time: {
      type: String,
    },
    bloodGroup: {
      type: String,
    },
    weight: {
      type: String,
    },
    height: {
      type: String,
    },
    gender: {
      type: String,
    },
    profileImage: {
      type: String,
    },
  },
  { collection: "patients" }
);

module.exports = model("Patient", patientSchema);
