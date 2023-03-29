import { Schema, model } from "mongoose";

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
  },
  { collection: "patients" }
);

module.exports = model("Patient", patientSchema);
