const doctorService = require('../services/doctor.service');

exports.getAllDoctors = (req, res) => {
  const doctors = doctorService.getAllDoctors();
  res.json(doctors);
};

exports.getDoctorById = (req, res) => {
  const doctor = doctorService.getDoctorById(req.params.id);
  if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
  res.json(doctor);
};
