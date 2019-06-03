const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    mdp: { type: String },
    salary: { type: Number }
});

module.exports = { Employee };