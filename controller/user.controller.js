const service = require('../service/user.service');
const errorCodes = require('../constants/error.codes');
const errorMessage = require('../error/error.messages');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await service.findAllUsers();

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await service.findUserById(userId);

            res.json(user);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(errorMessage.USER_CREATED);
        }
    },

    addNewUser: async (req, res) => {
        try {
            await service.createUser(req.body);

            res.status(errorCodes.CREATED).json(errorMessage.USER_CREATED);
        } catch (error) {
            res.json(error.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;

            await service.deleteUserById(userId);

            res.json(errorMessage.USER_DELETED);
        } catch (err) {
            res.json(errorMessage.CAR_DELETED);
        }
    }
};
