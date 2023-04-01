const express = require("express");
const doctorRoute = express.Router();
const Doctor = require("../models/doctor_model");

//Add data
doctorRoute.route("/create").post((req, res) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    mobileNumber,
    password,
    specialty,
  } = req.body;
  const doctor = new Doctor({
    firstName,
    lastName,
    userName,
    email,
    mobileNumber,
    password,
    specialty,
  });
  doctor
    .save()
    .then((doctor) => {
      res.status(200).send({ status: "success", doctor });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

//View data
doctorRoute.route("/view").get((req, res) => {
  Doctor.find()
    .then((doctor) => {
      res.status(200).send({ status: "success", doctor });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

module.exports = doctorRoute;
