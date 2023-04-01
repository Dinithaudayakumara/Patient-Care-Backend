const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const xraySchema = new Schema(
  {
    image: {
      type: String,
    },
  },
  { collection: "xrays" }
);

module.exports = model("Xray", xraySchema);
