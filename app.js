const express = require('express');
const doctorRoutes = require('./routes/doctor.routes');
const appointmentRoutes = require('./routes/appointmemt.routes');

const app = express();
app.use(express.json());

app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);

module.exports = app;
