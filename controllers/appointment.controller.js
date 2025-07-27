const appointmentService = require('../services/appointment.service');

exports.createAppointment = (req, res) => {
  try {
    const result = appointmentService.createAppointment(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAppointments = (req, res) => {
  const { doctor_id, patient_id } = req.query;
  const results = appointmentService.getAppointments(doctor_id, patient_id);
  res.json(results);
};
