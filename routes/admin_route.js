const express = require("express");
const adminRoute = express.Router();
const Admin = require("../models/admin_model");

//Add data
adminRoute.route("/create").post((req, res) => {
  const { userName, email, password } = req.body;
  const admin = new Admin({
    userName,
    email,
    password,
  });
  admin
    .save()
    .then((admin) => {
      res.status(200).send({ status: "success", admin });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

//View data
adminRoute.route("/view").get((req, res) => {
  Admin.find()
    .then((admin) => {
      res.status(200).send({ status: "success", admin });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

module.exports = adminRoute;
