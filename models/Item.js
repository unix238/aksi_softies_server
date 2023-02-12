const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: { type: [String], required: true },
    price: { type: [Number], required: true },
    sizes: { type: [String], required: true },
    description: { type: [String], required: true },
    images: { type: [String], required: true },
    material: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Material',
    },
    context: {type: [String], required: true},
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
    },
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Item', itemSchema);
