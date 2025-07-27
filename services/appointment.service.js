const store = require('../models/data.store');

exports.createAppointment = ({ date, time, doctor_id, patient_id }) => {
  if (!date || !time || !doctor_id || !patient_id) {
    throw new Error('Missing fields');
  }

  const doctor = store.doctors.find(d => d.id === parseInt(doctor_id));
  if (!doctor) throw new Error('Doctor not found');

  const appointment = {
    id: store.appointments.length + 1,
    date,
    time,
    doctor_id: parseInt(doctor_id),
    patient_id: parseInt(patient_id),
  };

  store.appointments.push(appointment);
  return appointment;
};

exports.getAppointments = (doctor_id, patient_id) => {
  if (doctor_id) {
    return store.appointments.filter(a => a.doctor_id === parseInt(doctor_id));
  } else if (patient_id) {
    return store.appointments.filter(a => a.patient_id === parseInt(patient_id));
  }
  return store.appointments;
};
