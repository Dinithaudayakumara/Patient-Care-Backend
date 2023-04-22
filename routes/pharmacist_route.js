const express = require("express");
const pharmacistRoute = express.Router();
const Pharmacist = require("../models/pharmacist_model");

//Add Data
pharmacistRoute.route("/create").post((req, res) => {
  const { firstName, lastName, userName, email, mobileNumber, password } =
    req.body;
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

//View data
pharmacistRoute.route("/view").get((req, res) => {
  Pharmacist.find()
    .then((pharmacist) => {
      res.status(200).send({ status: "success", pharmacist });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

module.exports = pharmacistRoute;
