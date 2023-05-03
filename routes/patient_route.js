const express = require("express");
const patientRoute = express.Router();
const Patient = require("../models/patient_model");

//Add Data
patientRoute.route("/create").post((req, res) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    dateofBath,
    mobileNumber,
    password,
    time,
  } = req.body;
  const patient = new Patient({
    firstName,
    lastName,
    userName,
    email,
    dateofBath,
    mobileNumber,
    password,
    time,
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

//View data
patientRoute.route("/view").get((req, res) => {
  Patient.find()
    .then((patient) => {
      res.status(200).send({ status: "success", patient });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

module.exports = patientRoute;
