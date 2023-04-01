const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const diseaseSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { collection: "diseases" }
);

module.exports = model("Disease", diseaseSchema);
