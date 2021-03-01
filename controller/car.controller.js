const carService = require('../service/car.service');
const errorCodes = require('../constants/error.codes');
const errorMessage = require('../error/error.messages');

module.exports = {
    getAllCars: async (req, res) => {
        try {
            const users = await carService.findAllCars();
            res.json(users);
        } catch (err) {
            res.status(errorCodes.BAD_REQUEST).json(err.message);
        }
    },

    getSingleCar: async (req, res) => {
        try {
            const { carId } = req.params;

            await carService.findCarById(carId);
        } catch (err) {
            res.json(err.message);
        }
    },

    createNewCar: async (req, res) => {
        try {
            await carService.createCar(req.body);

            res.status(errorCodes.CREATED).json(errorMessage.CAR_CREATED);
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteOneCar: async (req, res) => {
        try {
            const { carId } = req.params;

            await carService.deleteCarById(carId);
        } catch (err) {
            res.json(err.message);
        }
    }
};
