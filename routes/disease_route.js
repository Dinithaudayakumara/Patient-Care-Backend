const express = require("express");
const diseaseRoute = express.Router();
const Disease = require("../models/disease_model");

diseaseRoute.route("/create").post((req, res) => {
  const { name, description } = req.body;
  const disease = new Disease({
    name,
    description,
  });
  disease
    .save()
    .then((disease) => {
      res.send({ status: "success", disease });
    })
    .catch((e) => {
      res.send({ status: faliure });
    });
});

//View data
diseaseRoute.route("/view").get((req, res) => {
  Disease.find()
    .then((disease) => {
      res.status(200).send({ status: "success", disease });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

module.exports = diseaseRoute;
