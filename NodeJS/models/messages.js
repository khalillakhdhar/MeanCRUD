const mongoose = require('mongoose');

var Message = mongoose.model('Message', {
    titre: { type: String },
    telephone: { type: String },
    text: { type: String },
});

module.exports = { Message };