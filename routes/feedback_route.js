const express = require("express");
const feedbackRoute = express.Router();
const Feedback = require("../models/feedback_model");

//Add Data
feedbackRoute.route("/create").post((req, res) => {
  const {
    patientID,
    feedbackDescription,
    feedbackRating,
    feedbackDateandTime,
  } = req.body;

  const feedback = new Feedback({
    patientID,
    feedbackDescription,
    feedbackRating,
    feedbackDateandTime,
  });

  feedback // Save feedback details
    .save()
    .then((feedback) => {
      res.send({ status: "sucess", feedback });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

//View all feedbacks
feedbackRoute.route("/view").get((req, res) => {
  Feedback.find()
    .then((feedback) => {
      res.status(200).send({ status: "sucess", feedback });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = feedbackRoute;
