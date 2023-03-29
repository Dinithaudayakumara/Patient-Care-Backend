import { Schema, model } from "mongoose";

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
    mobileNumber: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { collation: "phamacists" }
);

module.exports = ("Phamacist", pharmacistSchema);
