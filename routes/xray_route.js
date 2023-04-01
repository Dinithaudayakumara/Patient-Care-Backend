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
      res, send({ status: faliure });
    });
});

module.exports = xrayRoute;
