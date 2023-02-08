const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: { type: [String], required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    tags: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Tags',
    },
    categories: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Categories',
    },
});

module.exports = mongoose.model('Item', itemSchema);
