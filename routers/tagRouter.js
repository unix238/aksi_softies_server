const Router = require('express');
const TagController = require('../controllers/tagController.js');
const TagRouter = Router();

TagRouter.post('/create', TagController.createTag);
TagRouter.get('/all', TagController.getTags);
TagRouter.get('/get/:id', TagController.getTagById);
TagRouter.put('/update', TagController.updateTag);
TagRouter.delete('/delete/:id', TagController.deleteTag);

module.exports = TagRouter;
