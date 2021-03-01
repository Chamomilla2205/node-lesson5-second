const router = require('express').Router();
const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);
router.post('/', userMiddleware.areUserDataOk, userController.addNewUser);

router.get('/:userId', userMiddleware.checkValidId, userController.getSingleUser);
router.delete('/:userId', userMiddleware.checkValidId, userController.deleteUser);

module.exports = router;
