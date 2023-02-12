const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    title: { type: [String], required: true }
});

module.exports = mongoose.model('Material', materialSchema);
