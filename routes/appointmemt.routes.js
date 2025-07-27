const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');

router.post('/', appointmentController.createAppointment);
router.get('/', appointmentController.getAppointments);

module.exports = router;