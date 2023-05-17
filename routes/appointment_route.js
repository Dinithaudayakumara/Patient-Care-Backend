const express = require("express");
const appointmentRoute = express.Router();
const Appointment = require("../models/appointment_model");

appointmentRoute.route("/create").post((req, res) => {
  const { patientID, date, doctorDetail } = req.body;

  const appointment = new Appointment({
    patientID,
    date,
    doctorDetail,
  });
  appointment
    .save()
    .then((appointment) => {
      res.send({ status: "success", appointment });
    })
    .catch((e) => {
      res.send({ status: faliure });
    });
});

//View data
appointmentRoute.route("/view").get((req, res) => {
  Appointment.find()
    .then((appointment) => {
      res.status(200).send({ status: "success", appointment });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

module.exports = appointmentRoute;
