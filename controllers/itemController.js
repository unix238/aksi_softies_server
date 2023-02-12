const Item = require('../models/Item.js');
const Category = require('../models/Category.js');

class itemController {
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

    // async getFilteredItems(req, res) {
    //     try {
    //         const filter = req.query;

    //         // const items = await Item.find({material: filter.material});

    //         const [minPrice, maxPrice] = filter.price.split("-").map(Number);
    //         // const items = await Item.find({price: {$gte: minPrice, $lte: maxPrice}});

    //         const [minSize, maxSize] = filter.size.split("-").map(Number);
    //         // const items = await Item.find({sizes: {$gte: minSize, $lte: maxSize}});
            
    //         // const items = await Item.find({price: { $gte: 1, $lte: 100000 } }).sort({ price: 1 });
    //         // const items = await Item.find({price: { $gte: 1, $lte: 100000 } }).sort({ price: -1 });
    //         // const items = await Item.find().sort({ createdAt: -1 });

    //         // const category = await Category.find({_id: req.query.category});
            
    //         // const items = await Item.find({category: category._id});
    //         // console.log(category._id);
    //         return res.status(200).json(items);
    //         return res.status(200).json({});

    //     } catch (e) {
    //         console.log(e);
    //         return res.status(500).json(e);
    //     }
    // }
}

module.exports = new itemController();
