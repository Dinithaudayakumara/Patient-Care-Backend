const mongoose = require("mongoose");

const userTypeSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
    },
  },
  { collection: "userTypes" }
);

module.exports = mongoose.model("UserType", userTypeSchema);
