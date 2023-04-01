const express = require("express");
const patientRoute = express.Router();
const Patient = require("../models/patient_model");

patientRoute.route("/create").post((req, res) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    dateofBath,
    mobileNumber,
    password,
  } = req.body;
  const patient = new Patient({
    firstName,
    lastName,
    userName,
    email,
    dateofBath,
    mobileNumber,
    password,
  });
  patient
    .save()
    .then((patient) => {
      res.send({ status: "success", patient });
    })
    .catch((e) => {
      res, send({ status: faliure });
    });
});

module.exports = patientRoute;
