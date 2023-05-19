const express = require("express");
const appointmentRoute = express.Router();
const Appointment = require("../models/appointment_model");

appointmentRoute.route("/create").post((req, res) => {
  const { patientID, title, details, time, Date, doctorDetail } = req.body;

  const appointment = new Appointment({
    patientID,
    title,
    details,
    time,
    Date,
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

appointmentRoute.route("/view-by-user-id").post((req, res) => {
  const { userId, date } = req.body;

  Appointment.find({ patientID: userId })

    .then((appointment) => {
      let sendAppoinments = [];
      if (appointment.length > 0) {
        appointment.forEach((item) => {
          if (item.date.substring(0, 10) === date) {
            sendAppoinments.push(item);
          }
        });
        res
          .status(200)
          .send({ status: "success", appointment: sendAppoinments });
      } else {
        res.status(200).send({ status: "success", appointment: appointment });
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(400).send({ status: "failure" });
    });
});

module.exports = appointmentRoute;
