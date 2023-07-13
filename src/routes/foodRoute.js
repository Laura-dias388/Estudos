const { Router } = require('express');
const foodController = require('../controller/foodController');

const route = Router();

route.get('/', foodController.findFoods);

module.exports = route;