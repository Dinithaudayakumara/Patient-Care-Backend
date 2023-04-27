const express = require("express");
const reportRoute = express.Router();
const Report = require("../models/report_model");

//Add Data
reportRoute.route("/create").post((req, res) => {
  const {
    patientInformation,
    doctorDetail,
    disease,
    medicalRecord,
    xRay,
  } = req.body;
  const report = new Report({
    patientInformation,
    doctorDetail,
    disease,
    medicalRecord,
    xRay
  });
  report
    .save()
    .then((report) => {
      res.send({ status: "success", report });
    })
    .catch((e) => {
      console.log(e)
      res.send({ status: "faliure" });
    });
});


//View data
reportRoute.route("/view").get((req, res) => {
  Report.find()
    .then((report) => {
      res.status(200).send({ status: "success", report });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

module.exports = reportRoute;
