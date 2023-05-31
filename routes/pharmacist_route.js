const express = require("express");
const pharmacistRoute = express.Router();
const Pharmacist = require("../models/pharmacist_model");

//Add Data
pharmacistRoute.route("/create").post((req, res) => {
  const { pharmacist } = req.body;
  const newPharmacist = new Pharmacist({ ...pharmacist });
  newPharmacist //Save user details.
    .save()
    .then((pharmacist) => {
      res.send({ status: "success", pharmacist });
    })
    .catch((e) => {
      res.send({ status: faliure });
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

//update catergory
pharmacistRoute.route("/update").post((req, res) => {
  const { pharmacist } = req.body;
  console.log(pharmacist);
  Pharmacist.findByIdAndUpdate(pharmacist._id, pharmacist)
    .then((pharmacist) => {
      res.status(200).send({ status: "sucess", pharmacist });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = pharmacistRoute;
