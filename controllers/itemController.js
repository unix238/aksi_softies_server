const Item = require('../models/Item.js');
const TelegramAPI = require('node-telegram-bot-api');
const { TOKEN } = require('../config/config.js');
const bot = new TelegramAPI(TOKEN, { polling: true });

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
            if (filter.category !== 'all') {
                query.category = filter.category;
            }
        }

        if (filter.material) {
            if (filter.material !== 'all') {
                query.material = filter.material;
            }
        }

        if (filter.size) {
            if (filter.size !== 'all') {
                const [minSize, maxSize] = filter.size.split('-').map(Number);
                query.sizes = { $gte: minSize, $lte: maxSize };
            }
        }

        if (filter.price) {
            if (filter.price !== 'all') {
                const [minPrice, maxPrice] = filter.price
                    .split('-')
                    .map(Number);
                query.price = { $gte: minPrice, $lte: maxPrice };
            }
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
    async TelegramBot(req, res) {
        const name = req.body.userData.name;
        const email = req.body.userData.email;
        const phone = req.body.userData.phone;
        const social = req.body.userData.social;
        const city = req.body.userData.city;
        const street = req.body.userData.street;
        const zip = req.body.userData.zip;
        const message = req.body.userData.message;

        try {
            await bot.sendMessage(
                '-867559539',
                `Имя: ${name}\nНомер: ${phone}\nemail: ${email}\nСоцсеть: ${social}\nГород: ${city}\nУлица: ${street}\nПочтовый индекс: ${zip}\nСообщение: ${message}\n`
            );

            req.body.items.forEach(async (item) => {
                const itemData = await Item.findById(item.id);
                const itemImageUrl =
                    `http://localhost:8080/` + itemData.images[0];
                await bot.sendMessage(
                    '-867559539',
                    `ID товара: ${itemData.id}\nНазвание товара: ${itemData.title[1]}\nРазмер товара: ${item.size}см\n}`
                );
                // await bot.sendPhoto({
                //     chat_id: '-867559539',
                //     photo: itemImageUrl,
                // });
            });

            res.send('Message sent');
        } catch (e) {
            req.send(e);
        }
    }
}

module.exports = new itemController();
