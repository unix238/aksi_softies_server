const Router = require('express');
const CategoryController = require('../controllers/categoryController.js');
const CategoryRouter = Router();

CategoryRouter.post('/create', CategoryController.createCategory);
CategoryRouter.get('/all', CategoryController.getCategories);
CategoryRouter.get('/get/:id', CategoryController.getCategoryById);
CategoryRouter.put('/update', CategoryController.updateCategory);
CategoryRouter.delete('/delete/:id', CategoryController.deleteCategory);

module.exports = CategoryRouter;
