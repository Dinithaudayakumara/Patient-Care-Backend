const express = require("express");
const prescriptionRoute = express.Router();
const Prescription = require("../models/prescription_model");

prescriptionRoute.route("/create").post((req, res) => {
  const { description, patientID, doctorDetail } = req.body;

  const prescription = new Prescription({
    description,
    patientID,
    doctorDetail,
  });
  prescription
    .save()
    .then((prescription) => {
      res.send({ status: "success", prescription });
    })
    .catch((e) => {
      res.send({ status: faliure });
    });
});

//View data
prescriptionRoute.route("/view").get((req, res) => {
  Prescription.find()
    .then((prescription) => {
      res.status(200).send({ status: "success", prescription });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

//View all products accoding to catergory ID
prescriptionRoute.route("/get-precsriptions-by-user-id").post((req, res) => {
  const { user } = req.body;
  console.log(user);
  Prescription.find({ user })
    .then((prescription) => {
      res.status(200).send({
        status: "Success",
        prescription,
      });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = prescriptionRoute;
