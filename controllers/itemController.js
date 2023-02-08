const Item = require('../models/Item.js');
const Tags = require('../models/Tags.js');
const Categories = require('../models/Categories.js');

class ItemController {
    async createItem(req, res) {
        try {
            const item = await Item.create(req.body);
            return res.status(200).json(item);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getItems(req, res) {
        try {
            const items = await Item.find();
            return res.status(200).json(items);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getItemById(req, res) {
        try {
            const item = await Item.findById(req.params.id);
            return res.status(200).json(item);
        } catch(e) {
            console.log(e);
            return res.status(500).json(e);
        }
    } 

    async updateItem(req, res) {
        try {
            const updatedItem = await Item.updateOne(req.body);
            return res.status(200).json(updatedItem);
        } catch(e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async deleteItem(req, res) {
        try {
            const deletedTag = await Item.deleteOne(req.body);
            return res.status(200).json(deletedTag);
        } catch(e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }
}

module.exports = new ItemController();
