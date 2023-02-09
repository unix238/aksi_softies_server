const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: {type: String, required: true},
    phone: {type: String, required: true, uniquie: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('User', User);