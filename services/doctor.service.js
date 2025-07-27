const store = require('../models/data.store');

exports.getAllDoctors = () => store.doctors;

exports.getDoctorById = (id) => store.doctors.find(doc => doc.id === parseInt(id));