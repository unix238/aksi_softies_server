const Router = require('express');
const ItemController = require('../controllers/ItemController');
const ItemRouter = Router();

ItemRouter.get('/get', ItemController.getItems);

module.exports = ItemRouter;
