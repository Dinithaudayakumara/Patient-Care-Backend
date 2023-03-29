import { Schema, model } from "mongoose";
const Patient = require("./patient_model");
const Disease = require("./disease_model");
const Xray = require("./xray_model");
const Doctor = require("./doctor_model");

const reportSchema = new Schema(
  {
    patientInformation: {
      type: Schema.types.objectID,
      ref: "Patient",
    },
    doctorDetail: {
      type: Schema.types.objectID,
      ref: "Doctor",
    },
    disease: {
      type: Schema.types.objectID,
      ref: "Disease",
    },
    medicalRecord: {
      type: String,
    },
    xRay: {
      type: Schema.types.objectID,
      ref: "Xray",
    },
  },
  { collation: "reports" }
);

module.exports = model("Report", reportSchema);
