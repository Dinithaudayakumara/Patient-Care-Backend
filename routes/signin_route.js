const express = require("express");
const signInRoute = express.Router();
const Doctor = require("../models/doctor_model");
const Pharmacist = require("../models/pharmacist_model");
const Admin = require("../models/admin_model");
const jwt = require("jsonwebtoken");

signInRoute.route("/sign-in").post((req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  Doctor.findOne({ email: email, password: password })
    .then((doctor) => {
      if (doctor) {
        const token = jwt.sign(
          {
            id: doctor._id,
            employeeType: "doctor",
          },
          process.env.SECRETKEY
        );
        res.status(200).send({
          status: "login-success",
          token,
          user: {
            userName: doctor.userName,
            employeeType: "doctor",
          },
        });
      } else {
        Pharmacist.findOne({ email: email, password: password })
          .then((pharmacist) => {
            if (pharmacist) {
              const token = jwt.sign(
                {
                  id: pharmacist._id,
                  employeeType: "pharmacist",
                },
                process.env.SECRETKEY
              );
              res.status(200).send({
                status: "login-success",
                token,
                user: {
                  userName: pharmacist.userName,
                  employeeType: "pharmacist",
                },
              });
            } else {
              Admin.findOne({ email: email, password: password })
                .then((admin) => {
                  if (admin) {
                    const token = jwt.sign(
                      {
                        id: admin._id,
                        employeeType: "admin",
                      },
                      process.env.SECRETKEY
                    );
                    res.status(200).send({
                      status: "login-success",
                      token,
                      user: {
                        userName: admin.userName,
                        employeeType: "admin",
                      },
                    });
                  } else {
                    res.status(404).send({
                      status: "failure",
                      message: "Username or password incorrect",
                    });
                  }
                })
                .catch((error) => {
                  console.log("Error occurred:", error);
                });
            }
          })
          .catch((error) => {
            console.log("Error occurred:", error);
          });
      }
    })
    .catch((error) => {
      console.log("Error occurred:", error);
    });
});

module.exports = signInRoute;
