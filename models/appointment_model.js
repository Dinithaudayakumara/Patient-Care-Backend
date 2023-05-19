const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema(
  {
    patientID: {
      type: Schema.Types.ObjectId,
      ref: "patient",
    },
    title: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    details: {
      type: String,
    },

    doctorDetail: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  { collection: "appointments" }
);

module.exports = model("Appointment", appointmentSchema);
