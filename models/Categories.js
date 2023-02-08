const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    tags: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Tags',
    },
});

module.exports = mongoose.model('Categories', categoriesSchema);
