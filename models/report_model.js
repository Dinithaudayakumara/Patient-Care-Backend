const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const Patient = require("./patient_model")
const Doctor = require("./doctor_model")
const Disease = require("./disease_model")
const Xray = require("./xray_model")

const reportSchema = new Schema(
  {
    patientInformation: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
    },
    doctorDetail: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    disease: {
      type: Schema.Types.ObjectId,
      ref: "Disease",
    },
    medicalRecord: {
      type: String,
    },
    xRay: {
      type: Schema.Types.ObjectId,
      ref: "Xray",
    },
  },
  { collection: "reports" }
);

module.exports = model("Report", reportSchema);