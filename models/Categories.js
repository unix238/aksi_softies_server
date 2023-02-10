const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    title: { type: [String], required: true },
    slug: { type: String, required: true }
});

module.exports = mongoose.model('Categories', categoriesSchema);
