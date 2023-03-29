import { Schema, model } from "mongoose";

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
