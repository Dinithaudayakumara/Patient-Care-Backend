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
    bloodGroup,
    weight,
    height,
    gender,
    profileImage,
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
    bloodGroup,
    weight,
    height,
    gender,
    profileImage,
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
//update catergory
patientRoute.route("/update").post((req, res) => {
  const { patient } = req.body;
  console.log(patient);
  Patient.findByIdAndUpdate(patient._id, patient)
    .then((patient) => {
      res.status(200).send({ status: "sucess", patient });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});
//sign in

patientRoute.route("/sign-in").post((req, res) => {
  const { email, password } = req.body;
  Patient.findOne({ email: email, password: password })
    .then((patient) => {
      if (patient) {
        const {
          _id,
          firstName,
          lastName,
          userName,
          email,
          dateofBath,
          mobileNumber,
          time,
        } = patient;

        const sendUser = {
          _id,
          firstName,
          lastName,
          userName,
          email,
          dateofBath,
          mobileNumber,
          time,
        };

        res.status(200).send({
          status: "login-sucess",
          patient: sendUser,
        });
      } else {
        res
          .status(401)
          .send({ status: "User not found", errorMsg: "User not found" });
      }
    })
    .catch((e) => {
      res.status(400).send({
        status: "Bad request",
        errorMsg: "Username or password incorrect",
      });
    });
});

module.exports = patientRoute;
