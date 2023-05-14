const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const prescriptionSchema = new Schema(
  {
    description: {
      type: String,
    },
    patientID: {
      type: Schema.Types.ObjectId,
      ref: "patient",
    },
    doctorDetail: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  { collection: "prescriptions" }
);

module.exports = model("Prescription", prescriptionSchema);
