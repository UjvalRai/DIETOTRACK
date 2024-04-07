const express = require('express');
const User = require('../modals/User');
const { createHealthForm } = require('../controllers/HealthForm');
const router = express.Router();

router.post('/health-form', createHealthForm);
module.exports = router;
