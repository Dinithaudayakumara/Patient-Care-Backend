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
      res, send({ status: faliure });
    });
});

module.exports = diseaseRoute;
