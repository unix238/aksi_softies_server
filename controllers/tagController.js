const Tags = require('../models/Tags.js');

class tagController {
    async createTag(req, res) {
        try {
            const tag = await Tags.create(req.body);
            return res.status(200).json(tag);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getTags(req, res) {
        try {
            const tags = await Tags.find();
            return res.status(200).json(tags);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getTagById(req, res) {
        try {
            const tag = await Tags.findById(req.params.id);
            return res.status(200).json(tag);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async updateTag(req, res) {
        try {
            const updatedTag = await Tags.updateOne(req.body);
            return res.status(200).json(updatedTag);
        } catch(e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async deleteTag(req, res) {
        try {
            const deletedTag = await Tags.deleteOne(req.body);
            return res.status(200).json(deletedTag);
        } catch(e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }
}

module.exports = new tagController();
