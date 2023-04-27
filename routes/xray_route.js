const express = require("express");
const xrayRoute = express.Router();
const Xray = require("../models/xray_model");

xrayRoute.route("/create").post((req, res) => {
  const { image } = req.body;
  const xray = new Xray({
    image,
  });
  xray
    .save()
    .then((Xray) => {
      res.send({ status: "success", Xray });
    })
    .catch((e) => {
      res.send({ status: faliure });
    });
});

//View data
xrayRoute.route("/view").get((req, res) => {
  Xray.find()
    .then((xray) => {
      res.status(200).send({ status: "success", xray });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

module.exports = xrayRoute;
