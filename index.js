const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const patientRoute = require("./routes/patient_route");
const doctorRoute = require("./routes/doctor_route");
const pharmacistRoute = require("./routes/pharmacist_route");
const diseaseRoute = require("./routes/disease_route");
const reportRoute = require("./routes/report_route");
const xrayRoute = require("./routes/xray_route");
const feedbackRoute = require("./routes/feedback_route");
const prescriptionRoute = require("./routes/prescription_route");
const appointmentRoute = require("./routes/appointment_route");
const userTypeRoute = require("./routes/user_type_route");
const adminRoute = require("./routes/admin_route");

const app = express();
const PORT = 5004;

mongoose.connect(process.env.con);

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database Successfully"));

app.use(cors());
app.use(express.json());
app.use("/patient", patientRoute);
app.use("/doctor", doctorRoute);
app.use("/pharmacist", pharmacistRoute);
app.use("/disease", diseaseRoute);
app.use("/report", reportRoute);
app.use("/xray", xrayRoute);
app.use("/feedback", feedbackRoute);
app.use("/prescription", prescriptionRoute);
app.use("/appointment", appointmentRoute);
app.use("/userType", userTypeRoute);
app.use("/admin", adminRoute);

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
