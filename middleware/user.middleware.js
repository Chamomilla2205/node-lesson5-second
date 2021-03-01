const errorCodes = require('../constants/error.codes');
const errorMessages = require('../error/error.messages');

module.exports = {
    checkValidId: (req, res, next) => {
        try {
            const { userId } = req.params;

            if (userId.length !== 24) {
                throw new Error(errorMessages.INVALID_ID);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    areUserDataOk: (req, res, next) => {
        try {
            const {
                name, preferLanguage = 'en'
            } = req.body;

            if (!name) {
                throw new Error(errorMessages.REGISTRATION_TROUBLE[preferLanguage]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
