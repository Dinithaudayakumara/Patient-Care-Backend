const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const patient = require("./patient_model");

const feedbackSchema = new mongoose.Schema(
  {
    patientID: {
      type: Schema.Types.ObjectId,
      ref: "patient",
    },
    feedbackDescription: {
      type: String,
    },
    feedbackRating: {
      type: Number,
    },
    feedbackDateandTime: {
      type: String,
    },
  },
  { collection: "feedbacks" }
);

module.exports = model("Feedback", feedbackSchema);
