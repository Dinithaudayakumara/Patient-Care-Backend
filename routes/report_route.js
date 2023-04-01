const express = require("express");
const reportRoute = express.Router();
const Report = require("../models/report_model");

reportRoute.route("/create").post((req, res) => {
  const { patientInformation, doctorDetail, disease, medicalRecord, xRay } =
    req.body;
  const report = new Report({
    patientInformation,
    doctorDetail,
    disease,
    medicalRecord,
    xRay,
  });
  report
    .save()
    .then((report) => {
      res.send({ status: "success", report });
    })
    .catch((e) => {
      res, send({ status: faliure });
    });
});

module.exports = reportRoute;
