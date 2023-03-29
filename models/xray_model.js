import { Schema, model } from "mongoose";

const xraySchema = new Schema(
  {
    image: {
      type: String,
    },
  },
  { collation: "xrays" }
);

module.exports = model("Xray", xraySchema);
