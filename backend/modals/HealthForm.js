const mongoose = require('mongoose');

const HealthDataSchema = new mongoose.Schema({
    FamilyHistory: {
    type: [],
    required: true
  },
  chronicDisease: {
    type: [],
    required: true
  },
  goal: {
    type: [],
    required: true
  },
  currentSuppliments:{
    type: String
  }
});

const HealthData = mongoose.model('HealthData' );

module.exports = User;
