const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const prescriptionSchema = new Schema(
  {
    patientID: {
      type: Schema.Types.ObjectId,
      ref: "patient",
    },
    description: {
      type: String,
    },
    date: {
      type: String,
    },
    pharmacyName: {
      type: String,
    },
    priscriptions: {
      type: String,
    },
    doctorDetail: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  { collection: "prescriptions" }
);

module.exports = model("Prescription", prescriptionSchema);
