const Router = require('express');
const AuthController = require('../controllers/authController');
const AuthMiddleware = require('../middlewares/authMiddleware');
const router = new Router();

router.post('/registration', AuthController.registration);
router.post('/login', [AuthMiddleware], AuthController.login);
router.post('/check-token', AuthController.checkToken);

module.exports = router;