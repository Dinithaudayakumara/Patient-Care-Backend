import { Schema, model } from "mongoose";

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
  { collation: "doctors" }
);

module.exports = model("Doctor", doctorSchema);
