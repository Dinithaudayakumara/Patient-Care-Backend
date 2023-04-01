const express = require("express");
const pharmacistRoute = express.Router();
const Pharmacist = require("../models/pharmacist_model");

pharmacistRoute.route("/create").post((req, res) => {
  const { firstName, lastName, userName, email, mobileNumber, password } = req.body;
  const pharmacist = new Pharmacist({
    firstName,
    lastName,
    userName,
    email,
    mobileNumber,
    password,
  });
  pharmacist
    .save()
    .then((pharmacist) => {
      res.send({ status: "success", pharmacist });
    })
    .catch((e) => {
      res, send({ status: faliure });
    });
});

module.exports = pharmacistRoute;
