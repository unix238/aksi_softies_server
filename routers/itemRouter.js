const Router = require('express');
const ItemController = require('../controllers/itemController.js');
const uploadMiddleware = require('../middleware/uploadMiddleware.js');
const ItemRouter = Router();

ItemRouter.post(
  '/create',
  [uploadMiddleware.array('images')],
  ItemController.createItem
);
ItemRouter.get('/all', ItemController.getItems);
ItemRouter.get('/get/:id', ItemController.getItemById);
ItemRouter.put('/update', ItemController.updateItem);
ItemRouter.delete('/delete/:id', ItemController.deleteItem);
ItemRouter.get('/filter', ItemController.getFilteredItems);

module.exports = ItemRouter;
