const Categories = require('../models/Categories.js');

class categoryController {
    async createCategory(req, res) {
        try {
            const category = await Categories.create(req.body);
            return res.status(200).json(category);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getCategories(req, res) {
        try {
            const categories = await Categories.find();
            return res.status(200).json(categories);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getCategoryById(req, res) {
        try {
            const category = await Categories.findById(req.params.id);
            return res.status(200).json(category);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async updateCategory(req, res) {
        try {
            const updatedCategory = await Categories.updateOne(req.body);
            return res.status(200).json(updatedCategory);
        } catch(e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async deleteCategory(req, res) {
        try {
            const deletedCategory = await Categories.deleteOne(req.body);
            return res.status(200).json(deletedCategory);
        } catch(e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }
}

module.exports = new categoryController();
