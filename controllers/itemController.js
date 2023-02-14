const Item = require('../models/Item.js');
const Category = require('../models/Category.js');

class itemController {
    async createItem(req, res) {
        try {
            const images = req.files.map((file) => file.path);
            const item = await Item.create({ ...req.body, images: images });
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
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async updateItem(req, res) {
        try {
            const updatedItem = await Item.updateOne(req.body);
            return res.status(200).json(updatedItem);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async deleteItem(req, res) {
        try {
            const deletedTag = await Item.deleteOne(req.body);
            return res.status(200).json(deletedTag);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getFilteredItems(req, res) {
        const filter = {
            category: req.query.category,
            material: req.query.material,
            size: req.query.size,
            price: req.query.price,
        };

        let query = {};

        if (filter.category) {
            query.category = filter.category;
        }

        if (filter.material) {
            query.material = filter.material;
        }

        if (filter.size) {
            const [minSize, maxSize] = filter.size.split('-').map(Number);
            query.sizes = { $gte: minSize, $lte: maxSize };
        }

        if (filter.price) {
            const [minPrice, maxPrice] = filter.price.split('-').map(Number);
            query.price = { $gte: minPrice, $lte: maxPrice };
        }
        let sort = {};

        if (req.query.sort === 'price-asc') {
            sort.price = 1;
        } else if (req.query.sort === 'price-desc') {
            sort.price = -1;
        } else if (req.query.sort === 'novelty') {
            sort.createdAt = -1;
        }
        try {
            const items = await Item.find(query).sort(sort);
            return res.status(200).json(items);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }
}

module.exports = new itemController();
