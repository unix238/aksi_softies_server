const Router = require('express');
const MaterialController = require('../controllers/materialController.js');
const MaterialRouter = Router();

MaterialRouter.post('/create', MaterialController.createMaterial);
MaterialRouter.get('/all', MaterialController.getMaterials);
MaterialRouter.get('/get/:id', MaterialController.getMaterialById);
MaterialRouter.put('/update', MaterialController.updateMaterial);
MaterialRouter.delete('/delete/:id', MaterialController.deleteMaterial);

module.exports = MaterialRouter;
